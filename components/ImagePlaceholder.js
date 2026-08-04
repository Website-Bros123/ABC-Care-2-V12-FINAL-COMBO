export default function ImagePlaceholder({ label, className = "", style }) {
  return (
    <div className={`img-placeholder ${className}`} style={style}>
      <div className="ph-inner">
        <svg className="ph-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
          <rect x="3" y="4.5" width="18" height="15" rx="2" />
          <circle cx="8.5" cy="9.5" r="1.6" />
          <path d="M3 16.5l5-5 4 4 3.5-3.5L21 16" />
        </svg>
        {label ? <span className="ph-label">{label}</span> : null}
      </div>
    </div>
  );
}
