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
const actionCreator = (age: number) => ({type: "set-age", age} as const) //as const - зафиксирует "set-age" не как просто string, а как именно "set-age"

type ActionType = ReturnType<typeof actionCreator>

const action: ActionType = {type: "set-age", age: 18}


//conditional types
type HipHop<T> = T extends "user" ? UserType : T extends "photo" ? PhotoType : number

let a: HipHop<"user"> = {
    role: 1,
    id: 2,
}

let b: HipHop<"photo"> = {
    large: "large",
    small: "small",
}

let c: HipHop<"user" | "photo"> = {
    role: 1,
    id: 2,
}