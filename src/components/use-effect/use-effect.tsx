import { FC, useEffect, useState } from "react";

export interface IUserItem {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

const UseEffect: FC = () => {
  const [users, setUsers] = useState<IUserItem[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => { setUsers(data);console.log(data);});
     
  }, []);
  return (
    <div>
      {users.map((user: any) => {
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
export default UseEffect;
