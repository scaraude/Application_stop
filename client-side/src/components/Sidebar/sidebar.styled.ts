import { Drawer } from "@mui/material";
import styled from "styled-components";
import { COMPONENT_BACKGROUND } from "../../theme/colors";

export const SidebarDrawer = styled(Drawer)`
.MuiDrawer-paper {
 height: 100vh;
 width: 33vw;
 background-color: ${COMPONENT_BACKGROUND};
}
`