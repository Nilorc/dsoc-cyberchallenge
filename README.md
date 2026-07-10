# Dragon Sphere Origins — Cyber Security Conference

Landing del evento **Dragon Sphere Origins** (IEEE COMSOC PUCP · IEEE CS PUCP · OverPwnZ).

Stack: **Vite 6 + React 19 (islands) + TypeScript + Tailwind CSS 4**.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`.

## Build de producción

```bash
npm run build
npm run preview
```

Salida en `dist/`.

## Deploy en Vercel

1. Importar el repo: [Nilorc/dsoc-cyberchallenge](https://github.com/Nilorc/dsoc-cyberchallenge)
2. **Root Directory:** raíz del repo (donde está `package.json`)
3. **Framework Preset:** Vite (o dejar auto-detect)
4. **Build Command:** `npm run build`
5. **Output Directory:** `dist`
6. **Install Command:** `npm install`

Cada push a `main` dispara un redeploy automático si el proyecto de Vercel está conectado a este repo.

### Variables de entorno

No se requieren para el sitio estático actual. Los enlaces de registro están en `index.html` (script final):

- `LUMA_URL` — evento Lu.ma  
- `CTF_URL` — formulario CTF  
- `CERT_URL` — formulario certificado  

## Estructura

```
├── index.html          # Landing (HTML + CSS + islas React)
├── public/             # Assets estáticos (video, logos, imágenes)
├── src/
│   ├── main.tsx        # Montaje FlipClock, Speakers, Organizadores
│   └── components/ui/  # Componentes React
├── docs/               # Branding e información del evento
├── vercel.json
└── package.json
```

## Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build para producción |
| `npm run preview` | Previsualizar el build |
