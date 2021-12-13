import { useCurrentUser } from "../../pageAuth/hooks/useCurrentUser";
import { requestPostAuthJson } from "../../utils/api-request";

export const useUserServices = () => {
	const { email } = useCurrentUser();

	const deleteCurrentUser = async () => {
		const deleteUserReponse = requestPostAuthJson("api/user/delete", { email });

		return deleteUserReponse;
	};
	return { deleteCurrentUser };
};
