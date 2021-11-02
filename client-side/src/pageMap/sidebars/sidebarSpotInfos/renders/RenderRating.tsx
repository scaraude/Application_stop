import React from "react";
import PropTypes from "prop-types";

import ThumbUpRoundedIcon from "@material-ui/icons/ThumbUpRounded";
import { green, orange, red } from "@material-ui/core/colors";

interface RenderRatingProps {
  rating: number;
}

const getStyle = (rating: number): { color: string; marginRight: string } => {
  const style =
    rating <= 1
      ? { color: red[600] }
      : rating <= 2
        ? { color: orange[600] }
        : { color: green[600] };

  return { ...style, marginRight: "5px" }
}

export const RenderRating = ({ rating }: RenderRatingProps) => {
  const style = getStyle(rating);

  const JSX = [];
  for (let index = 0; index < rating; index++) {
    JSX.push(<ThumbUpRoundedIcon key={index} style={style} />);
  }

  return <div>{JSX}</div>;
};