import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import ExemplePhoto from "./exemple_photo_spot.jpg";
import RenderRating from "./RenderRating";
import RenderInfo from "./RenderInfo";

const InfoContainer = styled.div`
  background-color: #ffffff;
  border-radius: 3px;
  box-shadow: 0px 2px 2px #3d3d3d61;
  padding: 0 1.5rem 1rem;
`;

const StyledImg = styled.img`
  width: 100%;
  height: auto;
`;

const StyledInfoHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RenderSpotInfos = ({ spot }) => (
  <div>
    <ButtonGroup
      variant="text"
      color="primary"
      aria-label="text primary button group"
      style={{ width: "100%" }}
    >
      <Button selected style={{ width: "50%" }}>
        Informations
      </Button>
      <Button style={{ width: "50%" }}>Commentaires</Button>
    </ButtonGroup>

    <InfoContainer>
      <StyledInfoHeader>
        <h2>{spot.title}</h2>
        <RenderRating rating={spot.score} />
      </StyledInfoHeader>
      <StyledImg src={ExemplePhoto} alt="photo du spot" />

      {spot.destinations && (
        <RenderInfo
          label="Destinations :"
          content={spot.destinations.join(", ")}
        />
      )}
      {spot.advice && <RenderInfo label="Conseil :" content={spot.advice} />}
      {spot.direction && (
        <RenderInfo label="Direction :" content={spot.direction} />
      )}
      {spot.roads && (
        <RenderInfo label="Roads :" content={spot.roads.join(", ")} />
      )}
      {spot.access && <RenderInfo label="Accès :" content={spot.access} />}
    </InfoContainer>
  </div>
);

RenderSpotInfos.propTypes = {
  spot: PropTypes.object.isRequired,
};

export default RenderSpotInfos;
