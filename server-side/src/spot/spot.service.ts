import { Spot, spotModel } from "./models/Spot.model";
import { SpotInput } from "./spot.types";

export const createAndSaveSpot = async (spot: SpotInput, authorId: string): Promise<Spot> => {
	console.log("spot", spot);
	const spotDocument = await spotModel.create({
		name: spot.name,
		location: spot.location,
		emotion: spot.emotion,
		authorId,
		destinations: spot.destinations,
	});

	return spotDocument.save();
};