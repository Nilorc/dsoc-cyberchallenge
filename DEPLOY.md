# Deploy Vercel — checklist si falla el build

El build local y en un clone limpio de GitHub **funciona**.  
Si Vercel falla, casi siempre es por **ajustes viejos del proyecto** (antes era HTML estático).

## 1. Settings obligatorios

Vercel → tu proyecto → **Settings** → **General / Build & Development Settings**

| Campo | Valor correcto | Override |
|--------|----------------|----------|
| Framework Preset | **Vite** | — |
| Root Directory | **vacío** (no `aca`, no `public`) | — |
| Build Command | `npx vite build` o `npm run build` | **ON** |
| Output Directory | **`dist`** | **ON** |
| Install Command | `npm install` | **ON** |
| Node.js Version | **20.x** | — |

Guarda → **Deployments** → ⋮ en el último → **Redeploy** (sin cache si existe la opción).

## 2. Errores típicos

### `No Output Directory named "dist"`
Output Directory está en `dist` pero el Build Command está vacío o no es Vite.  
→ Activa Override del Build Command: `npm run build`.

### `vite: not found`
→ Redeploy con el último commit (`91438d4` o posterior). Vite está en `dependencies`.

### Root Directory mal
Si pones `aca` o `public` y el repo **ya es** la app, falla.  
→ Root Directory = vacío.

## 3. Verificar el log

En el deployment fallido, abre **Building** y busca la línea roja.  
Cópiala y compártela si sigue fallando.

## 4. Probar local (igual que Vercel)

```bash
git clone https://github.com/Nilorc/dsoc-cyberchallenge.git
cd dsoc-cyberchallenge
npm install
npm run build
# debe crear dist/index.html
```
