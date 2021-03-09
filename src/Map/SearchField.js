import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useMap } from "react-leaflet";

import useSuggestedCities from "./useSuggestedCities";

// import searchIcon from './search-icon2.png'

const SearchField = () => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const loading = open && options.length === 0 && inputValue !== "";

  const map = useMap();
  const cities = useSuggestedCities(inputValue);

  useEffect(() => {
    if (cities) {
        setOptions(cities.map((city) => city));
    }
  }, [cities])

  //clear options when autosuggest close
  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  //change map view when a value is selected
  useEffect(() => {
    if (!value) return;
    const newLatLon = {
      lat: value.centre.coordinates[1],
      lon: value.centre.coordinates[0],
    };
    map.setView(newLatLon, 16);
    setInputValue("");
    setValue(null);
  }, [value]);

  return (
    <Autocomplete
      id="search-bar"
      style={{ width: "40vw" }}
      open={open && inputValue !== ""}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      getOptionSelected={(option, value) => option.nom === value.nom}
      getOptionLabel={(option) => option.nom} //normalement on peut virer, mais si on le fait ca fait tout planter...
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search"
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
      renderOption={(option) => <React.Fragment><span>{option.nom}</span><span style={{marginLeft: "auto", fontStyle: "italic", fontSize: "0.9rem"}}>{option.departement.nom} - {option.departement.code}</span></React.Fragment>}
    />
  );
};

export default SearchField;
