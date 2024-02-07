import axios from "axios";

export const getAllPosts = async () => {
  return (await axios.get("http://localhost:8000")).data;
};

export const getSinglePost = async (id: number) => {
  return (await axios.get(`http://localhost:8000/${id}`)).data;
};
