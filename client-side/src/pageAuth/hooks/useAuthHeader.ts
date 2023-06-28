import { useCurrentUser } from "./useCurrentUser";

export const useAuthHeader = () => {
	const user = useCurrentUser();

	return user ? { "x-access-token": user.accessToken } : undefined;
};
