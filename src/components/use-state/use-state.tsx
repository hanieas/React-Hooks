import { FC, useState } from "react";

const UseState: FC = () => {
  const [message, setMessage] = useState<string>("");

  const handleMessage = (content: string) => {
    setMessage(content);
  };

  return (
    <div>
      {message ? <h1>{message}</h1> : ""}
      <button onClick={() => handleMessage("Welcome")}>I'm a Login User</button>
      <button onClick={() => handleMessage("Please Login")}>I'm a Guest</button>
    </div>
  );
};

export default UseState;
