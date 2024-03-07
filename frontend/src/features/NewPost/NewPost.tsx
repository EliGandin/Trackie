import { useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import FormData from "form-data";
import { Autocomplete, TextField } from "@mui/material";

import { cursorMarker, setCursorMarker } from "../../stores/slices/mapSlice";
import { renderContent } from "../../stores/slices/sidebarSlice";
import FieldValueError from "../../pages/FieldValueError";
import { userDetails } from "../../stores/slices/userSlice";
import { newPost } from "../../services/postServices";
import { getCoordinates } from "../../services/geoLocationServices";
import { parseLocation } from "../Search/helpers/parseLocationInfo";

interface Option {
  name: string;
  coordinates: number[];
}

const NewPost = () => {
  const currMarker = useSelector(cursorMarker);
  const user = useSelector(userDetails);
  const dispatch = useDispatch();

  const [file, setFile] = useState<File | null>(null);

  const [value, setValue] = useState<string | null>("");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [optionsCoords, setOptionsCoords] = useState<Option[] | undefined>([]);
  const [coordinates, setCoordinates] = useState<number[] | undefined>(
    undefined,
  );
  const [options, setOptions] = useState<string[]>([]);

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

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleSelectedOption = (
    _e: React.SyntheticEvent<Element, Event>,
    v: string | null,
  ) => {
    setSelectedOption(v);
    setCoordinates(optionsCoords?.find((el) => el.name === v)?.coordinates);
  };

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValue(e.target.value);
  };

  const flyToLocation = (e: React.MouseEvent) => {
    e.preventDefault();

    // if (currMarker) map.flyTo(currMarker);
  };

  const onSubmit = async (data: FieldValues) => {
    if (!currMarker) return;

    const postData = {
      location: { name: data.locationName, coordinates: currMarker },
      story: data.story,
      userId: user.userId,
    };

    const formData = new FormData();
    formData.append("image", file);
    formData.append("postData", JSON.stringify(postData));

    newPost(formData);
    dispatch(renderContent({ content: "feed" }));
  };

  return (
    <div className="relative z-40 flex flex-col text-stone-800">
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        {/* <p className="mb-1 text-neutral-300">Location</p> */}
        <div className="mb-3 flex">
          {/* <input
            className="rounded px-4 py-2"
            placeholder="Tokyo, Japan"
            {...register("locationName", {
              required: "please provide a location",
            })}
          /> */}

          <Autocomplete
            className="h-18 rounded bg-slate-50 p-2 text-lg"
            onChange={(e, v) => handleSelectedOption(e, v)}
            disablePortal
            id="combo-box-demo"
            options={options}
            sx={{ width: 215 }}
            renderInput={(params) => (
              <TextField
                {...register("locationName", {
                  required: "please provide a location",
                })}
                sx={{
                  "& .MuiInputLabel-root.Mui-focused": { color: "black" },
                  "& .MuiOutlinedInput-root.Mui-focused": {
                    "& > fieldset": {
                      borderColor: "#525252",
                      color: "black",
                    },
                  },
                }}
                {...params}
                label="location"
                onChange={(e) => handleInput(e)}
              />
            )}
          />

          <button
            className="ml-2 rounded border border-stone-100 bg-zinc-600 p-2 text-stone-100"
            onClick={(e) => {
              e.preventDefault();
              dispatch(setCursorMarker(coordinates));
            }}
          >
            Fly To Location
          </button>
        </div>

        <p className="mb-1 text-neutral-300">Story</p>
        <textarea
          className="h-32 rounded px-4 py-2 text-start"
          placeholder="Tell us about this place"
          {...register("story")}
        />

        <div className="mt-5 w-24 self-center rounded-lg border bg-emerald-500 py-1 text-neutral-100 hover:bg-emerald-600 disabled:bg-neutral-600 disabled:text-neutral-400">
          <button
            type="button"
            disabled={isSubmitting}
            onClick={(e) => flyToLocation(e)}
          >
            Upload Photos
          </button>

          <input
            {...register("image")}
            type="file"
            name="image"
            className=""
            onChange={(e) => e.target.files && setFile(e.target.files[0])}
            accept="image/*"
          />
        </div>

        {/* <p className="mt-2 self-center text-neutral-400">
          upload up to 3 photos
        </p> */}

        <button className="mt-5 w-20 self-center rounded-lg border bg-emerald-500 py-1 text-neutral-100 hover:bg-emerald-600 disabled:bg-neutral-600 disabled:text-neutral-400">
          Post
        </button>
      </form>
      <ul className="mt-2">
        {errors.locationName && (
          <FieldValueError error={`${errors.locationName.message}`} />
        )}
      </ul>

      <button
        className="fixed bottom-12 rounded border px-2 py-1 text-lg text-neutral-100 hover:bg-neutral-700"
        onClick={() => dispatch(renderContent({ content: "feed" }))}
      >
        &#8592; Back to feed
      </button>
    </div>
  );
};

export default NewPost;
