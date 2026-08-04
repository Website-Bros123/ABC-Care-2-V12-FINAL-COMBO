export default function WaveDivider({ from, to, flip = false }) {
  return (
    <div className="wave-divider" style={{ background: from }} aria-hidden="true">
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        style={flip ? { transform: "scaleY(-1)" } : undefined}
      >
        <path
          d="M0,32 C240,68 480,0 720,18 C960,36 1200,68 1440,28 L1440,60 L0,60 Z"
          fill={to}
        />
      </svg>
    </div>
  );
}
