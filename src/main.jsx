/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import SneakerContextProvider from "./service/store/SneakerContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<SneakerContextProvider>
		<Router>
			<App />
		</Router>
	</SneakerContextProvider>
);
