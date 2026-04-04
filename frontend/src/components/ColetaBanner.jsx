import { Home, ChevronRight } from "lucide-react";

const ColetaBanner = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="mx-5 mb-7 border border-[rgba(96,165,250,0.22)] rounded-lg p-[18px_20px] flex items-center gap-4 cursor-pointer transition-all relative overflow-hidden hover:border-[rgba(96,165,250,0.5)] hover:-translate-y-px"
      style={{ background: "var(--gradient-coleta)" }}
    >
      <div className="absolute -right-7.5 -top-7.5 w-30 h-30 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(96,165,250,0.12)_0%,transparent_65%)]" />
      <div className="w-12 h-12 shrink-0 bg-[rgba(96,165,250,0.12)] rounded-[14px] flex items-center justify-center">
        <Home size={24} className="text-eco-blue" />
      </div>
      <div className="flex-1">
        <div className="font-display font-bold text-[0.92rem] mb-0.5">
          Agendar coleta em casa
        </div>
        <div className="text-xs text-muted-foreground leading-relaxed">
          TV velha, computador, geladeira? A gente vai até você.
        </div>
        <span className="bg-[rgba(96,165,250,0.15)] text-[#93C5FD] text-[0.65rem] font-semibold px-2.5 py-0.5 rounded-full mt-1.5 inline-block">
          NOVO · Grátis acima de 500pts
        </span>
      </div>
      <ChevronRight size={18} className="text-muted-foreground shrink-0" />
    </div>
  );
};

export default ColetaBanner;
