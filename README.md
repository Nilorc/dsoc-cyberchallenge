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

### Ajustes del proyecto (Dashboard → Settings → Build & Development)

Si el deploy falla, **sobrescribe** la configuración antigua del sitio estático:

| Setting | Valor |
|---------|--------|
| **Framework Preset** | `Vite` |
| **Root Directory** | *(vacío / `.` — la raíz del repo)* |
| **Build Command** | `npm run build` *(Override ON)* |
| **Output Directory** | `dist` *(Override ON)* |
| **Install Command** | `npm install` *(Override ON)* |
| **Node.js Version** | `20.x` |

1. Importar o reconectar el repo: [Nilorc/dsoc-cyberchallenge](https://github.com/Nilorc/dsoc-cyberchallenge)
2. Guarda los settings y haz **Redeploy** del último commit de `main`
3. Cada push a `main` redespliega solo

`vercel.json` en la raíz refuerza framework Vite + `dist`.

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
