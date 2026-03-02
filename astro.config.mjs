import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://data-by-priyanka.github.io',
  base: '/priyanka-portfolio/',
  integrations: [mdx(), tailwind()]
});