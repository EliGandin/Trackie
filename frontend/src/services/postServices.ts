import axios from "axios";
import { FieldValues } from "react-hook-form";

export const getAllPosts = async () => {
  return (await axios.get("http://localhost:8000")).data;
};

export const getSinglePost = async (id: number) => {
  const postData = await axios.get(`http://localhost:8000/post/${id}`);
  return postData.data.data;
};

export const newPost = async (data: FieldValues) => {
  return await axios.post("http://localhost:8000/addPost", data);
};
