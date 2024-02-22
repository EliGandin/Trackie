import { TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";

const ops = [{ label: "The Shawshank Redemption", year: 1994 }];

const Search = () => {
  return (
    <Autocomplete
      className="relative top-20 rounded-lg bg-neutral-300 p-2"
      disablePortal
      id="search"
      options={ops}
      sx={{
        width: 300,
      }}
      renderInput={(params) => (
        <TextField
          {...params}
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
