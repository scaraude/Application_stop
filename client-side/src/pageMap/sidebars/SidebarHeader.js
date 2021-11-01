import React from 'react';
import PropTypes from 'prop-types';
import ArrowRightAltRoundedIcon from "@material-ui/icons/ArrowRightAltRounded";
import { Header, StyledIconButtons } from './style/styledComponents';
import IconButton from "@material-ui/core/IconButton";

export const SidebarHeader = ({ rightChildren, bottomChildren, handleDrawerClose }) => {
  return (
    <Header>
      <StyledIconButtons>
        <IconButton onClick={handleDrawerClose}>
          <ArrowRightAltRoundedIcon />
        </IconButton>
        {rightChildren}
      </StyledIconButtons>

      {bottomChildren}
    </Header>
  );
};

SidebarHeader.propTypes = {
  rightChildren: PropTypes.element,
  bottomChildren: PropTypes.element,
  handleDrawerClose: PropTypes.func.isRequired,
};
