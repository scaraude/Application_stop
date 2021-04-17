import easyScroll from "easy-scroll"; //scroll animations
import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import ArrowRightAltRoundedIcon from "@material-ui/icons/ArrowRightAltRounded";
import { Drawer } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

import ScrollBar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

import RenderComments from "./renders/RenderComments";
import RenderSpotInfos from "./renders/RenderSpotInfos";
import RenderSpotIconButtons from "./renders/RenderSpotIconButtons";

const StyledContainer = styled.div`
z-index: 5;
`;

const Panel = styled.div`
  position: relative;
  width: 33vw;
  min-height: 100vh;
  background-color: #ececec;
`;

const Header = styled.div`
  background-color: #ececec;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  box-shadow: 0px 2px 2px #3d3d3d61;
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
  const [tabValue, setTabValue] = useState(0);
  const [animated, setAnimated] = useState(false);
  const [comments, setComments] = useState([]);
  const refSpotInfos = useRef(null);
  const refScrollBar = useRef(null);

  useEffect(() => {
    setTabValue(0);
  }, [open]);

  useEffect(() => {
    if (!spot) return null;

    (async () => {
      const response = await fetch(`/api/comment/${spot._id}`);
      setComments(await response.json());
    })();
  }, [spot]);

  const handleChangeOnTab = (event, newValue) => {
    setTabValue(newValue);
    setAnimated(true);

    if (newValue === 0) {
      easyScroll({
        scrollableDomEle: refScrollBar.current,
        direction: "top",
        duration: 600,
        easingPreset: "easeOutQuad",
        onAnimationCompleteCallback: () => setAnimated(false),
      });
    }
    if (newValue === 1) {
      easyScroll({
        scrollableDomEle: refScrollBar.current,
        direction: "bottom",
        duration: 600,
        easingPreset: "easeOutQuad",
        scrollAmount:
          refSpotInfos.current.clientHeight - refScrollBar.current.scrollTop,
        onAnimationCompleteCallback: () => setAnimated(false),
      });
    }
  };

  const ScrollSpy = () => {
    const tabValue =
      refScrollBar.current.scrollTop >= refSpotInfos.current.clientHeight
        ? 1
        : 0;
    if (!animated) {
      setTabValue(tabValue);
    }
  };

  return (
    <StyledContainer>
    <Drawer anchor="right" open={open} onClose={() => handleDrawerClose()}>
      <ScrollBar
        containerRef={(ref) => {
          refScrollBar.current = ref; //tricks trouvé sur github
        }}
        component="div"
        onScrollY={ScrollSpy}
        onYReachStart={() => {
          if (!animated) setTabValue(0);
        }}
        onYReachEnd={(scroll) => {
          if (scroll.scrollTop !== 0 && !animated) setTabValue(1);
        }}
      >
        <Panel>
          <Header>
            <StyledIconButtons>
              <IconButton onClick={handleDrawerClose}>
                <ArrowRightAltRoundedIcon />
              </IconButton>
              <RenderSpotIconButtons />
            </StyledIconButtons>

            <Tabs
              variant="fullWidth"
              value={tabValue}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChangeOnTab}
              aria-label="nav tabs"
            >
              <Tab label="Informations" />
              <Tab label="Commentaires" disabled={comments.length === 0}/>
            </Tabs>
          </Header>

          <Body>
            <RenderSpotInfos ref={refSpotInfos} spot={spot} />
            {comments.length > 0 && <RenderComments comments={comments} />}
          </Body>
        </Panel>
      </ScrollBar>
    </Drawer>
    </StyledContainer>
  );
};

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  spot: PropTypes.object,
  handleDrawerClose: PropTypes.func.isRequired,
};

export default Sidebar;
