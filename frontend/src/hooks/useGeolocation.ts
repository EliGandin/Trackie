import { useState } from "react";

type Position = {
  lat: number;
  lng: number;
};

export const useGeolocation = () => {
  const [position, setPosition] = useState<Position | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getPosition = () => {
    if (!navigator.geolocation) {
      return setError("Your browser does not support geolocation");
    }

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      },
    );
  };
  return { position, isLoading, error, getPosition };
};
