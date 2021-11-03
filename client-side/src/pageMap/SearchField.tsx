import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useMap } from "react-leaflet";
import useSuggestedCities, { GeoApiCity } from "./useSuggestedCities";

const SearchField = () => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<GeoApiCity[]>([]);
  const [selectedCity, setSelectedCity] = useState<GeoApiCity | null>(null);
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
    if (!selectedCity) return;
    const newLatLon = {
      lat: selectedCity.centre.coordinates[1],
      lng: selectedCity.centre.coordinates[0],
    };
    map.setView(newLatLon, 14);
    setInputValue("");
    setSelectedCity(null);
  }, [selectedCity]);

  return (
    <Autocomplete
      id="search-bar"
      style={{ width: "40vw" }
      }
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
      value={selectedCity}
      onChange={(event, newValue) => {
        setSelectedCity(newValue);
      }}
      getOptionSelected={(option, value) => option.nom === value.nom}
      getOptionLabel={(option) => option.nom}
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
                {
                  loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null
                }
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
      renderOption={(option) => <React.Fragment><span>{option.nom}</span><span style={{ marginLeft: "auto", fontStyle: "italic", fontSize: "0.9rem" }}>{option.departement.nom} - {option.codesPostaux[0]}</span > </React.Fragment>}
    />
  );
};

export default SearchField;
