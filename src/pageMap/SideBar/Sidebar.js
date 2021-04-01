import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import ArrowRightAltRoundedIcon from "@material-ui/icons/ArrowRightAltRounded";
import { Drawer } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";

import RenderSpotInfos from "./renders/RenderSpotInfos";
import RenderSpotIconButtons from './renders/RenderSpotIconButtons'
const StyledPanel = styled.div`
  width: 33vw;
  /* min-height: calc(100% - 1rem); */
  background-color: #ececec;
  padding: 0.5rem;
`;

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Sidebar = ({ open = false, spot = null, onClose }) => {
  return (
    <Drawer anchor="right" open={open} onClose={() => onClose()}>
      <StyledPanel>
        <StyledHeader>
          <IconButton onClick={handleDrawerClose}>
            <ArrowRightAltRoundedIcon />
          </IconButton>
          {spot && <RenderSpotIconButtons/>}
        </StyledHeader>
        {spot && <RenderSpotInfos spot={spot} />}
      </StyledPanel>
    </Drawer>
  );
};

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  spot: PropTypes.object,
  onClose: PropTypes.func.isRequired,
};

export default Sidebar;
