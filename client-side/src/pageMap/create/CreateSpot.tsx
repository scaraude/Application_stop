import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
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

    return (
        <Sidebar>
            <SidebarForm noValidate>
                <Box>
                    <TextField id="spot-title" name="title" label="title" variant="outlined" fullWidth focused defaultValue="Spot de stop #267" margin="normal" />
                    <PhotoUploader handleFile={(file: File | undefined) => setPhoto(file)} />
                    <TextField id="spot-destinations" name="destinations" label="destinations" variant="outlined" multiline fullWidth defaultValue="Annecy, Chambery" margin="normal" />
                    <TextField id="spot-description" name="description" label="description" variant="outlined" multiline fullWidth defaultValue="pretty fun place" margin="normal" />
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