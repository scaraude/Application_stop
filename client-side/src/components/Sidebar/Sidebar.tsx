import { DrawerProps } from "@mui/material/Drawer";
import React from "react"
import { useHistory } from "react-router-dom";
import { SidebarHeader } from "./headers/SidebarHeader";
import { SidebarDrawer } from "./sidebar.styled";

interface SidebarProps {
    children?: React.ReactNode;
    rightChildren?: React.ReactNode;
    variant?: DrawerProps["variant"];
}

export const Sidebar = ({ children, rightChildren, variant }: SidebarProps) => {
    const history = useHistory();
    return (
        <SidebarDrawer open={true} anchor="right" variant={variant}>
            <SidebarHeader handleDrawerClose={() => history.push("/")} rightChildren={rightChildren} />
            {children}
        </SidebarDrawer>
    );
};
