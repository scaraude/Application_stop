import TextField from "@material-ui/core/TextField";
import LockIcon from "@material-ui/icons/Lock";
import PersonIcon from "@material-ui/icons/Person";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthServices } from "./hooks/useAuthServices";
import { useHistory } from "react-router-dom";
import {
	Container,
	StyledForm,
	Frame,
	Label,
	Title,
	InputControl,
} from "./styles/styledComponents";
import { paperStyle, inputStyle, AuthCard } from "./styles/style";
import PasswordFieldProps from "./components/PasswordField";
import { useNotification } from "../hooks/useNotification";

type FieldErrors = {
  username?: string;
  password?: string;
}
const Login = () => {
	const [username, setUsername] = useState<string | undefined>(undefined);
	const [password, setPassword] = useState<string | undefined>(undefined);
	const [errors, setErrors] = useState<FieldErrors>({ username: undefined, password: undefined });
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const { isUserLogged, login } = useAuthServices();
	const notification = useNotification();
	const history = useHistory();

	useEffect(() => {
		if (isUserLogged) {
			history.push("/");
			notification.info("You are already connected !");
		}
	}, []);

	const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log("salut");
		const validationErrors: FieldErrors = {};

		setErrors({});
		setIsLoading(true);

		if (!username) {
			Object.assign(validationErrors, { username: "Username is required" });
		}
		if (!password) {
			Object.assign(validationErrors, { password: "Password is required" });
		}

		if (Object.keys(validationErrors).length === 0 && username && password) {
			try {
				console.log("here");
				await login(username, password);
				history.push("/profile");
				window.location.reload();
			} catch (error: any) {
				const resMessage =
          error?.response &&
          error?.response.data &&
          error?.response.data.message ||
          error?.message ||
          error?.toString();

				setIsLoading(false);
				setErrors(resMessage);
			}
		} else {
			setErrors(validationErrors);
			setIsLoading(false);
		}
	};

	return (
		<Container>
			<Frame>
				<Label>
          Pas encore membre ? <Link to="/signup">Rejoins-nous !</Link>
				</Label>
				<AuthCard style={paperStyle} elevation={3}>
					<StyledForm autoComplete="off" id="login-form" onSubmit={handleLogin}>
						<Title>Connexion !</Title>
						<InputControl>
							<PersonIcon />
							<TextField
								style={inputStyle}
								id="username"
								name="username"
								label="Username"
								value={username ?? ""}
								onChange={(event) => setUsername(event.target.value)}
								error={Boolean(errors["username"])}
								helperText={errors["username"]}
							/>
						</InputControl>
						<InputControl>
							<LockIcon />
							<PasswordFieldProps
								style={inputStyle}
								name="password"
								value={password}
								onChange={(event) => setPassword(event.target.value)}
								error={Boolean(errors["password"])}
								helperText={errors["password"]}
							/>
						</InputControl>
						<InputControl>
							<Button
								type="submit"
								style={{ ...inputStyle, marginTop: "2rem" }}
								variant="contained"
							>
								{isLoading ? <CircularProgress /> : "Connexion !"}
							</Button>
						</InputControl>
					</StyledForm>
				</AuthCard>
			</Frame>
		</Container>
	);
};

export default Login;
