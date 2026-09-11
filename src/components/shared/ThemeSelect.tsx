import { useEffect, useId, useRef, useState } from "react";
import { T, GREEN } from "@/theme";
import { IconChevronDown } from "@/components/icons";

export interface ThemeSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
  required?: boolean;
  name?: string;
  "aria-label"?: string;
}

export default function ThemeSelect({
  value,
  onChange,
  options,
  placeholder = "Select...",
  required = false,
  name,
  "aria-label": ariaLabel,
}: ThemeSelectProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const selectedLabel = value || placeholder;
  const isPlaceholder = !value;

  return (
    <div ref={rootRef} className="relative">
      {name && <input type="hidden" name={name} value={value} required={required} />}
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-label={ariaLabel}
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-3 text-left transition-colors duration-150"
        style={{
          background: T.inputBg,
          border: `1px solid ${open ? "var(--accent-border-strong)" : T.inputBorder}`,
          color: isPlaceholder ? T.dim : T.fg,
          borderRadius: "12px",
          padding: "12px 16px",
          fontSize: "14px",
          fontFamily: "'Inter', sans-serif",
          outline: "none",
          boxShadow: open ? "0 0 0 3px var(--accent-soft)" : "none",
        }}
      >
        <span className="truncate">{selectedLabel}</span>
        <span
          className="shrink-0 transition-transform duration-200"
          style={{ color: GREEN, transform: open ? "rotate(180deg)" : "none" }}
        >
          <IconChevronDown />
        </span>
      </button>

      {open && (
        <ul
          id={listId}
          role="listbox"
          aria-label={ariaLabel || placeholder}
          className="absolute z-50 mt-2 w-full max-h-64 overflow-auto py-1.5 rounded-xl shadow-xl"
          style={{
            background: "var(--glass-dropdown)",
            border: `1px solid ${T.border}`,
            boxShadow: "var(--card-shadow)",
            backdropFilter: "blur(16px)",
          }}
        >
          <li role="option" aria-selected={value === ""}>
            <button
              type="button"
              className="w-full text-left px-4 py-2.5 text-sm transition-colors"
              style={{
                color: T.dim,
                background: value === "" ? "var(--dropdown-hover-bg)" : "transparent",
                fontFamily: "'Inter', sans-serif",
              }}
              onClick={() => {
                onChange("");
                setOpen(false);
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--dropdown-hover-bg)";
                (e.currentTarget as HTMLElement).style.color = "var(--dropdown-hover-text)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  value === "" ? "var(--dropdown-hover-bg)" : "transparent";
                (e.currentTarget as HTMLElement).style.color = T.dim;
              }}
            >
              {placeholder}
            </button>
          </li>
          {options.map((option) => {
            const selected = value === option;
            return (
              <li key={option} role="option" aria-selected={selected}>
                <button
                  type="button"
                  className="w-full text-left px-4 py-2.5 text-sm transition-colors"
                  style={{
                    color: selected ? GREEN : T.fg,
                    background: selected ? "var(--dropdown-hover-bg)" : "transparent",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: selected ? 600 : 400,
                  }}
                  onClick={() => {
                    onChange(option);
                    setOpen(false);
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "var(--dropdown-hover-bg)";
                    (e.currentTarget as HTMLElement).style.color = "var(--dropdown-hover-text)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = selected
                      ? "var(--dropdown-hover-bg)"
                      : "transparent";
                    (e.currentTarget as HTMLElement).style.color = selected ? GREEN : T.fg;
                  }}
                >
                  {option}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
