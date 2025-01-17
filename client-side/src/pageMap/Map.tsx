import React, { useState } from "react";
import { MapContainer, Marker, TileLayer, ZoomControl } from "react-leaflet";
import styled from "styled-components";
import { AddSpotButton } from "./addSpotButton/AddSpotButton";
import { Spot } from "./hooks/useSpotServices";
import { MapRouter } from "./MapRouter";
import SearchField from "./SearchField";
import Sidebar from "./sidebars/Sidebar";
import useGetAllSpots from "./useGetAllSpots";

const StyledContainer = styled.div`
  position: absolute;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
`;

const SearchFieldHolder = styled.div`
  position: absolute;
  top: 14vh;
  left: 1vw;
  z-index: 1000;
  background-color: white;
`;

const renderMarker = (spot: Spot, setCurrentSpot: React.Dispatch<React.SetStateAction<Spot | null>>) => {
	if (!spot.gps?.lat || !spot.gps?.lon) return null;
	return (
		<Marker
			key={spot._id}
			position={[spot.gps.lat, spot.gps.lon]}
			eventHandlers={{
				click: () => {
					setCurrentSpot(spot);
				},
			}}
		/>);
};

const Map = () => {
	const [currentSpot, setCurrentSpot] = useState<Spot | null>(null);
	const [isSidebarOpenToAddSpot, setIsSidebarOpenToAddSpot] = useState(false);
	const spots = useGetAllSpots();

	const handleDrawerClose = () => {
		setCurrentSpot(null);
		setIsSidebarOpenToAddSpot(false);
	};

	return (
		<StyledContainer>
			<MapContainer
				style={{ margin: "0", height: "100%" }}
				center={[45.756104, 4.841173]}
				zoom={14}
				zoomControl={false}
			>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
					id="mapbox/streets-v11"
					maxZoom={22}
					// eslint-disable-next-line max-len
					accessToken="pk.eyJ1Ijoic2NhcmF1ZGUiLCJhIjoiY2tnYXJpdDh1MDl2NTJ4cnR3c2c4NjVzcSJ9.UkZLikOnXgNA-j0Dmoub3w"
				/>
				<SearchFieldHolder>
					<SearchField />
				</SearchFieldHolder>

				{spots?.map((spot) => renderMarker(spot, setCurrentSpot))}
				<AddSpotButton />

				<MapRouter />
				<Sidebar
					open={currentSpot !== null ? true : false}
					spot={currentSpot}
					isOpenToAddSpot={isSidebarOpenToAddSpot}
					handleDrawerClose={handleDrawerClose}
				/>
				<ZoomControl position="bottomright" />
			</MapContainer>
		</StyledContainer>
	);
};

export default Map;
