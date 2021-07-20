import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

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
  plugins: [resolve({ browser: true }), typescript()],
}

export default config
