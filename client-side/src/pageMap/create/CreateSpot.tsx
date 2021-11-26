import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import React, { useState } from "react"
import styled from "styled-components"
import { PhotoUploader } from "../../components/form-components/UploadPhoto"
import { Sidebar } from "../../components/Sidebar/Sidebar"
import { EmotionSelector } from "./components/EmotionSelector"
import { Emotion } from "./types"

const SidebarForm = styled.form`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 0 24px 0 24px;
    justify-content: space-between;
`

const SidebarFooter = styled.footer`
    width: auto;
    padding: 32px;
`

export const CreateSpot = () => {
    const [photo, setPhoto] = useState<File | undefined>(undefined);
    const [emotion, setEmotion] = useState<Emotion | undefined>(undefined)

    const handleEmotionChange = (event: React.SyntheticEvent<Element, Event>, newValue: typeof emotion) => {
        setEmotion(newValue);
    };

    return (
        <Sidebar>
            <SidebarForm noValidate>
                <Box>
                    <TextField id="spot-name" name="name" label="Nom du spot" variant="standard" fullWidth defaultValue="Spot de stop #267" margin="normal" />
                    <PhotoUploader handleFile={(file: File | undefined) => setPhoto(file)} />
                    <TextField id="spot-destinations" name="destinations" label="destinations" variant="outlined" multiline fullWidth value="Annecy, Chambery" margin="normal" />
                    <EmotionSelector emotion={emotion} handleChange={handleEmotionChange} />
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