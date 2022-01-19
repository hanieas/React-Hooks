import { useEffect, useState } from "react";
import { IUserItem } from "../components/use-effect/use-effect";
const useFetch = () => {
  const [response, setResponse] = useState<IUserItem[]>([]);
  useEffect(() => {
    async function fetchRequest() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data:IUserItem[] = await res.json();
      setResponse(data);
    }
    fetchRequest();
  });

  return response;
};
export default useFetch;
