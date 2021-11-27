import { Schema, Document } from "mongoose";

export interface GeoApiCity extends Document {
    nom: string,
    centre: { type: string, coordinates: number[] },
    codesPostaux: string[],
    code: string,
    departement: { code: string, nom: string }
}

export const GeoCitySchema = new Schema<GeoApiCity>({
    nom: String,
    centre: { type: String, coordinates: [Number] },
    codesPostaux: [String],
    code: String,
    departement: { code: String, nom: String }
});