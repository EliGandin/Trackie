import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Autocomplete, TextField } from "@mui/material";

import { getCoordinates } from "../../../services/geoLocationServices";
import { parseLocation } from "../../../features/Search/helpers/parseLocationInfo";
import { setLocationCoordinates } from "../../../stores/slices/mapSlice";

interface Option {
  name: string;
  coordinates: number[];
}

const SearchAutocomplete = () => {
  const [value, setValue] = useState<string | null>("");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [optionsCoords, setOptionsCoords] = useState<Option[] | undefined>([]);
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
    dispatch(
      setLocationCoordinates(
        optionsCoords?.find((el) => el.name === v)?.coordinates,
      ),
    );
  };

  return (
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
  );
};

export default SearchAutocomplete;
