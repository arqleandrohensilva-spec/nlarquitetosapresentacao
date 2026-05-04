import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Search, ChevronDown, Plus } from 'lucide-react';
import { cn } from "@/lib/utils";

interface ToolbarProps {
  filters: any;
  setFilters: (filters: any) => void;
  onNewLead: () => void;
}

const Toolbar = ({ filters, setFilters, onNewLead }: ToolbarProps) => {
  const tipos = ['Todos', 'Arq+Int', 'Interiores', 'Comercial'];
  const temps = [
    { label: 'Quente', color: 'bg-[#B83232]' },
    { label: 'Morno', color: 'bg-[#C49A2A]' },
    { label: 'Frio', color: 'bg-[#999999]' }
  ];

  const toggleTemp = (temp: string) => {
    const newTemp = filters.temp.includes(temp)
      ? filters.temp.filter((t: string) => t !== temp)
      : [...filters.temp, temp];
    setFilters({ ...filters, temp: newTemp });
  };

  return (
    <div className="px-8 flex items-center justify-between mb-8 space-x-4">
      <div className="flex items-center space-x-2">
        {tipos.map(tipo => (
          <button
            key={tipo}
            onClick={() => setFilters({ ...filters, tipo })}
            className={cn(
              "px-4 h-8 rounded-full text-[10px] font-mono uppercase tracking-wider transition-all border",
              filters.tipo === tipo 
                ? "bg-[#1A1A1A] border-[#1A1A1A] text-white" 
                : "border-[#E8E4DF] text-[#999999] hover:border-[#1A1A1A]"
            )}
          >
            {tipo}
          </button>
        ))}
      </div>

      <div className="h-4 w-[1px] bg-[#E8E4DF]"></div>

      <div className="flex items-center space-x-4">
        {temps.map(temp => (
          <button
            key={temp.label}
            onClick={() => toggleTemp(temp.label)}
            className={cn(
              "flex items-center space-x-2 px-2 py-1 rounded transition-all",
              filters.temp.includes(temp.label) ? "bg-[#E8E4DF]/30" : "opacity-60"
            )}
          >
            <div className={cn("w-2 h-2 rounded-full", temp.color)}></div>
            <span className="text-[10px] font-mono uppercase text-[#1A1A1A]">{temp.label}</span>
          </button>
        ))}
      </div>

      <div className="flex-1 max-w-[300px] relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-[#999999]" />
        <Input
          placeholder="BUSCAR LEAD..."
          value={filters.search}
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          className="pl-9 h-8 border-[#E8E4DF] focus:border-[#8B7355] text-[10px] uppercase font-mono tracking-widest placeholder:text-[#999999]"
        />
      </div>

      <div className="flex items-center space-x-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="h-8 border-[#E8E4DF] text-[10px] font-mono uppercase px-3 space-x-2">
              <span>ORDENAR POR: {filters.sort}</span>
              <ChevronDown className="w-3 h-3 text-[#999999]" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="font-mono text-[10px]">
            {['Score ↓', 'Valor ↓', 'Data entrada'].map(sort => (
              <DropdownMenuItem 
                key={sort}
                onClick={() => setFilters({ ...filters, sort })}
                className="uppercase py-2"
              >
                {sort}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <Button 
          onClick={onNewLead}
          className="h-8 bg-[#1A1A1A] hover:bg-[#8B7355] text-white text-[10px] font-mono uppercase tracking-widest px-4 space-x-2 rounded-[2px]"
        >
          <Plus className="w-3 h-3" />
          <span>Novo Lead</span>
        </Button>
      </div>
    </div>
  );
};

export default Toolbar;
