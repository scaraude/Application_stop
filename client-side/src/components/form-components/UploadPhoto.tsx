import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { Button, Dialog, DialogActions, DialogContent } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';

interface PhotoUploaderProps {
    handleFileChange: (file: File | undefined) => void;
}

const AddPhotoCard = styled.div`
    width: 100%;
    min-height: 15vh;
    background-color: #e2e2e2;
    border-radius: 4px;
    border: 1px solid #b4b4b4;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Text = styled.span`
    color: #777;
`

const ResizeImageDialog = styled(Dialog)`
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

export const PhotoUploader = ({ handleFileChange }: PhotoUploaderProps) => {
    const [photo, setPhoto] = useState<File | undefined>(undefined)
    const hiddenFileInput = React.useRef<HTMLInputElement | null>(null);

    const handleClick = () => {
        hiddenFileInput?.current?.click();
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fileUploaded = event.target?.files?.[0];
        setPhoto(fileUploaded);
        handleFileChange(fileUploaded);
    };

    return (
        <>
            <ResizeImageDialog
                open={!!photo}
                maxWidth="xl"
                scroll="paper"
            >
                <DialogImageContent>
                    {photo && <ImageDialog src={URL.createObjectURL(photo)} />}
                </DialogImageContent>
                <DialogActions>
                    <Button onClick={() => {
                        if (hiddenFileInput.current) hiddenFileInput.current.value = "";
                        setPhoto(undefined)
                    }}>
                        Annuler
                    </Button>
                </DialogActions>
            </ResizeImageDialog>
            {photo ?
                <img src={URL.createObjectURL(photo)} height={200} onClick={handleClick} /> :
                <>
                    <AddPhotoCard onClick={handleClick}>
                        <AddAPhotoIcon fontSize="large" htmlColor="#777" />
                        <Text>Upload a photo</Text>
                    </AddPhotoCard>
                </>
            }
            <input type="file"
                ref={hiddenFileInput}
                onChange={handleChange}
                style={{ display: 'none' }}
            />
        </>
    );
};