import { SnackbarMessage, useSnackbar } from "notistack";

export const useNotification = () => {
	const { enqueueSnackbar } = useSnackbar();

	const success = (message: SnackbarMessage) => {
		enqueueSnackbar(message, { variant: "success" });
	};
	const error = (message: SnackbarMessage) => {
		enqueueSnackbar(message, { variant: "error" });
	};
	const warning = (message: SnackbarMessage) => {
		enqueueSnackbar(message, { variant: "warning" });
	};
	const info = (message: SnackbarMessage) => {
		enqueueSnackbar(message, { variant: "info" });
	};
	const add = (message: SnackbarMessage) => {
		enqueueSnackbar(message, { variant: "default" });
	};

	return {
		success,
		error,
		warning,
		info,
		add,
	};
};