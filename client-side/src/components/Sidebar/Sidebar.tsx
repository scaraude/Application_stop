import Drawer from "@mui/material/Drawer";
import React from "react"
import { useHistory } from "react-router-dom";
import { SidebarHeader } from "./headers/SidebarHeader";
import { SidebarLayout } from "./sidebar.styled";

interface SidebarProps {
    children?: React.ReactNode;
    rightChildren?: React.ReactNode;
}

const closeDrawer = () => {
    const history = useHistory();
    history.push("/")
}

export const Sidebar = ({ children, rightChildren }: SidebarProps) => {
    return (
        <Drawer open={true} anchor="right">
            <SidebarLayout>
                <SidebarHeader handleDrawerClose={closeDrawer} rightChildren={rightChildren} />
                {children}
            </SidebarLayout>
        </Drawer>
    )
}