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

export const requestPostAuthFormData = async (url: string, data: any) => {
	const authHeader = useAuthHeader();
	const formData  = new FormData();

	for(const name in data) {
		formData.append(name, data[name]);
	}
	return fetch(url, {
		method: "POST",
		headers: { ...authHeader },
		body: formData,
	});
};

export const requestGetJson = async (url: string) => {
	const response = await fetch(url);
	return response.json();
};