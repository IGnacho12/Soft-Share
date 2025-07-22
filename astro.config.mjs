import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercelServerless from "@astrojs/vercel/serverless";
// https://astro.build/config
export default defineConfig({
  // Integraciones utilizadas

  // Configuración de salida (ideal para Vercel serverless)
  // Necesario para usar endpoints API y compatibilidad SSR
  output: "server",
  adapter: vercelServerless(),
  vite: {
    plugins: [tailwindcss()],
  },
});
