import { useNavigate } from "react-router-dom";

import { Bell, AlertTriangle, Smartphone } from "lucide-react";

import AppShell from "../components/AppShell";
import TopBar from "../components/TopBar";
import PointsBar from "../components/PointsBar";
import SearchBox from "../components/SearchBox";
import ColetaBanner from "../components/ColetaBanner";
import CategoryPills from "../components/CategoryPills";
import SectionHeader from "../components/SectionHeader";
import GuideCard from "../components/GuideCard";

const Home = () => {
  const navigate = useNavigate();

  return (
    <AppShell activeTab="home">
      <TopBar
        rightContent={
          <div className="flex gap-2.5 items-center">
            <button className="w-9 h-9 rounded-full bg-foreground/5 border-none cursor-pointer flex items-center justify-center transition-colors hover:bg-foreground/10">
              <Bell size={16} className="text-eco-secondary" />
            </button>
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center font-display font-bold text-[0.7rem] cursor-pointer shadow-[0_0_0_2px_var(--mint-glow2)] lg:hidden"
              style={{ background: "var(--gradient-fab)" }}
            >
              MR
            </div>
          </div>
        }
      />

      {/* Greeting */}
      <div className="px-5 pt-0.5 pb-5">
        <div className="text-[0.72rem] text-muted-foreground uppercase tracking-[1px] font-medium">
          Segunda-feira, 23 mar
        </div>
        <div className="font-display text-2xl font-bold mt-0.5">
          Olá, <span className="text-primary">Marcos</span> 👋
        </div>
      </div>

      <PointsBar />

      <SearchBox
        title="O que você quer descartar hoje?"
        showButton
        onSearch={() => navigate("/pontos")}
      />

      <ColetaBanner onClick={() => navigate("/agendar")} />

      <SectionHeader title="Categorias" linkText="Ver todas →" />
      <CategoryPills onSelect={() => navigate("/pontos")} />

      <SectionHeader
        title="Guia de Descarte"
        linkText="Ver tudo →"
        onLinkClick={() => navigate("/guia")}
      />
      <div className="px-5 flex flex-col lg:grid lg:grid-cols-2 gap-2.5 mb-7">
        <GuideCard
          icon={<AlertTriangle size={22} className="text-destructive" />}
          iconColor="red"
          title="Nunca quebre lâmpadas fluorescentes"
          description="Mercúrio tóxico é liberado no ar. Veja o descarte seguro."
        />
        <GuideCard
          icon={<Smartphone size={22} className="text-amber" />}
          iconColor="amber"
          title="Bateria inchada no celular?"
          description="Risco real de incêndio. Como remover e descartar com segurança."
        />
        <GuideCard
          icon={<Smartphone size={22} className="text-primary" />}
          iconColor="mint"
          title="Apague seus dados antes de reciclar"
          description="Passo a passo para iPhone e Android antes do descarte."
        />
      </div>
    </AppShell>
  );
};

export default Home;
