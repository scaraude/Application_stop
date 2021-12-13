/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import styled from "styled-components";
import { Spot } from "../../../hooks/useSpotServices";
import { Card } from "../styled/Card";
import ExemplePhoto from "./exemple_photo_spot.jpg";
import { RenderInfo } from "./RenderInfo";
import { RenderRating } from "./RenderRating";


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

interface RenderSpotInfosProps {
  spot: Spot
}

export const RenderSpotInfos = forwardRef(({ spot }: RenderSpotInfosProps, forwardedRef: React.ForwardedRef<HTMLDivElement>) => {
	if (!spot) return null;

	return (
		<Card ref={forwardedRef}>
			<StyledInfoHeader>
				<h2>{spot.title}</h2>
				<RenderRating rating={spot.rating} />
			</StyledInfoHeader>
			<StyledImg src={ExemplePhoto} alt="photo du spot" />

			{spot.destinations &&
        <RenderInfo label="Destinations :" content={spot.destinations.join(", ")} />
			}
			{spot.advice && <RenderInfo label="Conseil :" content={spot.advice} />}
			{spot.direction &&
        <RenderInfo label="Direction :" content={spot.direction} />
			}
			{spot.roads &&
        <RenderInfo label="Roads :" content={spot.roads.join(", ")} />
			}
			{spot.access && <RenderInfo label="Accès :" content={spot.access} />}
		</Card>
	);
});
