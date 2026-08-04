import DecorShapes from "@/components/DecorShapes";
import { SparkleIcon } from "@/components/Icons";

const heroShapes = [
  { type: "star", top: "18%", left: "8%", size: 20, color: "var(--gold)", delay: "0s" },
  { type: "dots", top: "65%", left: "5%", size: 30, color: "rgba(255,255,255,0.5)", delay: "0.6s" },
  { type: "sparkle", top: "22%", right: "10%", size: 24, color: "var(--gold)", delay: "0.3s" },
  { type: "blob", bottom: "10%", right: "6%", size: 46, color: "rgba(255,255,255,0.08)", delay: "0.9s" },
  { type: "heart", bottom: "18%", left: "16%", size: 18, color: "rgba(255,255,255,0.35)", delay: "1.1s" }
];

export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="page-hero">
      <DecorShapes items={heroShapes} />
      <div className="container">
        <span className="eyebrow-row fade-up">
          <SparkleIcon className="eyebrow-sparkle" />
          <span className="eyebrow on-dark">{eyebrow}</span>
        </span>
        <h1 className="fade-up delay-1">{title}</h1>
        {subtitle ? <p className="fade-up delay-2">{subtitle}</p> : null}
      </div>
    </section>
  );
}
