/** @format */

import React from "react";

const ButtonComponent = ({ label, type, name }) => {
	return (
		<button
			type={type}
			className=" bg-orange-400  mt-5 sm:mt-7  sm:text-lg  text-sm text-white  w-full text-center active:scale-95 p-2 rounded-md hover:bg-orange-500 active:ring-2 active:ring-orange-600 "
			name={name}>
			{label}
		</button>
	);
};

export default ButtonComponent;
