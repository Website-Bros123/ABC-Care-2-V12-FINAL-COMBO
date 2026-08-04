export default function InfoCard({ icon, tone = "blue", title, age, desc, priceLabel }) {
  return (
    <div className="info-card">
      <div className={`icon-badge cutout-badge tone-${tone}`}>{icon}</div>
      <h3>{title}</h3>
      {age ? <span className="age-range">{age}</span> : null}
      <p>{desc}</p>
      {priceLabel ? <span className="price">{priceLabel}</span> : null}
    </div>
  );
}
