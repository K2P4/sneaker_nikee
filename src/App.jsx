/** @format */

import React, { useContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
	AdminPage,
	CollectionsPage,
	DashboardPage,
	DetailPage,
	MenPage,
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
				{filterAuth ? <NavComponent /> : nav("/admin")}

				<Routes>
					<Route path="/admin" element={<AdminPage />} />
					<Route path="/search/:name" element={<SearchPage />} />

					{/* <Route path="/addtocart" element={<AddtoCartPage />} /> */}
					<Route path="/detail/:id" element={<DetailPage />} />
					<Route path="/collections" index element={<CollectionsPage />} />
					<Route path="/men" index element={<MenPage />} />
					<Route path="/women" index element={<WomenPage />} />
					{/* <Route path="/addtocart" index element={<AddtoCartPage />} /> */}
					<Route path="*" index element={<ErrorComponent />} />

					<Route path="" element={<DashboardPage />} />
				</Routes>
			</div>
		</div>
	);
};

export default App;
