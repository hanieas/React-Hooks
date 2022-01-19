import { FC, useEffect, useState } from "react";
import useFetch from "../../hooks/use-fetch";

export interface IUserItem {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

const CustomHook = async () => {
  const users: IUserItem[] = await useFetch();
  if (users) {
    return (
      <div>
        {users
          ? users.map((user: any) => {
              return (
                <div key={user.id}>
                  <h3>User {user.id}</h3>
                  <p>Name: {user.name}</p>
                  <p>Username: {user.username}</p>
                  <p>Email: {user.email}</p>
                </div>
              );
            })
          : ""}
      </div>
    );
  }
  return <div>Not Found Any Data</div>;
};
export default CustomHook;
