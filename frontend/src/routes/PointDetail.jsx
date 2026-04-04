import { useNavigate } from "react-router-dom";

import {
  MapPin,
  Clock,
  Check,
  Battery,
  Lightbulb,
  Smartphone,
  Cable,
} from "lucide-react";

import AppShell from "../components/AppShell";
import TopBar from "../components/TopBar";

const acceptedItems = [
  {
    icon: <Battery size={18} className="text-amber" />,
    label: "Pilhas",
    pts: "+30 pts / descarte",
    bg: "bg-amber/10",
  },
  {
    icon: <Lightbulb size={18} className="text-[#A78BFA]" />,
    label: "Lâmpadas",
    pts: "+20 pts / descarte",
    bg: "bg-[rgba(167,139,250,0.1)]",
  },
  {
    icon: <Smartphone size={18} className="text-primary" />,
    label: "Smartphones",
    pts: "+80 pts / descarte",
    bg: "bg-(--mint-glow)",
  },
  {
    icon: <Cable size={18} className="text-eco-blue" />,
    label: "Carregadores",
    pts: "+15 pts / descarte",
    bg: "bg-eco-blue/10",
  },
];

const PointDetail = () => {
  const navigate = useNavigate();

  return (
    <AppShell activeTab="points">
      <TopBar showBack backLabel="Pontos" onBack={() => navigate("/pontos")} />

      <div className="lg:grid lg:grid-cols-2 lg:gap-8 px-5 pb-5">
        <div>
          <h1 className="font-display font-extrabold text-2xl tracking-tight mb-1.5">
            Claro Store
          </h1>
          <div className="text-[0.85rem] text-muted-foreground mb-3.5">
            Av. Antônio Prado, 1204 · Shopping Indaiatuba, L42
          </div>
          <div className="flex gap-2.5 mb-5">
            <span className="flex items-center gap-1.5 bg-(--mint-glow) rounded-full px-3 py-1.5 text-xs text-primary [&_svg]:w-3.5 [&_svg]:h-3.5">
              <MapPin size={14} /> 280m de você
            </span>
            <span className="flex items-center gap-1.5 bg-[rgba(74,222,128,0.08)] text-[#4ADE80] rounded-full px-3 py-1.5 text-xs [&_svg]:w-3.5 [&_svg]:h-3.5">
              <Clock size={14} /> Aberto · até 22h
            </span>
          </div>

          {/* Map placeholder */}
          <div className="mb-5 h-45 lg:h-55 rounded-lg bg-card border-[1.5px] border-border flex items-center justify-center flex-col gap-2.5 relative overflow-hidden">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            <div className="w-4 h-4 bg-primary rounded-full border-2 border-foreground shadow-[0_0_0_6px_hsla(168,76%,50%,0.2)] relative z-10" />
            <div className="text-xs text-muted-foreground z-10 bg-card px-3 py-1 rounded-full border border-border flex items-center gap-1">
              <MapPin size={12} className="text-primary" />
              Ver no Google Maps
            </div>
          </div>
        </div>

        <div>
          {/* Accepts */}
          <div className="pb-5">
            <div className="font-display text-[0.8rem] font-bold text-muted-foreground uppercase tracking-[1px] mb-3">
              O que este ponto aceita
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {acceptedItems.map((item) => (
                <div
                  key={item.label}
                  className="bg-card border-[1.5px] border-border rounded-sm p-3.5 flex items-center gap-2.5"
                >
                  <div
                    className={`w-8.5 h-8.5 rounded-[10px] flex items-center justify-center shrink-0 ${item.bg}`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[0.8rem] font-medium">
                      {item.label}
                    </div>
                    <div className="text-[0.65rem] text-primary mt-0.5">
                      {item.pts}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex gap-2.5">
            <button
              onClick={() => navigate("/confirmar")}
              className="flex-1 border-none rounded-sm px-4 py-4 font-display font-bold text-[0.9rem] cursor-pointer flex items-center justify-center gap-2 transition-all hover:opacity-90 hover:-translate-y-px text-foreground shadow-mint"
              style={{ background: "var(--gradient-cta)" }}
            >
              <Check size={18} /> Confirmar descarte aqui
            </button>
            <button className="bg-card text-eco-secondary border-[1.5px] border-border rounded-sm px-4.5 py-4 font-display font-semibold text-[0.85rem] cursor-pointer flex items-center justify-center gap-2 transition-colors hover:border-primary hover:text-primary">
              <MapPin size={18} />
            </button>
          </div>
        </div>
      </div>
    </AppShell>
  );
};

export default PointDetail;
