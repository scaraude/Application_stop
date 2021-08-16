import { Drawer } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import styled from "styled-components";
import AddSpotForm from "./addSpotForm/AddSpotForm";
import SidebarSpotInfos from "./sidebarSpotInfos/SidebarSpotInfos";
import { Panel } from "./style/styledComponents";

const StyledContainer = styled.div`
  z-index: 5;
`;

const Sidebar = ({
  open = false,
  spot = null,
  handleDrawerClose,
  isOpenToAddSpot,
}) => {
  return (
    <StyledContainer>
      <Drawer
        anchor="right"
        open={open || isOpenToAddSpot}
        onClose={() => handleDrawerClose()}
        variant={isOpenToAddSpot ? "persistent" : "temporary"}
      >
        <Panel>
          {spot && (
            <SidebarSpotInfos
              handleDrawerClose={handleDrawerClose}
              spot={spot}
            />
          )}
          {isOpenToAddSpot && (
            <AddSpotForm
              handleDrawerClose={handleDrawerClose}
            />
          )}
        </Panel>
      </Drawer>
    </StyledContainer>
  );
};

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  spot: PropTypes.object,
  handleDrawerClose: PropTypes.func.isRequired,
  isOpenToAddSpot: PropTypes.bool,
};

export default Sidebar;
