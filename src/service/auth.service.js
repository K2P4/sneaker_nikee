/** @format */

import React , { useContext } from "react";
import { sneakerApi } from "./baseUrl";
import { SneakerContext } from "./store/SneakerContextProvider";

export const Auth = async (arg, form) => {
	
	
	try {
		
		const { data } = await sneakerApi.get(arg);
		const finder = data.find((item) => item.email == form.email);

		if (!finder) {
			throw new Error("Wrong Email");
		}

		const finderPassword = finder.password == form.password;

		if (!finderPassword) {
			window.alert("Password Incorrect")
			throw new Error("Password Incorrect");
		}

		return finder;
	} catch (e) {
		throw new Error(e.message);
	}
};
