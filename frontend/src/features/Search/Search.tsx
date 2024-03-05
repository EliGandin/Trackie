import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useEffect, useState } from "react";
import { getCoordinates } from "../../services/geoLocationServices";
import { isOptionIncluded, parseLocation } from "./helpers/parseLocationInfo";

interface Option {
  name: string;
  coordinates: [number, number];
}

const Search = () => {
  const [value, setValue] = useState<string | null>("");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [optionsCoords, setOptionsCoords] = useState<Option[] | undefined>([]);
  const [options, setOptions] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCoordinates(value);
      const parsedArr = parseLocation(res);

      if (!parsedArr) return;

      setOptionsCoords(parsedArr);
      setOptions(parsedArr.map((el) => el.name));
      console.log("selected", selectedOption);
    };

    fetchData();
    console.log(value);
  }, [value, selectedOption]);

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValue(e.target.value);
  };

  const handleSelectedOption = (
    e: React.SyntheticEvent<Element, Event>,
    v: string | null,
  ) => {
    setSelectedOption(v);
  };

  return (
    <Autocomplete
      className="relative top-20 rounded-lg bg-neutral-300 p-2"
      options={options}
      value={selectedOption}
      // isOptionEqualToValue={(option) => isOptionIncluded(value, option)}
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

export default Search;
