type MyDiff<
  T extends string | number | symbol,
  K extends string | number | symbol
> = ({ [P in T]: P } & { [P in K]: never })[T]

type Keys<T, K extends keyof T> = MyDiff<keyof T, K>

type MyOmit<T, K extends keyof T> = MyPick<T, Keys<T, K>>
