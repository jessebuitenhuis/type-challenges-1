type MyDiff<
  T extends string | number | symbol,
  K extends string | number | symbol
> = ({ [P in T]: P } & { [P in K]: never })[T]

type MyOmit<T, K extends keyof T> = MyPick<T, MyDiff<keyof T, K>>
