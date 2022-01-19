import { FC, useEffect, useReducer } from "react";

export interface IUserItem {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface IUserState {
  users: IUserItem[];
}
export interface IUserAction<T> {
  type: "load";
  payload: T;
}

const UseReducer: FC = () => {
  function usersReducer(
    state: IUserState,
    action: IUserAction<IUserItem[]>
  ): IUserState {
    switch (action.type) {
      case "load":
        return {
          ...state,
          users: action.payload,
        };
      default:
        throw Error("Invalid Type");
    }
  }

  const [usersState, usersDispatch] = useReducer(usersReducer, { users: [] });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => usersDispatch({ type: "load", payload: data }));
  }, []);

  return (
    <div>
      {usersState.users.map((user: IUserItem) => {
        return (
          <div key={user.id}>
            <h3>User {user.id}</h3>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
          </div>
        );
      })}
    </div>
  );
};
export default UseReducer;
