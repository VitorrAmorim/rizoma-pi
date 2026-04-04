import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Check, Battery, Lightbulb, Smartphone, Cable } from "lucide-react";

import AppShell from "../components/AppShell";
import TopBar from "../components/TopBar";
import ItemToggle from "../components/ItemToggle";

const disposalItems = [
  { id: "pilhas", icon: <Battery size={18} />, label: "Pilhas", points: 30 },
  {
    id: "lampadas",
    icon: <Lightbulb size={18} />,
    label: "Lâmpadas",
    points: 20,
  },
  {
    id: "smartphone",
    icon: <Smartphone size={18} />,
    label: "Smartphone",
    points: 80,
  },
  {
    id: "carregador",
    icon: <Cable size={18} />,
    label: "Carregador",
    points: 15,
  },
];

const ConfirmDisposal = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(["pilhas", "smartphone"]);

  const toggle = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id],
    );
  };

  const totalPoints = disposalItems
    .filter((i) => selected.includes(i.id))
    .reduce((s, i) => s + i.points, 0);
  const selectedItems = disposalItems.filter((i) => selected.includes(i.id));

  return (
    <AppShell activeTab="dispose">
      <TopBar
        showBack
        backLabel="Detalhe"
        onBack={() => navigate("/ponto/1")}
        title="Confirmar Descarte"
      />

      <div className="px-5 lg:grid lg:grid-cols-2 lg:gap-8">
        <div>
          <div className="font-display text-[0.8rem] font-bold text-muted-foreground uppercase tracking-[1px] mb-3">
            O que você vai descartar?
          </div>
          <div className="grid grid-cols-2 gap-2 mb-5">
            {disposalItems.map((item) => (
              <ItemToggle
                key={item.id}
                icon={item.icon}
                label={item.label}
                selected={selected.includes(item.id)}
                onToggle={() => toggle(item.id)}
              />
            ))}
          </div>

          {/* Items breakdown */}
          <div className="flex flex-col gap-2.5 mb-6">
            {selectedItems.map((item) => (
              <div
                key={item.id}
                className="bg-card border border-border rounded-sm p-3.5 flex justify-between items-center"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-[9px] bg-(--mint-glow) flex items-center justify-center">
                    <span className="text-primary [&_svg]:w-3.5 [&_svg]:h-3.5">
                      {item.icon}
                    </span>
                  </div>
                  <span className="text-[0.85rem] font-medium">
                    {item.label}
                  </span>
                </div>
                <span className="text-[0.78rem] text-primary font-semibold">
                  +{item.points} pts
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          {/* Points card */}
          <div
            className="border border-primary/20 rounded-lg p-5 mb-5 text-center"
            style={{ background: "var(--gradient-hero)" }}
          >
            <div className="font-display text-[2.8rem] font-extrabold text-primary tracking-[-2px]">
              +{totalPoints}
            </div>
            <div className="text-[0.8rem] text-muted-foreground mt-0.5">
              pontos que você vai ganhar
            </div>
            <div className="text-[0.78rem] text-foreground/45 mt-1.5">
              ≈ R$ {(totalPoints / 100).toFixed(2).replace(".", ",")} em
              parceiros
            </div>
          </div>

          <button
            onClick={() => navigate("/sucesso")}
            className="w-full border-none rounded-sm px-4 py-4 font-display font-bold text-[0.9rem] cursor-pointer flex items-center justify-center gap-2 transition-all hover:opacity-90 hover:-translate-y-px text-foreground shadow-mint mb-4"
            style={{ background: "var(--gradient-cta)" }}
          >
            <Check size={18} /> Registrar meu descarte
          </button>
        </div>
      </div>
    </AppShell>
  );
};

export default ConfirmDisposal;
