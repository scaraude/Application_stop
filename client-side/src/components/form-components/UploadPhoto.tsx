import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import React from 'react';
import styled from 'styled-components';

interface PhotoUploaderProps {
    handleFile: (file: File | undefined) => void;
}

const AddPhotoCard = styled.div`
    width: 100%;
    min-height: 15vh;
    background-color: #c5c5c5;
    border-radius: 8px;
    border: 1px solid #777;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Text = styled.span`
    color: #777;
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
            <AddPhotoCard onClick={handleClick}>
                <AddAPhotoIcon fontSize="large" htmlColor="#777" />
                <Text>Upload a photo</Text>
            </AddPhotoCard>
            <input type="file"
                ref={hiddenFileInput}
                onChange={handleChange}
                style={{ display: 'none' }}
            />
        </>
    );
};