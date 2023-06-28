import { useCurrentUser } from "../../pageAuth/hooks/useCurrentUser";
import { requestPostAuthJson } from "../../utils/api-request";

export const useUserServices = () => {
	const user = useCurrentUser();
	
	const deleteCurrentUser = async () => {
		if(!user) throw new Error("should not happen");
		
		const { email } = user;
		const deleteUserReponse = requestPostAuthJson("api/user/delete", { email });

		return deleteUserReponse;
	};
	return { deleteCurrentUser };
};
