type Chainable<T extends Record<string, unknown> = {}> = {
  option<K extends string, V = unknown>(
    key: K extends keyof T ? never : K,
    value: V
  ): Chainable<T & Record<K, V>>
  get(): T
}
