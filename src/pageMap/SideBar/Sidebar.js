import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Drawer } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';

import RenderSpotInfos from "./RenderSpotInfos";

const StyledPanel = styled.div`
  width: 33vw;
  padding: 1.5rem;
`;

const Sidebar = ({ open = false, spot = null, handleDrawerClose }) => {
  return (
    <Drawer anchor="right" open={open} onClose={() => handleDrawerClose()}>
      <StyledPanel>
      <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon />
        </IconButton>
       {spot && <RenderSpotInfos spot={spot}/>}
      </StyledPanel>
    </Drawer>
  );
};

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  spot: PropTypes.object,
  handleDrawerClose: PropTypes.func.isRequired,
};

export default Sidebar;
