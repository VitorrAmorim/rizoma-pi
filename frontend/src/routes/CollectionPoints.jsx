import { useNavigate } from "react-router-dom";

import { Battery, Lightbulb, Smartphone, Monitor } from "lucide-react";

import AppShell from "../components/AppShell";
import TopBar from "../components/TopBar";
import SearchBox from "../components/SearchBox";
import CategoryPills from "../components/CategoryPills";
import PointCard from "../components/PointCard";

const collectionPoints = [
  {
    id: "1",
    name: "Claro Store — Shopping Indaiatuba",
    address: "Av. Antônio Prado, 1204 · Térreo, L42",
    status: "green",
    tags: [
      { icon: <Battery size={12} />, label: "Pilhas" },
      { icon: <Lightbulb size={12} />, label: "Lâmpadas" },
      { icon: <Smartphone size={12} />, label: "Smartphones" },
    ],
    distance: "280m",
    openStatus: "Aberto até 22h",
    isOpen: true,
  },
  {
    id: "2",
    name: "Leroy Merlin",
    address: "Rodovia Anhanguera, km 98 · Entrada lateral",
    status: "amber",
    tags: [
      { icon: <Lightbulb size={12} />, label: "Lâmpadas" },
      { icon: <Battery size={12} />, label: "Cabos" },
    ],
    distance: "540m",
    openStatus: "Aberto até 21h",
    isOpen: true,
  },
  {
    id: "3",
    name: "Casas Bahia — Centro",
    address: "R. Floriano Peixoto, 88 · Pós-venda",
    status: "blue",
    tags: [
      { icon: <Smartphone size={12} />, label: "Smartphones" },
      { icon: <Monitor size={12} />, label: "TVs" },
    ],
    distance: "720m",
    openStatus: "Fecha às 20h",
    isOpen: false,
  },
  {
    id: "4",
    name: "Ecopontos — Prefeitura",
    address: "R. XV de Novembro, 1200 · Praça Central",
    status: "green",
    tags: [
      { icon: <Battery size={12} />, label: "Pilhas" },
      { icon: <Lightbulb size={12} />, label: "Lâmpadas" },
      { icon: <Smartphone size={12} />, label: "Eletrônicos" },
      { icon: <Monitor size={12} />, label: "TVs" },
    ],
    distance: "1,2km",
    openStatus: "Aberto 24h",
    isOpen: true,
  },
];

const CollectionPoints = () => {
  const navigate = useNavigate();

  return (
    <AppShell activeTab="points">
      <TopBar
        showBack
        backLabel="Voltar"
        onBack={() => navigate("/")}
        title="Pontos de Coleta"
      />

      <SearchBox placeholder="Pilhas, lâmpadas, celular..." />

      <CategoryPills variant="filter" />

      <div className="px-5 mb-4">
        <span className="text-[0.78rem] text-muted-foreground">
          4 pontos encontrados ·{" "}
        </span>
        <span className="text-[0.78rem] text-primary">Indaiatuba, SP</span>
      </div>

      <div className="px-5 grid grid-cols-1 lg:grid-cols-2 gap-3 mb-7">
        {collectionPoints.map((point, i) => (
          <PointCard
            key={point.id}
            {...point}
            delay={i * 50}
            onClick={() => navigate("/ponto/1")}
          />
        ))}
      </div>
    </AppShell>
  );
};

export default CollectionPoints;
