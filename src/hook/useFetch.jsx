/** @format */

import React, { useEffect, useState } from "react";

const useFetch = (setFunction, arg) => {
	const [data, setData] = useState({
		data: null,
		loading: true,
		error: null,
	});

	useEffect(() => {
		(async () => {
			try {
				const data = await setFunction(arg);
				setTimeout(() => {
					setData((pre) => {
						return {
							error: null,
							loading: false,
							data: data,
						};
					});
				},2000);
			} catch (e) {
				setData((pre) => {
					return {
						error: e.message,
						loading: false,
						data: null,
					};
				});
			}
		})();
	}, []);

	return data;
};

export default useFetch;
