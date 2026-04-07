import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['src/index.ts', 'src/math/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  outDir: 'dist',
});
