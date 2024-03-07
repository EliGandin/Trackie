import { useDispatch } from "react-redux";

import SearchAutocomplete from "../../ui/components/FormComponents/SearchAutocomplete";
import FlyToLocation from "../../ui/components/FormComponents/FlyToLocation";
import NewPostButton from "../NewPost/NewPostButton";

const Search = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col">
      <SearchAutocomplete />
      <FlyToLocation />
      <NewPostButton />
    </div>
  );
};

export default Search;
