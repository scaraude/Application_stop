import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Drawer } from "@material-ui/core";
import RenderSpotInfos from "./RenderSpotInfos";

const StyledPanel = styled.div`
  width: 33vw;
  padding: 1.5rem;
  padding-top: 10rem;
`;

const Sidebar = ({ open = false, spot = null, onClose }) => {
  return (
    <Drawer anchor="right" open={open} onClose={() => onClose()}>
      <StyledPanel>
       {spot && <RenderSpotInfos spot={spot}/>}
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
