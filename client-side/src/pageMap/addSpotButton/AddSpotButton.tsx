import React from "react";
import IconButton from "@material-ui/core/IconButton";
import AddLocationIcon from "@material-ui/icons/AddLocation";
import styled from "styled-components";
import { useHistory } from "react-router";

const StyledIconButton = styled.div`
  position: absolute;
  z-index: 400;
  bottom: 10vh;
  left: 50vw;
  transform: translateX(-50%);
`;


export const AddSpotButton = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/create")
  }

  return (
    <StyledIconButton>
      <IconButton
        onClick={handleClick}
        aria-label="delete"
        style={{ backgroundColor: "white", border: "1px solid grey" }}
      >
        <AddLocationIcon fontSize="large" />
      </IconButton>
    </StyledIconButton>
  );
};
