const SectionHeader = ({ title, linkText, onLinkClick }) => {
  return (
    <div className="flex justify-between items-center px-5 mb-3.5">
      <span className="font-display font-bold text-base">{title}</span>
      {linkText && (
        <span
          className="text-xs text-primary cursor-pointer"
          onClick={onLinkClick}
        >
          {linkText}
        </span>
      )}
    </div>
  );
};

export default SectionHeader;
