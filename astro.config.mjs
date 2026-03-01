import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://data-by-priyanka.github.io/priyanka-mishra-portfolio',
  base: '/priyanka-mishra-portfolio',
  integrations: [mdx(), sitemap(), tailwind()]
});
