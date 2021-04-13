import babel from '@rollup/plugin-babel'
import less from 'rollup-plugin-less'
import { terser } from 'rollup-plugin-terser'
import { eslint } from 'rollup-plugin-eslint'
import commonjs from '@rollup/plugin-commonjs'
export default {
  input: 'src/index.js',
  output: {
    file: 'dist/ellipsis.js',
    name: 'ellipsis',
    format: 'umd'
  },
  plugins: [
    less(),
    eslint({
        fix: true,
        include: 'src',
        exclude: 'node_modules/**'
    }),
    babel({
        include: 'src',
        exclude: 'node_modules/**'
    }),
    commonjs(),
    terser()
  ]
}