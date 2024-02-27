/** @format */

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { SneakerContext } from "../service/store/SneakerContextProvider";
const EmptyComponent = () => {
	const nav = useNavigate();
	const { setToggle, SetHiddenIcon } = useContext(SneakerContext);

	const handleBack = () => {
		setToggle(false);
		nav("/collections");
	};
	return (
		<div>
			<div className=" mt-20 ">
				<div className="mx-auto    select-none  flex flex-col  gap-2 items-center align-middle">
					<img
						className=" w-full  "
						src="../../public/undraw_empty_cart_co35.svg"
						alt=""
					/>
					<h5 className=" text-lg font-medium text-gray-700  ">
						There Has No Item .{" "}
						<span
							onClick={handleBack}
							className="text-orange-500 duration-300 active:scale-95 border-b-orange-400 pb-1 border-b  ">
							Buy Something
						</span>
					</h5>
				</div>

				<button
					onClick={handleBack}
					className="border duration-500 fixed top-4 end-9     active:scale-95 rounded-sm hover:bg-slate-100 ">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-7  h-7">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6 18 18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default EmptyComponent;
