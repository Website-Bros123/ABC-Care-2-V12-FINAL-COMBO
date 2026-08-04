export default function TestimonialCard({ name, text }) {
  return (
    <div className="testimonial-card">
      <div className="stars" aria-label="5 out of 5 stars">
        {"\u2605\u2605\u2605\u2605\u2605"}
      </div>
      <h4>{name}</h4>
      <p>{text}</p>
    </div>
  );
}
