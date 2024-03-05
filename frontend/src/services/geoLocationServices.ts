import axios from "axios";

export const getCoordinates = async (location: string | null) => {
  if (location === "") return;

  const res = await axios.get(
    `https://us1.locationiq.com/v1/search?key=pk.6966cf1f220a4ad3b6e8209d22b74597&format=json&q=${location}`,
  );
  return res.data;
};
