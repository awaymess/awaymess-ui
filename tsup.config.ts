import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  minify: true,
  clean: true,
  external: [
    '@mui/material',
    '@emotion/react',
    '@emotion/styled',
    '@mui/x-date-pickers',
    '@mui/icons-material',
  ],
  esbuildOptions(options) {
    options.banner = {
      js: '"use client";',
    };
  },
});
