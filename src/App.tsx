import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
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
