// Copyright 2021-present the Fonction authors. All rights reserved. MIT license.
/* eslint-disable @typescript-eslint/no-explicit-any */


export type AnyFn<T = any, U = unknown> = (...args: T[]) => U


export type Arity1Fn<T = any, U = unknown> = (args: T) => U


export type Primitive =
  | string
  | number
  | bigint
  | boolean
  | symbol
  | undefined
  | null


export type Ord = string | number | bigint | boolean | Date


// eslint-disable-next-line @typescript-eslint/ban-types
export type Empty = '' | [] | {}


export type Falsy = false | '' | 0 | null | undefined


export type FalsyLike = false | '' | 0 | 0n | null | undefined


export type Space = ' ' | '\n' | '\t'

export type InferArray<T> = T extends (infer R)[] ? R : never


export type String2Array<T extends string> = T extends ''
  ? []
  : T extends `${infer F}${infer R}`
  ? [F, ...String2Array<R>]
  : string[]


export type TypedArray =
  | Int8Array
  | Uint8Array
  | Uint8ClampedArray
  | Int16Array
  | Uint16Array
  | Int32Array
  | Uint32Array
  | Float32Array
  | Float64Array
  | BigInt64Array
  | BigUint64Array
