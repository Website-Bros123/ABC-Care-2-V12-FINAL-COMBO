export default function ContactCard({ icon, tone, title, children, href }) {
  const content = (
    <>
      <div className="contact-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{children}</p>
    </>
  );

  if (href) {
    return (
      <a href={href} className={`contact-card tone-${tone}`}>
        {content}
      </a>
    );
  }

  return <div className={`contact-card tone-${tone}`}>{content}</div>;
}
