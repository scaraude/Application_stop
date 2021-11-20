import Drawer, { DrawerProps } from "@mui/material/Drawer";
import React from "react"
import { useHistory } from "react-router-dom";
import { SidebarHeader } from "./headers/SidebarHeader";
import { SidebarLayout } from "./sidebar.styled";

interface SidebarProps {
    children?: React.ReactNode;
    rightChildren?: React.ReactNode;
    variant?: DrawerProps["variant"];
}

export const Sidebar = ({ children, rightChildren, variant }: SidebarProps) => {
    const history = useHistory();
    return (
        <Drawer open={true} anchor="right" variant={variant} >
            <SidebarLayout>
                <SidebarHeader handleDrawerClose={() => history.push("/")} rightChildren={rightChildren} />
                {children}
            </SidebarLayout>
        </Drawer>
    );
};
