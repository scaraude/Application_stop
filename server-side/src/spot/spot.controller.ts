import { Request, Response } from "express";
import formidable from "formidable";
import { RequestWithMaybeAuthInformation } from "../auth/types";
import { spotModel } from "./models/Spot.model";
import { createAndSaveSpot } from "./spot.service";
import { Emotion, SpotInput } from "./spot.types";

const mapper = (key: string, value: string | string[]): Partial<SpotInput> => {
	switch(key){
	case "name": 
		return  { name: value as string };
	case "gps":
		// eslint-disable-next-line no-case-declarations
		const latLng = /(\d+\.?\d*), (\d+\.?\d*)/.exec(value as string);
		return { location: { type: "Point", coordinates: [Number(latLng?.[2]), Number(latLng?.[1])] } };
	case "emotion": 
		return { emotion: value as Emotion };
	case "destinations": 
		return { destinations: (value as string).split(",") };
	default:
		return {};
	}
}; 
const mapSpotFieldsToSpotInfo = (fields: formidable.Fields): SpotInput => {
	const spot: Partial<SpotInput> = {};
	for(const [key, value] of Object.entries(fields)){
		Object.assign(spot, mapper(key, value));
	}
	return spot as SpotInput;
};

export const createSpot = async (req: RequestWithMaybeAuthInformation, res: Response) => {
	const { userId } = req;

	if (!userId) throw new Error("Need authentification");

	const form = formidable();

	form.parse(req, async (err, fields) => {
		if (err) {
			res.writeHead(err.httpCode || 400, { "Content-Type": "text/plain" });
			res.end(String(err));
			return;
		}
		const mappedFields = mapSpotFieldsToSpotInfo(fields);
		const spot: SpotInput = {
			location: mappedFields.location,
			authorId: userId,
			name: mappedFields.name,
			emotion: mappedFields.emotion,
			destinations: mappedFields.destinations,
		};
		const savedSpot = await createAndSaveSpot(spot, userId);
	
		res.status(201).json({ message: "Nouveau spot enregistré :", spot: savedSpot });
	});
};

export const modifySpot = (req: Request, res: Response) => {
	spotModel.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
		.then((info) =>
			res.status(200).json({
				message: "Modification enregistrée !",
				nbOfModifiedFields: info.n,
			})
		)
		.catch((error) => res.status(400).json({ error }));
};

export const deleteSpot = (req: Request, res: Response) => {
	spotModel.deleteOne({ _id: req.params.id })
		.then(() => res.status(200).json({ message: "Spot supprimé !" }))
		.catch((error) => res.status(400).json({ error }));
};

export const getOneSpot = (req: Request, res: Response) => {
	spotModel.findOne({ _id: req.params.id })
		.then((spot) => res.status(200).json(spot))
		.catch((error) => res.status(404).json({ error }));
};

export const getAllSpots = (req: Request, res: Response) => {
	spotModel.find()
		.then((spots) => res.status(200).json(spots))
		.catch((error) => {
			console.log("error", error);
			res.status(400).json({ error });
		});
};

export const popUp = (req: Request, res: Response) => {
	res.render("pages/map/popup");
};
export const formSidebar = (req: Request, res: Response) => {
	res.render("pages/map/formside");
};
