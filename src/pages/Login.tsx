import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const session = sessionStorage.getItem('nl_os_session');
    if (session) {
      navigate('/pipeline');
    }
  }, [navigate]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if ((username === 'leandro' || username === 'neandro') && password === 'nl2026') {
      sessionStorage.setItem('nl_os_session', JSON.stringify({ user: username, timestamp: Date.now() }));
      toast.success(`Bem-vindo, ${username.charAt(0).toUpperCase() + username.slice(1)}`);
      navigate('/pipeline');
    } else {
      toast.error('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 font-mono">
      <div className="w-full max-w-[320px] flex flex-col items-center space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-[56px] font-bold text-[#1A1A1A] font-serif leading-none tracking-tight">
            NL OS
          </h1>
          <p className="text-[10px] text-[#999999] uppercase tracking-[0.2em]">
            Sistema Operacional · NL Arquitetos
          </p>
        </div>

        <div className="w-8 h-[1px] bg-[#8B7355] opacity-40"></div>

        <form onSubmit={handleLogin} className="w-full space-y-4">
          <div className="space-y-1">
            <Label htmlFor="username" className="text-[10px] text-[#999999] uppercase tracking-wider">Usuário</Label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value.toLowerCase())}
              className="border-[#E8E4DF] focus:border-[#8B7355] rounded-[2px] h-10 text-sm"
              autoFocus
            />
          </div>
          
          <div className="space-y-1">
            <Label htmlFor="password" className="text-[10px] text-[#999999] uppercase tracking-wider">Senha</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-[#E8E4DF] focus:border-[#8B7355] rounded-[2px] h-10 text-sm"
            />
          </div>

          <Button 
            type="submit"
            className="w-full bg-[#1A1A1A] hover:bg-[#8B7355] text-white rounded-[2px] h-10 uppercase text-xs tracking-widest transition-colors"
          >
            Entrar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
