import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages sirve este sitio desde /plexipedidosweb/, pero Cloudflare
// Pages (que setea CF_PAGES) y el resto de los hosts lo sirven desde la raíz.
const base = process.env.CF_PAGES ? "/" : process.env.GITHUB_PAGES ? "/plexipedidosweb/" : "/";

export default defineConfig({
  base,
  plugins: [react()],
});
