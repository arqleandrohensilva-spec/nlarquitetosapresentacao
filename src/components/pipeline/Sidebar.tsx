import React from 'react';
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeModule: string;
  user: string;
}

const Sidebar = ({ activeModule, user }: SidebarProps) => {
  const sections = [
    {
      title: "LEADS",
      items: ["01 · Pipeline"]
    },
    {
      title: "APRESENTAÇÕES",
      items: [
        { label: "ARQ + INT", path: "/apresentacao/arqint" },
        { label: "INTERIOR", path: "/apresentacao/int" },
        { label: "COMERCIAL", path: "/apresentacao/comercial" }
      ]
    },
    {
      title: "PROPOSTAS",
      items: [
        { label: "ARQ + INT", path: "/proposta/arqint" },
        { label: "INTERIOR", path: "/proposta/int" },
        { label: "COMERCIAL", path: "/proposta/comercial" }
      ]
    },
    {
      title: "FINANCEIRO",
      items: ["02 · Base Financeira", "07 · Fin. Projetos", "12 · Dashboard"],
      disabled: true
    },
    {
      title: "PROJETOS",
      items: ["03 · Horas", "06 · Gestão", "10 · Modo Cliente"],
      disabled: true
    },
    {
      title: "MARKETING",
      items: ["09 · Satisfação", "11 · CMO Virtual"],
      disabled: true
    }
  ];

  return (
    <aside className="w-[230px] bg-[#1A1A1A] flex flex-col h-full py-8 px-0 border-r border-[#1A1A1A]">
      <div className="px-6 mb-10">
        <div className="flex items-baseline space-x-1">
          <span className="text-3xl font-bold font-serif text-white leading-none">NL</span>
          <span className="text-[10px] text-[#8B7355] font-mono tracking-[0.2em] font-bold">OS</span>
        </div>
        <p className="text-[9px] text-[#999999] uppercase tracking-[0.1em] mt-1">Sistema Operacional</p>
      </div>

      <nav className="flex-1 space-y-8 overflow-y-auto">
        {sections.map((section) => (
          <div key={section.title} className="space-y-1">
            <h3 className="px-6 text-[9px] text-[#999999] font-mono uppercase tracking-[0.2em] mb-3">
              {section.title}
            </h3>
            {section.items.map((item) => {
              const isActive = item === activeModule;
              return (
                <div
                  key={item}
                  className={cn(
                    "group flex items-center h-10 px-6 cursor-pointer transition-all border-l-2",
                    isActive 
                      ? "bg-[#8B7355]/10 border-[#8B7355] text-white" 
                      : "border-transparent text-white/40 hover:text-white/60",
                    section.disabled && "cursor-not-allowed"
                  )}
                >
                  <span className="text-[11px] font-mono tracking-tight flex items-center w-full justify-between">
                    {item}
                    {section.disabled && (
                      <span className="text-[7px] border border-white/20 px-1 py-0.5 rounded-[2px] opacity-50 uppercase tracking-tighter">
                        em breve
                      </span>
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        ))}
      </nav>

      <div className="px-6 mt-auto pt-8 border-t border-white/5">
        <div className="flex flex-col">
          <span className="text-[11px] text-white font-mono uppercase tracking-wider">{user}</span>
          <span className="text-[9px] text-[#999999] font-mono uppercase tracking-tight">Arquitetura Premium</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
