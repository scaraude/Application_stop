import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import ArrowRightAltRoundedIcon from "@material-ui/icons/ArrowRightAltRounded";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Drawer } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";

import ScrollBar from "react-perfect-scrollbar";
import 'react-perfect-scrollbar/dist/css/styles.css';

import PanelInfoOnSpot from "./PanelInfoOnSpot";
import RenderSpotIconButtons from "./renders/RenderSpotIconButtons";

const Panel = styled.div`
  position:relative;
  width: 33vw;
  min-height: calc(100% - 1rem);
  background-color: #ececec;
`;

const Header = styled.div`
  background-color: #ececec;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
`;

const StyledIconButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  `;

const Body = styled.div`
  background-color: #ececec;
  padding: 0 0.5rem 0.5rem 0.5rem;
  `;

const Sidebar = ({ open = false, spot = null, handleDrawerClose }) => {
  return (
    <Drawer anchor="right" open={open} onClose={() => handleDrawerClose()}>
          <ScrollBar component="div">
      <Panel>
        <Header>
          <StyledIconButtons>
            <IconButton onClick={handleDrawerClose}>
              <ArrowRightAltRoundedIcon />
            </IconButton>
            {spot && <RenderSpotIconButtons />}
          </StyledIconButtons>

          {spot && (
            <ButtonGroup className="test-boutton"
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
          )}
        </Header>

          <Body>{spot && <PanelInfoOnSpot spot={spot} />}</Body>
      </Panel>
        </ScrollBar>
    </Drawer>
  );
};

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  spot: PropTypes.object,
  handleDrawerClose: PropTypes.func.isRequired,
};

export default Sidebar;
