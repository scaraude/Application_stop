import React from "react";
import CreateRoundedIcon from "@material-ui/icons/CreateRounded";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const RenderSpotIcons = () => 
    <div>
      <IconButton>
        <FavoriteBorderIcon />
      </IconButton>
      <IconButton>
        <CreateRoundedIcon />
      </IconButton>
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    </div>
  ;

  export default RenderSpotIcons;