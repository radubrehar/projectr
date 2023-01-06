import solid from "solid-start/vite";
//@ts-ignore
import vercel from "solid-start-vercel";

import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    solid({
      //@ts-ignore
      adapter: vercel({ edge: true, prerender: true }),
    }),
  ],

  ssr: {
    external: ["@prisma/client"],
  },
});
