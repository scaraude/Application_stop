import { Tab, Tabs } from "@mui/material"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import React, { useState } from "react"
import styled from "styled-components"
import { PhotoUploader } from "../../components/form-components/UploadPhoto"
import { Sidebar } from "../../components/Sidebar/Sidebar"

const SidebarForm = styled.form`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 0 16px 0 16px;
    justify-content: space-between;
`

const SidebarFooter = styled.footer`
    width: auto;
    padding: 32px;
`

export const CreateSpot = () => {
    const [photo, setPhoto] = useState<File | undefined>(undefined);
    const [emotion, setEmotion] = useState<1 | 2 | 3 | null>(null)

    const handleChange = (event: React.SyntheticEvent<Element, Event>, newValue: typeof emotion) => {
        setEmotion(newValue);
    };

    return (
        <Sidebar>
            <SidebarForm noValidate>
                <Box>
                    <TextField id="spot-name" name="name" label="Nom du spot" variant="outlined" fullWidth focused defaultValue="Spot de stop #267" margin="normal" />
                    <PhotoUploader handleFile={(file: File | undefined) => setPhoto(file)} />
                    <TextField id="spot-destinations" name="destinations" label="destinations" variant="outlined" multiline fullWidth value="Annecy, Chambery" margin="normal" />
                    <Tabs value={emotion} onChange={handleChange} aria-label="spot-emotion" variant="fullWidth">
                        <Tab icon={<ThumbUpIcon />} label="Good !" value={1} />
                        <Tab icon={<ThumbDownIcon />} label="Bad" value={2} />
                        <Tab icon={<WarningRoundedIcon />} label="Dangerous" value={3} />
                    </Tabs>
                </Box>
                <SidebarFooter>
                    <Button variant="contained" fullWidth>
                        Submit
                    </Button>
                </SidebarFooter>
            </SidebarForm>
        </Sidebar>
    )
}