import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import React, { useEffect, useRef, useState } from "react";
import ScrollBar from "react-perfect-scrollbar";
import { SidebarHeader } from "../../../components/Sidebar/headers/SidebarHeader";
import { Spot } from "../../hooks/useSpotServices";
import { Body } from "../style/styledComponents";
import { useComments } from "./get-comments.hook";
import { RenderComments } from "./renders/RenderComments";
import { RenderSpotIcons } from "./renders/RenderSpotIconButtons";
import { RenderSpotInfos } from "./renders/RenderSpotInfos";

interface SidebarSpotInfosProps {
  handleDrawerClose: () => void;
  spot: Spot;
}

const SidebarSpotInfos = ({ handleDrawerClose, spot }: SidebarSpotInfosProps) => {
	const [tabValue, setTabValue] = useState(0);
	const refSpotInfos = useRef<HTMLDivElement | null>(null);
	const refScrollBar = useRef<HTMLElement | null>(null);
	const comments = useComments(spot._id);

	useEffect(() => {
		setTabValue(0);
	}, []);


	const handleChangeOnTab = (event: React.ChangeEvent<Record<string, never>>, newValue: number) => {
		setTabValue(newValue);
	};

	const ScrollSpy = () => {
		if (!refScrollBar?.current?.scrollTop || !refSpotInfos?.current?.clientHeight) return;

		const tabValue = refScrollBar.current.scrollTop >= refSpotInfos.current.clientHeight ? 1 : 0;
		setTabValue(tabValue);
	};

	return (
		<ScrollBar
			containerRef={(ref) => {
				refScrollBar.current = ref; //tricks trouvé sur github
			}}
			component="div"
			onScrollY={ScrollSpy}
			onYReachStart={() => {
				setTabValue(0);
			}}
			onYReachEnd={(scroll) => {
				if (scroll.scrollTop !== 0) setTabValue(1);
			}}
		>
			<SidebarHeader
				handleDrawerClose={handleDrawerClose}
				rightChildren={<RenderSpotIcons />}
				bottomChildren={
					<Tabs
						variant="fullWidth"
						value={tabValue}
						indicatorColor="primary"
						textColor="primary"
						onChange={handleChangeOnTab}
						aria-label="nav tabs"
					>
						<Tab label="Informations" />
						<Tab label="Commentaires" disabled={comments?.length === 0} />
					</Tabs>
				}
			/>

			<Body>
				<RenderSpotInfos ref={refSpotInfos} spot={spot} />
				{comments && <RenderComments comments={comments} />}
			</Body>
		</ScrollBar>
	);
};

export default SidebarSpotInfos;
