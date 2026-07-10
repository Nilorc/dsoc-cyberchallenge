import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import FlipClock from "./components/ui/flip-clock";
import SpeakersTestimonials from "./components/ui/circular-testimonials-demo";
import OrganizersSection from "./components/ui/testimonials-demo";
import "./index.css";
import "./components/ui/spotlight-card.css";
import "./components/ui/testimonials.css";

/** Inicio del torneo CTF: Vie 24 Jul 2026, 12:00 (Perú, UTC-5) */
const TOURNAMENT_START = "2026-07-24T12:00:00-05:00";

const flipRoot = document.getElementById("flip-clock-root");
if (flipRoot) {
  createRoot(flipRoot).render(
    <StrictMode>
      <FlipClock mode="countdown" targetDate={TOURNAMENT_START} showLabels />
    </StrictMode>
  );
}

const speakersRoot = document.getElementById("circular-testimonials-root");
if (speakersRoot) {
  createRoot(speakersRoot).render(
    <StrictMode>
      <SpeakersTestimonials />
    </StrictMode>
  );
}

const organizersRoot = document.getElementById("organizadores-root");
if (organizersRoot) {
  createRoot(organizersRoot).render(
    <StrictMode>
      <OrganizersSection />
    </StrictMode>
  );
}
