/**
 * @typedef Builder is a generic type for builders with all fields in T and build method
 */
export type Builder<T> = {
    [key in keyof T]: (arg: T[key]) => Builder<T>
} & { build(): T };