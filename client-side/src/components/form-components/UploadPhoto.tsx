import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Fab from '@mui/material/Fab';
import React from 'react';
import styled from 'styled-components';

interface PhotoUploaderProps {
    handleFile: (file: File | undefined) => void;
}

const AddAPhotoIconBis = styled(AddAPhotoIcon)`
    margin-right: 8px;
`

export const PhotoUploader = ({ handleFile }: PhotoUploaderProps) => {
    const hiddenFileInput = React.useRef<HTMLInputElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        hiddenFileInput?.current?.click();
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fileUploaded = event.target?.files?.[0];
        handleFile(fileUploaded);
    };

    return (
        <>
            <Fab color="primary" aria-label="add" onClick={handleClick} variant="extended">
                <AddAPhotoIconBis />
                Upload a photo
            </Fab>
            <input type="file"
                ref={hiddenFileInput}
                onChange={handleChange}
                style={{ display: 'none' }}
            />
        </>
    );
};