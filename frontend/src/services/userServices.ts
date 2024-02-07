import axios from "axios";
import { FieldValues } from "react-hook-form";

export const login = async (data: FieldValues) => {
  console.log(data);
  console.log(JSON.stringify(data));
  const res = await axios.post(
    "http://localhost:8000/login",
    JSON.stringify(data),
    {
      headers: { "Content-Type": "application/json" },
    },
  );
  return res;
};

export const signup = () => {};
