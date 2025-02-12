import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: './', // Hace que las rutas sean relativas
  build: {
    outDir: "dist", // Asegura que el output vaya a la carpeta correcta
  },
});