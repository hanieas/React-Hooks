import { FC, useContext } from "react";
import { IUserItem } from "../..";
import userContext from "../../contexts/user-context";

const UseContext: FC = () => {
  const { users } = useContext(userContext);
  return (
    <div>
      {users.map((user: IUserItem) => {
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

export default UseContext;
