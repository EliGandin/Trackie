import { TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";

const ops = [{ label: "The Shawshank Redemption", year: 1994 }];

const Search = () => {
  return (
    <Autocomplete
      className="relative top-20 rounded-lg bg-neutral-300 p-2 focus:text-neutral-300 focus:ring-neutral-600"
      disablePortal
      id="search"
      options={ops}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Location" />}
    />
  );
};

export default Search;
