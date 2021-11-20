import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import styled from "styled-components";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useSpotServices } from "../../hooks/useSpotServices";
import { Marker, useMapEvent } from "react-leaflet";
import { SidebarHeader } from "../../../components/Sidebar/headers/SidebarHeader";

const StyledAddSpotForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

const fieldStyle = {
  padding: "1rem 0",
};

const StylesCheckBox = styled.div`
  display: flex;
  justify-content: space-around;
`;

interface AddSpotFormProps {
  handleDrawerClose: () => void;
}

export const AddSpotForm = ({ handleDrawerClose }: AddSpotFormProps) => {
  const [spotName, setSpotName] = useState("");
  const [isSpotAccessible, setIsSpotAccessible] = useState(true);
  const [isSpotSafe, setIsSpotSafe] = useState(true);
  const [spotRate, setSpotRate] = useState<number | null>(2.5);

  const map = useMapEvent('move', () => {
    setMapCenter(map.getCenter());
  });

  const [mapCenter, setMapCenter] = useState(map.getCenter());

  const handleSpotCreation = async (event: React.FormEvent<HTMLFormElement>) => {
    const { addSpot } = useSpotServices();
    event.preventDefault();
    await addSpot({
      title: spotName,
      gps: { lat: mapCenter.lat, lon: mapCenter.lng },
      isEasytoAccess: isSpotAccessible,
      isSafe: isSpotSafe,
      rating: spotRate ?? 2.5,
    });
    handleDrawerClose();
  };

  return (
    <>
      <SidebarHeader handleDrawerClose={handleDrawerClose} />
      {mapCenter && <Marker position={mapCenter} />}
      <StyledAddSpotForm
        noValidate
        autoComplete="off"
        id="spot-form"
        onSubmit={handleSpotCreation}
      >
        <h2>Ajouter un nouveau spot de stop</h2>
        <TextField
          style={fieldStyle}
          id="standard-basic"
          label="Nom"
          value={spotName}
          onChange={(event) => setSpotName(event.target.value)}
        />
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography component="legend">Note</Typography>
          <Rating
            name="customized-empty"
            precision={0.5}
            emptyIcon={<StarBorderIcon fontSize="inherit" />}
            value={spotRate}
            onChange={(event, newValue) => {
              setSpotRate(newValue);
            }}
          />
        </Box>
        <TextField
          style={fieldStyle}
          id="standard-basic"
          label="Image TODO"
          disabled
        />
        <StylesCheckBox>
          <FormControlLabel
            style={fieldStyle}
            control={<Checkbox name="isSafe" color="primary" />}
            label="Ce spot est safe"
            checked={isSpotSafe}
            onChange={(event, checked) => setIsSpotSafe(checked)}
          />
          <FormControlLabel
            style={fieldStyle}
            control={<Checkbox name="isAccessible" color="primary" />}
            label="Ce spot est facile d'accès"
            checked={isSpotAccessible}
            onChange={(event, checked) => setIsSpotAccessible(checked)}
          />
        </StylesCheckBox>
        <Button
          style={{ ...fieldStyle, marginTop: "1rem" }}
          variant="contained"
          color="primary"
          type="submit"
        >
          Ajouter
        </Button>
      </StyledAddSpotForm>
    </>
  );
};
