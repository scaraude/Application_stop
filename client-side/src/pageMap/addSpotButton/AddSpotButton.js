import React from "react";
import IconButton from "@material-ui/core/IconButton";
import AddLocationIcon from "@material-ui/icons/AddLocation";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledIconButton = styled.div`
  position: absolute;
  z-index: 400;
  bottom: 10vh;
  left: 50vw;
  transform: translateX(-50%);
`;

const AddSpotButton = ({ handleClick }) => {
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

AddSpotButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default AddSpotButton;
