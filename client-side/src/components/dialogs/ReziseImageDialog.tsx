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
    height: 90vh;
    background-color: #2b2b2b;
    display: flex;
    justify-content: center;
`

const ImageHolderDialog = styled.img`
    border-radius: 4px;
    max-height: 100%;
    width: auto;
`

interface ResizeImageDialogProps {
    open: boolean;
    photo?: File;
    onClose: () => void;
    onValid: () => void;
}

export const ImageDialog = ({ open, photo, onClose, onValid }: ResizeImageDialogProps) => {
    const imageUrl = photo ? URL.createObjectURL(photo) : "";

    return (
        <DialogXlPaperScroll
            open={open}
            maxWidth="xl"
            scroll="paper"
        >
            <DialogImageContent>
                <ImageHolderDialog src={imageUrl} />
            </DialogImageContent>
            <DialogActions>
                <Button onClick={onValid}>
                    Changer
                </Button>
                <Button variant="contained" onClick={onClose}>
                    Valider
                </Button>
            </DialogActions>
        </DialogXlPaperScroll >
    )
}