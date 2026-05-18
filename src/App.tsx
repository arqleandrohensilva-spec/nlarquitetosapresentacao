import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AlertCircle } from "lucide-react";
import { isSupabaseConfigured } from "@/integrations/supabase/client";
import Home from "./pages/Home.tsx";
import Login from "./pages/Login.tsx";
import Pipeline from "./pages/Pipeline.tsx";
import PropostaArqint from "./pages/PropostaArqint.tsx";
import PropostaInt from "./pages/PropostaInt.tsx";
import PropostaComercial from "./pages/PropostaComercial.tsx";
import Captacao from "./pages/Captacao.tsx";
import Int from "./pages/Int.tsx";
import ApresentacaoComercial from "./pages/ApresentacaoComercial.tsx";
import NotFound from "./pages/NotFound.tsx";
import PropostaCliente from "./pages/PropostaCliente.tsx";

const queryClient = new QueryClient();

const App = () => {
  if (!isSupabaseConfigured) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-red-950/20 border border-red-500/50 rounded-lg p-6 text-center space-y-4">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto" />
          <h1 className="text-xl font-semibold text-white">Configuração Incompleta</h1>
          <p className="text-red-200/80 text-sm">
            As variáveis de ambiente do Supabase não foram encontradas. 
            Verifique se VITE_SUPABASE_URL e VITE_SUPABASE_PUBLISHABLE_KEY estão configuradas.
          </p>
        </div>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/pipeline" element={<Pipeline />} />
            <Route path="/proposta/arqint" element={<PropostaArqint />} />
            <Route path="/proposta/int" element={<PropostaInt />} />
            <Route path="/proposta/comercial" element={<PropostaComercial />} />
            <Route path="/apresentacao/arqint" element={<Captacao />} />
            <Route path="/apresentacao/int" element={<Int />} />
            <Route path="/apresentacao/comercial" element={<ApresentacaoComercial />} />
            <Route path="/p/:tipo/:slug" element={<PropostaCliente />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
