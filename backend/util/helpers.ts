import crypto from "crypto";

interface LocationElement {
  display_name: string;
  lat: number;
  lon: number;
}

export const randomImageName = (bytes = 32) => {
  return crypto.randomBytes(bytes).toString("hex");
};

export const parseLocation = (arr: unknown[]) => {
  return (arr as LocationElement[]).map((el) => {
    return { name: el.display_name, coordinates: [el.lat, el.lon] };
  });
};
