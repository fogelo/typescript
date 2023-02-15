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
      small : "small",
    },
  };