import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
// https://astro.build/config
export default defineConfig({
  // Integraciones utilizadas

  // Configuración de salida (ideal para Vercel serverless)
  // Necesario para usar endpoints API y compatibilidad SSR
  output: "server",

  vite: {
    plugins: [tailwindcss()],
  }
});
