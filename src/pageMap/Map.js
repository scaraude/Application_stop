import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  MapContainer,
  TileLayer,
  ZoomControl,
  Marker,
  Popup,
} from "react-leaflet";

import SearchField from "./SearchField";
import useGetAllSpots from "./useGetAllSpots";

const StyledContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
`;
const SearchFieldHolder = styled.div`
  position: absolute;
  top: 10vh;
  left: 50vw;
  transform: translateX(-50%);
  z-index: 9999;
  background-color: white;
`;

const Map = () => {
  const spots = useGetAllSpots();
  console.log("spots :>> ", spots);
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
          maxZoom="22"
          accessToken="pk.eyJ1Ijoic2NhcmF1ZGUiLCJhIjoiY2tnYXJpdDh1MDl2NTJ4cnR3c2c4NjVzcSJ9.UkZLikOnXgNA-j0Dmoub3w"
        />

        <SearchFieldHolder>
          <SearchField />
        </SearchFieldHolder>

        {spots.map((spot) => 
            <Marker key={spot._id} position={[spot.gps.lat, spot.gps.lon]}>
              <Popup>
                <h3>{spot.title}</h3>
                {spot.advice}
              </Popup>
            </Marker>
        )}

        <ZoomControl position="bottomright" />
      </MapContainer>
    </StyledContainer>
  );
};

export default Map;
