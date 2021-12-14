import { useAuthHeader } from "../pageAuth/hooks/useAuthHeader";

export const requestPostJson = async (url: string, jsonBody: any) => {
	return fetch(url, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(jsonBody),
	});
};

export const requestPostAuthJson = async (url: string, jsonBody: any) => {
	const authHeader = useAuthHeader();

	return fetch(url, {
		method: "POST",
		headers: { ...authHeader, "Content-Type": "application/json" },
		body: JSON.stringify(jsonBody),
	});
};

export const requestPostAuthFormData = async (url: string, formData: any) => {
	const authHeader = useAuthHeader();

	return fetch(url, {
		method: "POST",
		headers: { ...authHeader, "Content-Type": "multipart/form-data" },
		body: formData,
	});
};

export const requestGetJson = async (url: string) => {
	const response = await fetch(url);
	return response.json();
};