import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type DigitProps = {
  value: number;
  unit: string;
  place: number;
};

/** Un dígito con flip; el valor siempre es legible (no queda en blanco). */
function Digit({ value, unit, place }: DigitProps) {
  const safe = Number.isFinite(value) ? Math.abs(value) % 10 : 0;

  return (
    <div className="fc-digit" aria-hidden="true">
      {/* capa base: siempre visible */}
      <span className="fc-digit-base">{safe}</span>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={`${unit}-${place}-${safe}`}
          className="fc-digit-flip"
          initial={{ y: "-110%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "110%", opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          {safe}
        </motion.span>
      </AnimatePresence>
      <span className="fc-digit-line" />
    </div>
  );
}

function DigitPair({
  value,
  label,
  unit,
  minDigits = 2,
}: {
  value: number;
  label: string;
  unit: string;
  /** Mínimo de dígitos (días/hrs/min/seg → 2) */
  minDigits?: number;
}) {
  const n = Math.max(0, Math.floor(value));
  const digits = n.toString().padStart(minDigits, "0").split("").map((d) => Number(d));

  return (
    <div className="fc-unit">
      <div className="fc-pair">
        {digits.map((d, i) => (
          <Digit key={`${unit}-${i}`} value={d} unit={unit} place={i} />
        ))}
      </div>
      {label ? <span className="fc-label">{label}</span> : null}
    </div>
  );
}

function Colon() {
  return (
    <div className="fc-colon" aria-hidden="true">
      <i />
      <i />
    </div>
  );
}

export type FlipClockProps = {
  mode?: "clock" | "countdown";
  /** ISO string o Date — inicio del torneo */
  targetDate?: string | Date;
  showLabels?: boolean;
  className?: string;
};

export type CountdownParts = {
  done: boolean;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export function getCountdownParts(
  targetMs: number,
  nowMs: number
): CountdownParts {
  const diff = Math.max(0, targetMs - nowMs);
  const totalSec = Math.floor(diff / 1000);

  return {
    done: diff <= 0,
    days: Math.floor(totalSec / 86400),
    hours: Math.floor((totalSec % 86400) / 3600),
    minutes: Math.floor((totalSec % 3600) / 60),
    seconds: totalSec % 60,
  };
}

function parseTarget(targetDate?: string | Date): number | null {
  if (!targetDate) return null;
  const ms =
    targetDate instanceof Date
      ? targetDate.getTime()
      : new Date(targetDate).getTime();
  return Number.isFinite(ms) ? ms : null;
}

export default function FlipClock({
  mode = "clock",
  targetDate,
  showLabels = true,
  className = "",
}: FlipClockProps) {
  const targetMs = useMemo(() => parseTarget(targetDate), [targetDate]);
  const [nowMs, setNowMs] = useState(() => Date.now());

  // tick alineado al segundo real (evita desfase)
  useEffect(() => {
    let timeoutId = 0;
    let cancelled = false;

    const schedule = () => {
      const delay = 1000 - (Date.now() % 1000);
      timeoutId = window.setTimeout(() => {
        if (cancelled) return;
        setNowMs(Date.now());
        schedule();
      }, delay);
    };

    setNowMs(Date.now());
    schedule();

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, []);

  // —— COUNTDOWN al torneo ——
  if (mode === "countdown") {
    if (targetMs == null) {
      return (
        <p className={`fc-error ${className}`}>
          Fecha del torneo inválida
        </p>
      );
    }

    const parts = getCountdownParts(targetMs, nowMs);

    if (parts.done) {
      return (
        <p className={`fc-done ${className}`.trim()} role="status">
          Torneo en curso
        </p>
      );
    }

    const label = (t: string) => (showLabels ? t : "");

    return (
      <div
        className={`fc-root ${className}`.trim()}
        role="timer"
        aria-live="polite"
        aria-label={`Faltan ${parts.days} días, ${parts.hours} horas, ${parts.minutes} minutos y ${parts.seconds} segundos`}
      >
        <DigitPair value={parts.days} unit="d" label={label("días")} />
        <Colon />
        <DigitPair value={parts.hours} unit="h" label={label("hrs")} />
        <Colon />
        <DigitPair value={parts.minutes} unit="m" label={label("min")} />
        <Colon />
        <DigitPair value={parts.seconds} unit="s" label={label("seg")} />
      </div>
    );
  }

  // —— reloj hora actual (demo) ——
  const now = new Date(nowMs);
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  return (
    <div className={`fc-root ${className}`.trim()} role="timer">
      <DigitPair value={h} unit="ch" label={showLabels ? "hrs" : ""} />
      <Colon />
      <DigitPair value={m} unit="cm" label={showLabels ? "min" : ""} />
      <Colon />
      <DigitPair value={s} unit="cs" label={showLabels ? "seg" : ""} />
    </div>
  );
}
