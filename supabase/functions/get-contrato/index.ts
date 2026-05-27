// Edge function: validates PIN and returns contract data
// Public endpoint (verify_jwt = false by default in Lovable Cloud)
import { createClient } from "npm:@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

const onlyDigits = (s: string) => (s || "").replace(/\D/g, "");

async function sha256Hex(input: string): Promise<string> {
  const bytes = new TextEncoder().encode(input);
  const hash = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const body = await req.json().catch(() => ({}));
    const slug = typeof body?.slug === "string" ? body.slug.trim() : "";
    const pin = typeof body?.pin === "string" ? onlyDigits(body.pin) : "";

    if (!slug || slug.length > 200) {
      return new Response(JSON.stringify({ error: "Slug inválido" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!pin || pin.length < 4 || pin.length > 8) {
      return new Response(JSON.stringify({ error: "PIN inválido" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const admin = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { data, error } = await admin
      .from("contratos_clientes")
      .select("*")
      .eq("slug", slug)
      .maybeSingle();

    if (error || !data) {
      return new Response(JSON.stringify({ error: "Contrato não encontrado" }), {
        status: 404,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Compute expected PIN: stored pin_hash OR fallback to last 4 of CPF
    const expectedFromCpf = onlyDigits(data.cpf_cliente || "").slice(-4);
    const providedHash = await sha256Hex(pin);
    const fallbackHash = expectedFromCpf ? await sha256Hex(expectedFromCpf) : null;

    const ok =
      (data.pin_hash && providedHash === data.pin_hash) ||
      (!data.pin_hash && fallbackHash && providedHash === fallbackHash);

    if (!ok) {
      return new Response(JSON.stringify({ error: "PIN incorreto" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Strip sensitive auth field before returning
    const { pin_hash: _omit, ...safe } = data as Record<string, unknown>;
    return new Response(JSON.stringify({ contrato: safe }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: "Erro interno" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
