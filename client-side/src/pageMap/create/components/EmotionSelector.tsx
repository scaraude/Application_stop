import { Tab, Tabs } from "@mui/material"
import React from "react"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import { Emotion } from "../types";

interface EmotionSelectorProps {
    emotion: Emotion | undefined;
    handleChange: (event: React.SyntheticEvent<Element, Event>, newValue: Emotion) => void;
}

export const EmotionSelector = ({ emotion, handleChange }: EmotionSelectorProps): JSX.Element => {
    return (
        <Tabs value={emotion ?? false} onChange={handleChange} aria-label="spot-emotion" variant="fullWidth">
            <Tab icon={<ThumbUpIcon />} label="Good !" value={Emotion.GOOD} />
            <Tab icon={<ThumbDownIcon />} label="Bad" value={Emotion.BAD} />
            <Tab icon={<WarningRoundedIcon />} label="Dangerous" value={Emotion.DANGEROUS} />
        </Tabs>
    )
}