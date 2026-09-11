import { useState } from "react";
import { Link } from "react-router";
import { T, JK, GREEN } from "@/theme";
import { PageHero, SectionHeader } from "@/components/shared";
import { IconArrowRight, IconCheck } from "@/components/icons";
import {
  FINDER_STEPS,
  buildFinderQuoteUrl,
  productFinderTree,
  type FinderOption,
  type FinderResult,
} from "@/data/productFinder";

interface Selection {
  option: FinderOption;
}

export default function Finder() {
  const [path, setPath] = useState<Selection[]>([]);
  const [result, setResult] = useState<FinderResult | null>(null);
  const [animKey, setAnimKey] = useState(0);

  const stepIndex = result ? FINDER_STEPS.length : path.length;
  const currentOptions: FinderOption[] =
    path.length === 0
      ? productFinderTree
      : path[path.length - 1]?.option.options ?? [];

  const summaryLabels = path.map((s) => s.option.label);

  const advance = (option: FinderOption) => {
    const nextPath = [...path, { option }];
    setAnimKey((k) => k + 1);
    if (option.result) {
      setPath(nextPath);
      setResult(option.result);
      return;
    }
    setPath(nextPath);
    setResult(null);
  };

  const goBack = () => {
    setAnimKey((k) => k + 1);
    if (result) {
      setResult(null);
      setPath((p) => p.slice(0, -1));
      return;
    }
    setPath((p) => p.slice(0, -1));
  };

  const restart = () => {
    setAnimKey((k) => k + 1);
    setPath([]);
    setResult(null);
  };

  const quoteUrl = result
    ? buildFinderQuoteUrl(
        result.quote,
        `Product Finder selections: ${[...summaryLabels].join(" → ")}`,
      )
    : "/quote";

  const stepTitle = result
    ? "Recommended for you"
    : FINDER_STEPS[Math.min(stepIndex, FINDER_STEPS.length - 1)]?.label ?? "Industry";

  const stepPrompt = result
    ? "Based on your answers, these ETS solutions are the best starting points."
    : (
        [
          "Which industry are you cleaning for?",
          "What surface or area needs attention?",
          "What problem are you trying to solve?",
          "How will you apply the solution?",
        ] as const
      )[stepIndex] ?? "Select an option";

  return (
    <>
      <PageHero
        eyebrow="Product Finder"
        title="Find the right ETS solution for your problem."
        accent="your problem."
        subtitle="Answer four short questions — industry, surface, problem, and application method — and we will recommend matching products."
        imgUrl="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&h=800&fit=crop&auto=format"
        ctaPrimary={{ label: "Browse All Products", to: "/products" }}
        ctaSecondary={{ label: "Request a Quote", to: "/quote" }}
        minHeight="min-h-[50vh]"
      />

      <section
        id="finder-wizard"
        className="py-16 sm:py-20 px-6 scroll-mt-28"
        style={{ borderTop: `1px solid ${T.borderSubtle}` }}
      >
        <div className="max-w-3xl mx-auto">
          {/* Progress */}
          <div className="mb-10">
            <div className="flex items-center justify-between gap-2 mb-3">
              {FINDER_STEPS.map((step, i) => {
                const done = i < stepIndex || (result && i < FINDER_STEPS.length);
                const active = !result && i === stepIndex;
                return (
                  <div key={step.id} className="flex-1 flex flex-col items-center gap-2">
                    <div
                      className="w-full h-1 rounded-full transition-all duration-500"
                      style={{
                        background: done || active ? GREEN : T.border,
                        boxShadow: active ? "0 0 12px var(--accent-border-strong)" : "none",
                      }}
                    />
                    <span
                      className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase"
                      style={{ color: done || active ? GREEN : T.dim }}
                    >
                      {step.label}
                    </span>
                  </div>
                );
              })}
            </div>
            {(path.length > 0 || result) && (
              <div className="flex flex-wrap items-center gap-2 mt-4">
                {summaryLabels.map((label, i) => (
                  <span key={`${label}-${i}`} className="inline-flex items-center gap-1.5 text-xs" style={{ color: T.muted }}>
                    {i > 0 && <span style={{ color: T.dim }}>→</span>}
                    <span
                      className="px-2.5 py-1 rounded-full"
                      style={{ background: "var(--accent-soft)", color: GREEN, border: "1px solid var(--accent-border)" }}
                    >
                      {label}
                    </span>
                  </span>
                ))}
              </div>
            )}
          </div>

          <div key={animKey} className="finder-step-enter">
            <SectionHeader eyebrow={`Step ${Math.min(stepIndex + 1, FINDER_STEPS.length)} of ${FINDER_STEPS.length}`} title={stepPrompt} />
            <p className="text-sm mb-8 -mt-4" style={{ color: T.dim }}>
              {result ? stepTitle : `Select ${stepTitle.toLowerCase()}`}
            </p>

            {!result && (
              <div className="flex flex-col gap-3">
                {currentOptions.map((option, idx) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => advance(option)}
                    className="group text-left w-full px-5 py-4 rounded-2xl transition-all duration-200 hover:translate-x-1 cursor-pointer"
                    style={{
                      background: T.glassCard,
                      border: `1px solid ${T.border}`,
                      animationDelay: `${idx * 40}ms`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--accent-border-strong)";
                      e.currentTarget.style.background = "var(--accent-soft)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = T.border;
                      e.currentTarget.style.background = T.glassCard;
                    }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="font-semibold text-base mb-0.5" style={{ fontFamily: JK, color: T.fg }}>
                          {option.label}
                        </div>
                        {option.description && (
                          <p className="text-sm leading-relaxed" style={{ color: T.muted }}>
                            {option.description}
                          </p>
                        )}
                      </div>
                      <span
                        className="mt-1 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                        style={{ color: GREEN }}
                      >
                        <IconArrowRight />
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {result && (
              <div className="flex flex-col gap-4">
                {result.recommendations.map((rec, idx) => (
                  <Link
                    key={rec.to + rec.name}
                    to={rec.to}
                    className="group block px-5 py-5 rounded-2xl transition-all duration-200 hover:translate-x-1"
                    style={{
                      background: T.glassCard,
                      border: `1px solid ${T.border}`,
                      animationDelay: `${idx * 60}ms`,
                    }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span style={{ color: GREEN }}><IconCheck /></span>
                          <h3 className="font-bold text-base" style={{ fontFamily: JK, color: T.fg }}>
                            {rec.name}
                          </h3>
                        </div>
                        <p className="text-xs font-medium mb-2" style={{ color: GREEN }}>
                          {rec.tagline}
                        </p>
                        <p className="text-sm leading-relaxed" style={{ color: T.muted }}>
                          {rec.why}
                        </p>
                      </div>
                      <span
                        className="mt-1 shrink-0 transition-transform group-hover:translate-x-1"
                        style={{ color: GREEN }}
                      >
                        <IconArrowRight />
                      </span>
                    </div>
                  </Link>
                ))}

                <div
                  className="mt-4 p-6 rounded-2xl flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between"
                  style={{ background: "var(--accent-soft)", border: "1px solid var(--accent-border)" }}
                >
                  <div>
                    <h3 className="font-bold text-base mb-1" style={{ fontFamily: JK, color: T.fg }}>
                      Ready for pricing or samples?
                    </h3>
                    <p className="text-sm" style={{ color: T.muted }}>
                      Your finder answers will prefill the quote form.
                    </p>
                  </div>
                  <Link
                    to={quoteUrl}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold shrink-0 transition-transform hover:scale-105"
                    style={{ background: GREEN, color: "var(--on-accent)" }}
                  >
                    Request a Quote <IconArrowRight />
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between gap-4 mt-10">
            <button
              type="button"
              onClick={goBack}
              disabled={path.length === 0 && !result}
              className="text-sm font-semibold transition-opacity disabled:opacity-30 cursor-pointer disabled:cursor-default"
              style={{ color: T.muted }}
            >
              ← Back
            </button>
            {(path.length > 0 || result) && (
              <button
                type="button"
                onClick={restart}
                className="text-sm font-semibold cursor-pointer"
                style={{ color: GREEN }}
              >
                Start over
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
