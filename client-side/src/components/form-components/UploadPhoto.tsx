import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import React, { useState } from 'react';
import styled from 'styled-components';
import { ImageDialog } from '../dialogs/ReziseImageDialog';


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

const SidebarImageHolder = styled.img`
    height: 200px;
    width: auto;
`

interface PhotoUploaderProps {
    handleFileChange: (file: File | undefined) => void;
}

export const PhotoUploader = ({ handleFileChange }: PhotoUploaderProps) => {
    const [photo, setPhoto] = useState<File | undefined>(undefined)
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const hiddenFileInput = React.useRef<HTMLInputElement | null>(null);

    const handleClick = () => {
        hiddenFileInput?.current?.click();
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fileUploaded = event.target?.files?.[0];
        setPhoto(fileUploaded);
        handleFileChange(fileUploaded);
    };

    const changePhoto = () => {
        setIsDialogOpen(false)
        if (hiddenFileInput.current) hiddenFileInput.current.value = "";
        setPhoto(undefined)
    }

    return (
        <>
            <ImageDialog open={isDialogOpen} photo={photo} onValid={changePhoto} onClose={() => setIsDialogOpen(false)} />
            {photo ?
                <SidebarImageHolder src={URL.createObjectURL(photo)} onClick={() => setIsDialogOpen(true)} /> :
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