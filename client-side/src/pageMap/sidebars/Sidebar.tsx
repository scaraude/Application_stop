import { Drawer } from "@material-ui/core";
import React from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import styled from "styled-components";
import { Spot } from "../hooks/useSpotServices";
import { AddSpotForm } from "./addSpotForm/AddSpotForm";
import SidebarSpotInfos from "./sidebarSpotInfos/SidebarSpotInfos";
import { Panel } from "./style/styledComponents";

const StyledContainer = styled.div`
  z-index: 5;
  background-color: #000000;
`;

const StyledDrawer = styled(Drawer)`
  color: #000000;
`;

interface SidebarProps {
  open: boolean;
  spot: Spot | null;
  handleDrawerClose: () => void;
  isOpenToAddSpot: boolean;
}

const Sidebar = ({
  open = false,
  spot = null,
  handleDrawerClose,
  isOpenToAddSpot,
}: SidebarProps) => {
  return (
    <StyledContainer>
      <StyledDrawer
        anchor="right"
        open={open || isOpenToAddSpot}
        onClose={() => handleDrawerClose()}
        variant={isOpenToAddSpot ? "persistent" : "temporary"}
      >
        <Panel>
          {spot &&
            <SidebarSpotInfos
              handleDrawerClose={handleDrawerClose}
              spot={spot}
            />
          }
          {isOpenToAddSpot &&
            <AddSpotForm
              handleDrawerClose={handleDrawerClose}
            />
          }
        </Panel>
      </StyledDrawer>
    </StyledContainer>
  );
};

export default Sidebar;
