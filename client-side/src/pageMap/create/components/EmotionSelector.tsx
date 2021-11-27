import { Tab, Tabs } from "@mui/material"
import React from "react"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import { Emotion } from "../types";
import styled from "styled-components";
import { Box } from "@mui/system";

const emotionColor: Record<Emotion, string> = {
  [Emotion.GOOD]: "#167c3d",
  [Emotion.BAD]: "#7c1616",
  [Emotion.DANGEROUS]: "#7c5016",
}

const TabGood = styled(Tab)`
  &.Mui-selected {
    color: ${emotionColor[Emotion.GOOD]}; 
  }
`;
const TabBad = styled(Tab)`
  &.Mui-selected {
    color: ${emotionColor[Emotion.BAD]}; 
  }
`;
const TabDangerous = styled(Tab)`
  &.Mui-selected {
    color: ${emotionColor[Emotion.DANGEROUS]}; 
  }
`;

const getIndicatorColor = (emotion: Emotion | undefined): string => {
  if (!emotion) return "#0000000"

  return emotionColor[emotion];
}

interface EmotionSelectorProps {
  emotion: Emotion | undefined;
  handleChange: (event: React.SyntheticEvent<Element, Event>, newValue: Emotion) => void;
}

export const EmotionSelector = ({ emotion, handleChange }: EmotionSelectorProps): JSX.Element => {
  return (
    <Box boxShadow="1px 1px 1px 2px #dbdbdb">
      <Tabs value={emotion ?? false} onChange={handleChange} aria-label="spot-emotion" variant="fullWidth" textColor="inherit" TabIndicatorProps={{ style: { background: getIndicatorColor(emotion) } }}>
        <TabGood icon={<ThumbUpIcon />} label="Cool !" value={Emotion.GOOD} />
        <TabBad icon={<ThumbDownIcon />} label="Pas cool" value={Emotion.BAD} />
        <TabDangerous icon={<WarningRoundedIcon />} label="Dangereux" value={Emotion.DANGEROUS} />
      </Tabs>
    </Box>
  )
}