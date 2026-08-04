export default function Logo({ size = 52 }) {
  return (
    <span className="brand-logo" style={{ width: size, height: size }}>
      <img src="/images/logo.png" alt="ABC Care 2 logo" width={size} height={size} />
    </span>
  );
}
