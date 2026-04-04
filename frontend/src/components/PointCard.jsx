import { ChevronRight } from "lucide-react";

const dotColors = {
  green: "bg-primary shadow-[0_0_6px_hsl(var(--mint))]",
  amber: "bg-amber shadow-[0_0_6px_hsl(var(--amber))]",
  blue: "bg-eco-blue shadow-[0_0_6px_hsl(var(--blue))]",
};

const PointCard = ({
  name,
  address,
  tags,
  distance,
  openStatus,
  isOpen,
  onClick,
  status,
  delay = 0,
}) => {
  return (
    <div
      onClick={onClick}
      className="bg-card border-[1.5px] border-border rounded-lg p-4 cursor-pointer transition-all flex gap-3.5 items-start hover:border-primary hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div
        className={`w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 ${dotColors[status]}`}
      />
      <div className="flex-1">
        <div className="font-display font-bold text-[0.92rem] mb-0.5">
          {name}
        </div>
        <div className="text-xs text-muted-foreground mb-2.5 leading-relaxed">
          {address}
        </div>
        <div className="flex gap-1.5 flex-wrap mb-2.5">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="flex items-center gap-1.5 bg-foreground/5 rounded-full px-2.5 py-1 text-[0.68rem] text-eco-secondary [&_svg]:w-3 [&_svg]:h-3 [&_svg]:shrink-0"
            >
              {tag.icon}
              {tag.label}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[0.72rem] bg-(--mint-glow) text-primary px-2.5 py-1 rounded-full font-medium">
            📍 {distance}
          </span>
          <span
            className={`text-[0.72rem] ${isOpen ? "text-[#4ADE80]" : "text-destructive"}`}
          >
            ● {openStatus}
          </span>
        </div>
      </div>
      <ChevronRight size={18} className="text-muted-foreground shrink-0 mt-1" />
    </div>
  );
};

export default PointCard;
