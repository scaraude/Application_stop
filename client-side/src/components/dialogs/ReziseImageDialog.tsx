import { Button, Dialog, DialogActions, DialogContent } from "@mui/material"
import React from "react"
import styled from "styled-components"

const DialogXlPaperScroll = styled(Dialog)`
    .MuiDialog-paper {
        width: 90vw;
        height: 90vh;
    }
`
const DialogImageContent = styled(DialogContent)`
    background-color: #2b2b2b;
    display: flex;
    justify-content: center;
`

const ImageDialog = styled.img`
    border-radius: 4px;
    max-height: 100%;
    width: auto;
`

interface ResizeImageDialogProps {
    photo?: File;
    onClose: () => void;
}

export const ResizeImageDialog = ({ photo, onClose }: ResizeImageDialogProps) => {
    return (
        <DialogXlPaperScroll
            open={!!photo}
            maxWidth="xl"
            scroll="paper"
        >
            <DialogImageContent>
                {photo && <ImageDialog src={URL.createObjectURL(photo)} />}
            </DialogImageContent>
            <DialogActions>
                <Button onClick={onClose}>
                    Annuler
                </Button>
            </DialogActions>
        </DialogXlPaperScroll >
    )
}