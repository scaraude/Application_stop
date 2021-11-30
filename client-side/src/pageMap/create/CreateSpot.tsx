import { Autocomplete } from "@mui/material"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import React, { useState } from "react"
import { Marker, useMapEvent } from "react-leaflet"
import styled from "styled-components"
import { PhotoUploader } from "../../components/form-components/UploadPhoto"
import { Sidebar } from "../../components/Sidebar/Sidebar"
import useSuggestedCities, { GeoApiCity } from "../useSuggestedCities"
import { EmotionSelector } from "./components/EmotionSelector"
import { useSpot } from "./hooks/useCreateSpot.hook"
import { Emotion } from "./types"

const SidebarForm = styled.form`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 0 32px;
    justify-content: space-between;
`

const SidebarFooter = styled.footer`
    width: auto;
    padding: 32px;
`

export const CreateSpot = () => {
    const defaultName = "Spot de stop #267";

    const map = useMapEvent('move', () => {
        setMapCenter(map.getCenter());
    });
    const [mapCenter, setMapCenter] = useState(map.getCenter());
    const [name, setName] = useState<string | undefined>(undefined)
    const [photo, setPhoto] = useState<File | undefined>(undefined);
    const [emotion, setEmotion] = useState<Emotion | undefined>(undefined)
    const [selectedCities, setSelectedCities] = useState<GeoApiCity[]>([])
    const [cityInput, setCityInput] = useState<string | undefined>(undefined)
    const [comment, setComment] = useState<string | undefined>(undefined)
    const [formErrors, setFormErrors] = useState<{ emotion?: string, destination?: string }>({})

    const { createSpot } = useSpot();
    const proposedCities = useSuggestedCities(cityInput)
    const cityOptions = proposedCities?.filter((proposedCity) => !selectedCities.map((selectedCity) => selectedCity.code).includes(proposedCity.code));

    const handleEmotionChange = (event: React.SyntheticEvent<Element, Event>, newValue: typeof emotion) => {
        setEmotion(newValue);
    };

    const handleCityInputChange = (event: React.SyntheticEvent<Element, Event>, newValue: typeof cityInput) => {
        setCityInput(newValue);
    };

    const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFormErrors({});

        if (!emotion) setFormErrors(Object.assign(formErrors, { emotion: "Dis nous ce que t'en penses !" }))
        if (!selectedCities.length) setFormErrors(Object.assign(formErrors, { destination: "Il nous faut au moins une destination !" }))

        if (Object.keys(formErrors).length === 0) {
            await createSpot({
                name: name ?? defaultName,
                gps: mapCenter,
                emotion: emotion as Emotion,
                image: photo,
                destinations: selectedCities,
                comment
            })
        }
        console.log(`name`, name)
        console.log(`mapCenter`, mapCenter)
        console.log(`emotion`, emotion)
        console.log(`photo`, photo)
        console.log(`destinations`, selectedCities)
        console.log(`comment`, comment)
    }

    return (
        <>
            {mapCenter && <Marker position={mapCenter} />}
            <Sidebar variant="persistent">
                <SidebarForm onSubmit={submitForm}>
                    <Box height="100%" display="flex" flexDirection="column" gap={3}>
                        <TextField
                            id="spot-name"
                            name="name"
                            label="Nom du spot"
                            variant="standard"
                            placeholder={defaultName}
                            value={name ?? ""}
                            onChange={(event) => setName(event.target.value)}
                            autoFocus
                        />
                        <EmotionSelector emotion={emotion} handleChange={handleEmotionChange} error={formErrors.emotion} />
                        <PhotoUploader handleFileChange={(file: File | undefined) => setPhoto(file)} />
                        <Autocomplete
                            id="spot-destinations"
                            multiple
                            value={selectedCities}
                            onChange={(event, newValue) => setSelectedCities(newValue)}
                            open={!!cityInput}
                            inputValue={cityInput ?? ""}
                            onInputChange={handleCityInputChange}
                            options={cityOptions ?? []}
                            filterSelectedOptions
                            getOptionLabel={(option) => `${option.codesPostaux[0]} - ${option.nom}`}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Destinations"
                                    error={!!formErrors.destination}
                                    helperText={formErrors.destination}
                                />
                            )}
                            ChipProps={{ size: "small" }}
                        />
                        <TextField
                            id="spot-comment"
                            name="comment"
                            label="Laisse un commentaire"
                            value={comment ?? ""}
                            onChange={(event) => setComment(event.target.value)}
                            variant="outlined"
                            maxRows={3}
                            multiline
                        />
                    </Box>
                    <SidebarFooter>
                        <Button variant="contained" fullWidth type="submit">
                            Ajouter le spot !
                        </Button>
                    </SidebarFooter>
                </SidebarForm>
            </Sidebar >
        </>
    )
}
