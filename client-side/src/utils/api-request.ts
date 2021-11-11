import { useAuthHeader } from "../pageAuth/hooks/useAuthHeader";

export const postJson = async (url: string, jsonBody: any) => {
    return fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jsonBody),
    });
}

export const postAuthJson = async (url: string, jsonBody: any) => {
    const authHeader = useAuthHeader();

    return fetch(url, {
        method: "POST",
        headers: { ...authHeader, "Content-Type": "application/json" },
        body: JSON.stringify(jsonBody),
    });
}