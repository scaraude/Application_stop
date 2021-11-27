import { Spot } from "./models/Spot.model";

export enum Emotion {
    GOOD = "GOOD",
    BAD = "BAD",
    DANGEROUS = "DANGEROUS",
}

export type SpotInput = Omit<Spot, "author" | "imageUrl"> & { authorId: string, image: File }