import { createContext } from "react";

export interface IUserItem {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface IUserContext {
  users: IUserItem[];
}

const userContext = createContext<IUserContext>(null!);

export default userContext;
