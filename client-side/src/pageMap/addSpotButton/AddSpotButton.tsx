import React from "react";
import IconButton from "@material-ui/core/IconButton";
import AddLocationIcon from "@material-ui/icons/AddLocation";
import styled from "styled-components";

const StyledIconButton = styled.div`
  position: absolute;
  z-index: 400;
  bottom: 10vh;
  left: 50vw;
  transform: translateX(-50%);
`;

interface AddSpotButtonProps {
  handleClick: () => void
}

const AddSpotButton = ({ handleClick }: AddSpotButtonProps) => {
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

export default AddSpotButton;
