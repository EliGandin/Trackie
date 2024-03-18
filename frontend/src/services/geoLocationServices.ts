import axios from "axios";

export const getCoordinates = async (query: string | null) => {
  if (!query) return;

  const res = await axios.get(`http://localhost:8000/location/${query}`);
  return res.data;
};
