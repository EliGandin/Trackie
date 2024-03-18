import axios from "axios";
import { Request, Response } from "express";
import { parseLocation } from "../util/helpers";

export const getCoordinates = async (req: Request, res: Response) => {
  const query = req.params.query;
  try {
    const { data } = await axios.get(`${process.env.LOCATION_API}=${query}`);

    const parsedData = parseLocation(data);

    res.status(200).json({ data: parsedData });
  } catch {
    console.error();
  }
};
