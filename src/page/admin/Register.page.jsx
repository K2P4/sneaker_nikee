/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormComponent from "../../components/Form.component";
import { ButtonComponent } from "../../components";
import { Register } from "../../service/auth.service";

const RegisterPage = () => {
	const nav = useNavigate();

	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
		confirm_password: "",
	});

	const handleSubmit = async (e) => {
		e.preventDefault();

		const res = await Register("user", formData);

		if (res) {
			nav("/");
		}
	};

	const handleInputChange = (e) => {
		setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
	};

	return (
		<div className="">
			<div className=" Center ">
				<div className=" border  p-5 rounded-md border-gray-300">
					<h1 className="text-2xl font-bold text-orange-400 ">
						Register Your Account
					</h1>

					<form className="" onSubmit={handleSubmit} action="">
						<FormComponent
							onChange={handleInputChange}
							name={"username"}
							value={formData.username}
							type={"text"}
							label={"Enter Your Username "}
						/>

						<FormComponent
							onChange={handleInputChange}
							name={"email"}
							value={formData.email}
							type={"email"}
							label={"Enter Your Email "}
							placeholder="pty@gmail.com"
						/>

						<FormComponent
							name={"password"}
							onChange={handleInputChange}
							value={formData.password}
							type={"password"}
							label={"Enter Your password "}
						/>

						<FormComponent
							name={"confirm_password"}
							onChange={handleInputChange}
							value={formData.confirm_password}
							type={"password"}
							label={"Confirm Password "}
						/>

						<ButtonComponent
							type={"submit"}
							name={"Register"}
							label={"Register"}
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default RegisterPage;
