import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import fetch from "cross-fetch";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import ExemplePhoto from "./exemple_photo_spot.jpg";
import RenderRating from "./renders/RenderRating";
import RenderInfo from "./renders/RenderInfo";
import RenderComments from "./renders/RenderComments";
import Card from "./styled/Card";

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

const PanelInfoOnSpot = ({ spot }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const baseUrl = "http://localhost:8080";

    (async () => {
      const response = await fetch(`${baseUrl}/api/comment/${spot._id}`);
      setComments(await response.json());
    })();
  }, [spot]);

  console.log("comments :>> ", comments);

  return (
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

      <Card>
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
      </Card>

      {(comments.length > 0) && <RenderComments comments={comments} />}

      </div>
  );
};

PanelInfoOnSpot.propTypes = {
  spot: PropTypes.object.isRequired,
};

export default PanelInfoOnSpot;
