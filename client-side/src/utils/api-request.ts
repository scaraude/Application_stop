
export const postJson = async (url: string, jsonBody: any) => {
    return fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jsonBody),
    });
}