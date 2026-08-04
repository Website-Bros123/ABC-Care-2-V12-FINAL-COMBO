export default function ExploreCard({ icon, tone = "blue", title }) {
  return (
    <div className="explore-card">
      <div className={`icon-badge cutout-badge tone-${tone}`}>{icon}</div>
      <h3>{title}</h3>
    </div>
  );
}
