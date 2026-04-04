import BottomNav from "./BottomNav";
import DesktopSidebar from "./DesktopSidebar";

const AppShell = ({ children, activeTab }) => {
  return (
    <div className="flex min-h-screen bg-background">
      <DesktopSidebar activeTab={activeTab} />
      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-105 lg:max-w-180 xl:max-w-215 min-h-screen relative">
          <div className="animate-screen-in flex flex-col min-h-screen pb-22 lg:pb-0">
            {children}
          </div>
          <BottomNav activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
};

export default AppShell;
