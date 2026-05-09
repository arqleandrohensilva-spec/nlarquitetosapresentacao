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
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
