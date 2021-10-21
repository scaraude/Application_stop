import { SpotModel } from "./Spot.model";
import { Request, Response } from "express";

export const createSpot = async (req: Request, res: Response) => {
  const spot = req.body;
  const spotDocument = await SpotModel.create(spot);
  const savedSpot = await spotDocument.save();
  res.status(201).json({ message: "Nouveau spot enregistré :", spot: savedSpot });
};

export const modifySpot = (req: Request, res: Response) => {
  SpotModel.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then((info) =>
      res.status(200).json({
        message: "Modification enregistrée !",
        nbOfModifiedFields: info.n,
      })
    )
    .catch((error) => res.status(400).json({ error }));
};

export const deleteSpot = (req: Request, res: Response) => {
  SpotModel.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Spot supprimé !" }))
    .catch((error) => res.status(400).json({ error }));
};

export const getOneSpot = (req: Request, res: Response) => {
  SpotModel.findOne({ _id: req.params.id })
    .then((spot) => res.status(200).json(spot))
    .catch((error) => res.status(404).json({ error }));
};

export const getAllSpots = (req: Request, res: Response) => {
  SpotModel.find()
    .then((spots) => res.status(200).json(spots))
    .catch((error) => res.status(400).json({ error }));
};

export const popUp = (req: Request, res: Response) => {
  res.render("pages/map/popup");
};
export const formSidebar = (req: Request, res: Response) => {
  res.render("pages/map/formside");
};
