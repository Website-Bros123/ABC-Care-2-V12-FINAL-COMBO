import { SparkleIcon, SquiggleIcon } from "@/components/Icons";

export default function SectionHeading({ eyebrow, title, subtitle, dark = false }) {
  return (
    <div className="section-heading">
      {eyebrow ? (
        <span className="eyebrow-row">
          <SparkleIcon className="eyebrow-sparkle" />
          <span className={`eyebrow${dark ? " on-dark" : ""}`}>{eyebrow}</span>
        </span>
      ) : null}
      <h2>{title}</h2>
      <SquiggleIcon className="title-squiggle" />
      {subtitle ? <p>{subtitle}</p> : null}
    </div>
  );
}
