import React from "react";
import ArrowRightAltRoundedIcon from "@material-ui/icons/ArrowRightAltRounded";
import IconButton from "@material-ui/core/IconButton";
import { Header, StyledIconButtons } from "./sidebarHeader.styled";

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
