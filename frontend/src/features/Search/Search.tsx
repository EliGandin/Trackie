import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useEffect, useState } from "react";
import { getCoordinates } from "../../services/geoLocationServices";
import { parseLocation } from "./helpers/parseLocationInfo";
import { useDispatch } from "react-redux";
import { setCursorMarker, setLocationName } from "../../stores/slices/mapSlice";
import { renderContent } from "../../stores/slices/sidebarSlice";

interface Option {
  name: string;
  coordinates: number[];
}

const Search = () => {
  const [value, setValue] = useState<string | null>("");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [optionsCoords, setOptionsCoords] = useState<Option[] | undefined>([]);
  const [coordinates, setCoordinates] = useState<number[] | undefined>(
    undefined,
  );
  const [options, setOptions] = useState<string[]>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCoordinates(value);
      const parsedArr = parseLocation(res);

      if (!parsedArr) return;

      setOptionsCoords(parsedArr);
      setOptions(parsedArr.map((el) => el.name));
    };

    fetchData();
  }, [value, selectedOption]);

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValue(e.target.value);
  };

  const handleSelectedOption = (
    _e: React.SyntheticEvent<Element, Event>,
    v: string | null,
  ) => {
    setSelectedOption(v);
    setCoordinates(optionsCoords?.find((el) => el.name === v)?.coordinates);
  };

  return (
    <div className="flex flex-col">
      <div>
        <Autocomplete
          className="relative top-20 rounded-lg bg-neutral-300 p-2"
          options={options}
          value={selectedOption}
          onChange={(e, v) => handleSelectedOption(e, v)}
          disablePortal
          id="search"
          getOptionLabel={(option) => option || ""}
          sx={{
            width: 300,
          }}
          renderInput={(params) => (
            <TextField
              value={value}
              {...params}
              onChange={(e) => handleInput(e)}
              label="Location"
              sx={{
                "& .MuiInputLabel-root.Mui-focused": { color: "black" },
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
                    borderColor: "#525252",
                    color: "black",
                  },
                },
              }}
            />
          )}
        />
      </div>

      <div className="relative right-0 top-28 self-center rounded border border-neutral-100 px-2 text-lg">
        <button onClick={() => dispatch(setCursorMarker(coordinates))}>
          Fly To Location
        </button>
      </div>

      <div className="self-center">
        <button
          className="absolute bottom-5 w-[32px] rounded-full border border-solid bg-neutral-600 pb-1 text-lg font-bold"
          onClick={() => {
            dispatch(
              renderContent({
                content: "newPost",
              }),
            );
            dispatch(setLocationName(selectedOption));
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Search;
