import { Spot } from "./models/Spot.model";

export enum Emotion {
    GOOD = "GOOD",
    BAD = "BAD",
    DANGEROUS = "DANGEROUS",
}

export type SpotInput = Pick<Spot, "location" | "authorId" | "name" | "emotion" | "destinations"> & { authorId: string}