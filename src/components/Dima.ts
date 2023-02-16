//generic
export type UserType = {
  role: number;
  id: number;
};
export type PhotoType = {
  large: string;
  small: string;
};

type ServerResponseType<D> = {
  errorCode: number;
  messages: Array<string>;
  data: D;
};

const response1: ServerResponseType<UserType> = {
  errorCode: 1,
  messages: ["good", "bad"],
  data: {
    role: 1,
    id: 2,
  },
};

const response2: ServerResponseType<PhotoType> = {
  errorCode: 1,
  messages: ["good", "bad"],
  data: {
    large: "large",
    small: "small",
  },
};

//typeof
type Nullable<T> = null | T;

const initial = {
  id: 1,
  name: "anton",
  photo: null as PhotoType | null,
  user: null as Nullable<UserType>,
};

const StateType = typeof initial;

//ReturnType - анализирует то, что принимает и возвращает функция и выдает по итогу тип
const actionCreator = (age: number) => ({ type: "set-age", age } as const); //as const - зафиксирует "set-age" не как просто string, а как именно "set-age"

type ActionType = ReturnType<typeof actionCreator>;

const action: ActionType = { type: "set-age", age: 18 };

//conditional types
type HipHop<T> = T extends "user"
  ? UserType
  : T extends "photo"
  ? PhotoType
  : number;

let a: HipHop<"user"> = {
  role: 1,
  id: 2,
};

let b: HipHop<"photo"> = {
  large: "large",
  small: "small",
};

let c: HipHop<"user" | "photo"> = {
  role: 1,
  id: 2,
};

//infer (перевод - догадаться)

type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never; // что тут происходит? Пишем свой ReturnType. Если тип T это функция,
//которая может принимать любые аргументы и возвращет какой-то тип R, который мы просим ts додумать (infer),
//то просим ts вернуть нам этот тип R иначе never.

//====
const obj = {
  a: { name: "anton" },
  b: { age: 31 },
  c: { site: { title: "asdfsdf" } },
};

type SomeType<T> = T extends { [key: string]: infer U } ? U : never; //Если T является объектом, который состоит из ключей и значений U, которые ts додомает
//сам то для каждого объекта в объекте вернет тип. Получится все тоже самое если бы мы создали тип вот так: type SomeType = typeof obj.a |  typeof obj.b | typeof obj.c 
let hiphop: SomeType<typeof obj> = {age: 18}