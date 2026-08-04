export default function SiteImage({ src, alt, className = "", imgStyle }) {
  return (
    <div className={`img-placeholder photo ${className}`}>
      <img src={src} alt={alt} style={imgStyle} loading="lazy" />
    </div>
  );
}
