import { Request } from "express"
export interface RequestWithMaybeAuthInformation extends Request {
    userId?: string;
}