# Branding — Dragon Sphere Origins (DSO)

Sistema de marca mínimo para la web del CTF COMSOC PUCP.  
**Solo** estas reglas: **2 tipografías** y **3 colores principales**.

---

## Tipografías (2)

| Rol | Familia | Uso |
|-----|---------|-----|
| **Display** | **Chakra Petch** | Títulos, logo, botones, headings, CTAs |
| **Body** | **Space Grotesk** | Párrafos, navegación, labels, meta, footer, dígitos UI |

### Reglas
- **Display** → `h1`, `h2`, `h3`, `.btn`, `.brand`, CTAs, títulos de sección.
- **Body** → texto corrido, nav, eyebrow, countdown labels, tags, footer.
- No usar otras familias (ni mono externas). Si hace falta “look tech”, usar **Body** con `letter-spacing` amplio y mayúsculas.
- Fallbacks: `system-ui, sans-serif`.

### CSS
```css
--font-display: "Chakra Petch", system-ui, sans-serif;
--font-body:    "Space Grotesk", system-ui, sans-serif;
```

### Google Fonts
```
Chakra+Petch:wght@500;600;700
Space+Grotesk:wght@400;500;600;700
```

---

## Colores principales (3)

| Token | Nombre | HEX | Rol |
|-------|--------|-----|-----|
| **Primary** | Sphere | `#FF8A1E` | Marca, CTAs principales, acentos calientes, highlights |
| **Accent** | Scouter | `#1FC9A6` | Acentos tech, estados secundarios, CTAs alternos, labels |
| **Void** | Void | `#04050A` | Fondo base, texto sobre primary/accent, superficies oscuras |

### Reglas
1. Todo color de UI debe ser **uno de estos tres** o una **mezcla/opacidad** derivada de ellos (y blanco solo para legibilidad de texto sobre Void).
2. **Primary** = acción principal / energía del torneo.
3. **Accent** = ciber / scouter / confirmación.
4. **Void** = canvas y contraste.
5. No introducir rojos, púrpuras u otros hex “sueltos” fuera del sistema.

### CSS
```css
--brand-primary: #FF8A1E;
--brand-accent:  #1FC9A6;
--brand-void:    #04050A;
```

### Derivados permitidos (no son colores nuevos de marca)
Se obtienen con `color-mix` / alpha a partir de Primary, Accent, Void y blanco:

| Uso | Derivación orientativa |
|-----|------------------------|
| Texto principal (ink) | `color-mix(in srgb, white 94%, Primary 6%)` |
| Texto secundario | blanco ~55% sobre Void |
| Texto tenue | blanco ~35% sobre Void |
| Primary claro (hover glow) | Primary + blanco |
| Accent profundo | Accent + Void |
| Bordes glass | Accent ~16% alpha |
| Superficie glass | Void ~55% alpha |

---

## Mapa rápido de componentes

| Elemento | Tipografía | Color |
|----------|------------|--------|
| Logo / brand | Display | Ink + Accent |
| Títulos hero / secciones | Display | Ink / Primary (stroke) |
| Cuerpo / taglines | Body | Ink / mute |
| Botón principal | Display | fondo Primary, texto Void |
| Botón secundario | Display | fondo Accent, texto Void |
| Labels / eyebrow / nav | Body | Accent o mute |
| Countdown dígitos | Body (bold) | Ink + glow Primary |
| Fondo página | — | Void |

---

## Checklist de implementación

- [x] Variables en `:root` alineadas a este doc  
- [x] Solo 2 familias cargadas en Google Fonts  
- [x] Sin JetBrains Mono u otras tipografías  
- [x] Tokens legacy (`--sphere`, `--scouter`, `--void`) mapeados a los 3 brand colors  

---

*Fuente de verdad del branding visual de la landing DSO.*
