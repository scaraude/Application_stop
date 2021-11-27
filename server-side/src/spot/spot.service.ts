import { uploadFile } from "../storage/storage.service";
import { Spot, spotModel } from "./models/Spot.model";
import { SpotInput } from "./spot.types";

export const createAndSaveSpot = async (spot: SpotInput, authorId: string): Promise<Spot> => {
    const imageDownloadedUrl = await uploadFile(spot.image, spot.id);

    const spotDocument = await spotModel.create({
        title: spot.title,
        gps: spot.gps,
        emotion: spot.emotion,
        imageUrl: imageDownloadedUrl,
        authorId,
        destinations: spot.destinations,
    });

    return spotDocument.save();
}