/* eslint-env node */

import code from 'rollup-plugin-code-string'

const external = ['rxjs', 'rxjs/operators']

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: 'build/bundle-esm.js',
        format: 'esm',
        sourcemap: 'inline',
      },
      {
        file: 'build/bundle-cjs.js',
        format: 'cjs',
        sourcemap: 'inline',
      },
    ],
    external,
    plugins: [code()],
  },
  {
    input: 'src/functions.js',
    output: [
      {
        file: 'functions.js',
        format: 'esm',
        sourcemap: 'inline',
      },
      {
        file: 'functions-cjs.js',
        format: 'cjs',
        sourcemap: 'inline',
      },
    ],
    external,
  },
]
