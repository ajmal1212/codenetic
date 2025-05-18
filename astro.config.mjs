import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

import cloudflare from '@astrojs/cloudflare';


// https://astro.build/config
export default defineConfig({
  site: "https://foxi.netlify.app/",
  output: 'server',
  adapter: cloudflare({
  runtimeMode: 'local' // or 'advanced' if you need WASM
  }),
  integrations: [
    tailwind(),
    icon(),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
