/** @format */

import React, { useContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

import {
	AboutPage,
	AdminPage,
	CollectionsPage,
	DashboardPage,
	DetailPage,
	MenPage,
	RegisterPage,
	SearchPage,
	WomenPage,
} from "./page";
import { ErrorComponent, NavComponent } from "./components";
import { SneakerContext } from "./service/store/SneakerContextProvider";
import AddtoCartPage from "./page/sneakers/dashboard/module/AddtoCart.page";
import "../node_modules/animate.css/animate.min.css";

const App = () => {
	const filterAuth = localStorage.getItem("auth");
	const { toggle } = useContext(SneakerContext);
	const nav = useNavigate();

	return (
		<div className="  ">
			{toggle && <AddtoCartPage />}
			<div className="w-full h-screen mx-auto ">
				<Routes>
					<Route path="/" element={<AdminPage />} />
					<Route path="/register" element={<RegisterPage />} />

					<Route path="*" index element={<ErrorComponent />} />

					<Route path="/dashboard" element={<NavComponent />}>
						<Route index element={<DashboardPage />} />
						
						<Route path="men" index element={<MenPage />} />
						<Route path="women" index element={<WomenPage />} />

						<Route path="collections" index element={<CollectionsPage />} />
						<Route path="detail/:id" element={<DetailPage />} />
						<Route path="search/:name" element={<SearchPage />} />
					</Route>
				</Routes>
			</div>
		</div>
	);
};

export default App;
