/* eslint-env node */

import typescript from 'rollup-plugin-typescript'
import { emptyDir } from 'rollup-plugin-empty-dir'

const { main, module } = require('./package.json')

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: module,
        format: 'esm',
        sourcemap: true,
      },
      {
        file: main,
        format: 'cjs',
        sourcemap: true,
      },
    ],
    plugins: [typescript(), emptyDir()],
    external: ['rxjs', 'rxjs/operators'],
  },
]
