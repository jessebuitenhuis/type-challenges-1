type Pop<T extends any[]> = T extends [...infer R, T[number]] ? R : never
type MyShift<T extends any[]> = T extends [T[number], ...infer R] ? R : never
type MyPush<T extends any[], K> = [...T, K]
type MyUnshift<T extends any[], K> = [K, ...T]
