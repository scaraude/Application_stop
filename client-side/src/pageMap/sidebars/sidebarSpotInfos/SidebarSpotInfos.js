import React, { useState, useEffect, useRef } from "react";
import { Body } from "../style/styledComponents";
import PropTypes from "prop-types";
import RenderComments from "./renders/RenderComments";
import RenderSpotInfos from "./renders/RenderSpotInfos";
import RenderSpotIconButtons from "./renders/RenderSpotIconButtons";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import easyScroll from "easy-scroll"; //scroll animations
import ScrollBar from "react-perfect-scrollbar";
import { SidebarHeader } from "../SidebarHeader";
import { Spot } from "../../hooks/useSpotServices";

// type Comment = {
//   _id: string;
//   score: number;
//   createdAt: Date;
//   userId: string;
//   text: string;
// }

// interface SidebarSpotInfosProps {
//   handleDrawerClose: () => void;
//   spot: Spot | null;
// }
const SidebarSpotInfos = ({ handleDrawerClose, spot = null }) => {
  const [tabValue, setTabValue] = useState(0);
  const [animated, setAnimated] = useState(false);
  const [comments, setComments] = useState([]);
  const refSpotInfos = useRef<HTMLElement | undefined>(null);
  const refScrollBar = useRef<HTMLElement | undefined>(undefined);

  useEffect(() => {
    setTabValue(0);
  }, []);

  useEffect(async () => {
    if (!spot) return;

    (async () => {
      const response = await fetch(`/api/comment/${spot.id}`);
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
          refSpotInfos.current?.clientHeight - refScrollBar.current.scrollTop,
        onAnimationCompleteCallback: () => setAnimated(false),
      });
    }
  };

  const ScrollSpy = () => {
    const currentHtmlElement = refScrollBar.current;
    const tabValue = currentHtmlElement ?
      currentHtmlElement.scrollTop >= refSpotInfos.current?.clientHeight ? 1 : 0 : 0;
    if (!animated) {
      setTabValue(tabValue);
    }
  };

  return (
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
      <SidebarHeader
        handleDrawerClose={handleDrawerClose}
        rightChildren={<RenderSpotIconButtons />}
        bottomChildren={
          <Tabs
            variant="fullWidth"
            value={tabValue}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChangeOnTab}
            aria-label="nav tabs"
          >
            <Tab label="Informations" />
            <Tab label="Commentaires" disabled={comments.length === 0} />
          </Tabs>
        }
      />

      <Body>
        <RenderSpotInfos ref={refSpotInfos} spot={spot} />
        {comments.length > 0 && <RenderComments comments={comments} />}
      </Body>
    </ScrollBar>
  );
};

SidebarSpotInfos.propTypes = {
  spot: PropTypes.object,
  handleDrawerClose: PropTypes.func.isRequired,
};
export default SidebarSpotInfos;
