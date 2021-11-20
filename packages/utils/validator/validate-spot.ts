import validator from "validator";

export const validateTitle = (title: string): boolean => {
    return validator.isAlpha(title) && validator.isLength(title, { min: 3, max: 22 })
}