"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@/components/Icons";

export default function FAQItem({ q, a, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`faq-item${open ? " open" : ""}`}>
      <button
        type="button"
        className="faq-question"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span>{q}</span>
        <ChevronDownIcon className="faq-chevron" />
      </button>
      <div className="faq-answer-wrap">
        <div className="faq-answer-inner">
          <p className="faq-answer">{a}</p>
        </div>
      </div>
    </div>
  );
}