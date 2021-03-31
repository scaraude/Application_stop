import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const InfoContainer = styled.div`
  padding: 1.5rem;
  padding-top: 10rem;
`

const RenderSpotInfos = ({spot}) => (
  <InfoContainer>
    <h2>{spot.title}</h2>
    <p>PHOTO ICI</p>
    <h4>rating :</h4> {spot.score}
    <h4>advice :</h4> {spot.advice}
    <h4>destinations :</h4>{" "}
    <ul>
      {spot.destinations.map((destination) => (
        <li key={destination}>{destination}</li>
      ))}
    </ul>
    <h4>direction :</h4> {spot.direction}
    <h4>roads :</h4>{" "}
    <ul>
      {spot.roads.map((road) => (
        <li key={road}>{road}</li>
      ))}
    </ul>
    <h4>access :</h4> {spot.access}
  </InfoContainer>
);

RenderSpotInfos.propTypes = {
    spot: PropTypes.object.isRequired,
};

export default RenderSpotInfos;
