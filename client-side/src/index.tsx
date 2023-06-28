import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./theme/GlobalStyle";
import { SnackbarProvider } from "notistack";

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<SnackbarProvider maxSnack={3}>
			<App />
		</SnackbarProvider>
	</React.StrictMode>,
	document.getElementById("root")
);