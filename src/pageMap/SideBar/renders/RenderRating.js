import React from "react";
import PropTypes from "prop-types";

import ThumbUpRoundedIcon from "@material-ui/icons/ThumbUpRounded";
import { green, orange, red } from "@material-ui/core/colors";

const RenderRating = ({ rating }) => {
  const style =
    rating <= 1
      ? { color: red[600] }
      : rating <= 2
      ? { color: orange[600] }
      : { color: green[600] };
  Object.assign(style, { marginRight: "5px" });

  const JSX = [];
  for (let index = 0; index < rating; index++) {
    JSX.push(<ThumbUpRoundedIcon key={index} style={style} />);
  }

  return <div>{JSX}</div>;
};

RenderRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default RenderRating;
