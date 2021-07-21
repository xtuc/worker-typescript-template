import resolve from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'

/**
 * @type {import('rollup').RollupOptions}
 * @see https://rollupjs.org/guide/en/#big-list-of-options
 */
const config = {
  input: 'src/index.ts',
  output: {
    format: 'esm',
    file: 'build/index.js',
    sourcemap: false,
    interop: false,
  },
  // prettier-ignore
  plugins: [
    resolve({ browser: true }),
    commonjs(),
    typescript(),
  ],
}

export default config
