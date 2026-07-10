import "./testimonials.css";

export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  imageSrc: string;
  square?: boolean;
  logoSize?: "default" | "sm";
  /** Si se define, el logo es un enlace externo */
  href?: string;
}

export interface TestimonialSectionProps {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
  embedded?: boolean;
}

/**
 * Panel de logos de organizadores.
 * Diseño ref: public/capturas/diseño organizadores.png
 * — un solo panel oscuro, celdas con divisores, logo centrado.
 */
export const TestimonialSection = ({
  title,
  subtitle,
  testimonials,
}: TestimonialSectionProps) => {
  return (
    <div className="ts-root">
      <h2 className="ts-title">{title}</h2>
      {subtitle ? <p className="ts-subtitle">{subtitle}</p> : null}

      <div className="ts-panel">
        <div className="ts-grid" role="list">
          {testimonials.map((t) => {
            const imgClass =
              [
                t.square ? "ts-logo-square" : "",
                t.logoSize === "sm" ? "ts-logo-sm" : "",
              ]
                .filter(Boolean)
                .join(" ") || undefined;

            const logo = (
              <img
                src={t.imageSrc}
                alt={t.name}
                className={imgClass}
                loading="lazy"
              />
            );

            return (
              <div key={t.id} className="ts-cell" role="listitem">
                {t.href ? (
                  <a
                    className="ts-logo-link"
                    href={t.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t.name}
                  >
                    {logo}
                  </a>
                ) : (
                  logo
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
