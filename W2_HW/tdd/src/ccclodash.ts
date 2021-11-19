import { Ord } from '../src/index.ts'

const lt = <T extends Ord>(a: T, b: T): boolean => a < b

export { lt }

