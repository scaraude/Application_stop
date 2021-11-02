import React from 'react';
import ArrowRightAltRoundedIcon from "@material-ui/icons/ArrowRightAltRounded";
import { Header, StyledIconButtons } from './style/styledComponents';
import IconButton from "@material-ui/core/IconButton";

interface SidebarHeaderProps {
  rightChildren?: React.ReactNode;
  bottomChildren?: React.ReactNode;
  handleDrawerClose: () => void;
}

export const SidebarHeader = ({ rightChildren, bottomChildren, handleDrawerClose }: SidebarHeaderProps) => {
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
