import { Equal, Expect } from "../../utils"

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<["a", "b", "c", "d"]>, ["a", "b", "c"]>>,
  Expect<Equal<MyShift<[3, 2, 1]>, [2, 1]>>,
  Expect<Equal<MyShift<["a", "b", "c", "d"]>, ["b", "c", "d"]>>,
  Expect<Equal<MyPush<[3, 2, 1], 4>, [3, 2, 1, 4]>>,
  Expect<Equal<MyPush<["a", "b", "c"], "d">, ["a", "b", "c", "d"]>>,
  Expect<Equal<MyUnshift<[3, 2, 1], 4>, [4, 3, 2, 1]>>,
  Expect<Equal<MyUnshift<["a", "b", "c"], "d">, ["d", "a", "b", "c"]>>
]
