type Last<T extends any[]> = T extends [...unknown[], infer R] ? R : never
