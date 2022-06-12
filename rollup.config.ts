import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript';

export default defineConfig({
  input: 'src/mdToJs.ts',
  output: [
    {
      file: 'dist/mdToJs.js',
      format: 'es'
    }
  ],
  plugins: [typescript()]
});