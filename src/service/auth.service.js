/** @format */

import React from "react";
import { sneakerApi } from "./baseUrl";

export const Login = async (arg, form) => {
	try {
		const { data } = await sneakerApi.get(arg, form);
		const finder = data.find((item) => item.email == form.email);

		if (!finder) {
			window.alert("Some Thing Wrong Try Again !");
		}

		const finderPassword = finder.password == form.password;

		if (!finderPassword) {
			window.alert("Password Incorrect");
			throw new Error("Password Incorrect");
		}

		return finder;
	} catch (e) {
		throw new Error(e.message);
	}
};

export const Register = async (arg, formData) => {
	try {
		const res = await sneakerApi.post(arg, formData);
		console.log(res);
		return res;
	} catch (e) {
		throw new Error(e.message);
	}
};
