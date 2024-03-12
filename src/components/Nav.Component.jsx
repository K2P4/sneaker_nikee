/** @format */

import React, { useContext, useEffect, useState } from "react";
import {
	useNavigate,
	useLocation,
	Link,
	NavLink,
	Outlet,
} from "react-router-dom";
import { SneakerContext } from "../service/store/SneakerContextProvider";

const NavComponent = () => {
	const nav = useNavigate();
	const {
		data,
		cart,
		hiddenIcon,
		filterCart,
		setFilterCart,
		setToggle,
		SetHiddenIcon,
	} = useContext(SneakerContext);

	const [search, setSearch] = useState("");

	const click = () => {
		setToggle(true);
		SetHiddenIcon(true);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const filtered = data?.filter((product) =>
			product.name.toLowerCase().includes(search.toLowerCase())
		);

		setFilterCart(filtered);

		nav(`/search/${search}`);
	};

	console.log(filterCart);

	// const {
	// 	state: { AuthenticateData },
	// } = useLocation();
	// console.log(AuthenticateData);

	const handleAddToCart = () => {
		SetHiddenIcon(true);
		nav("/addtocart");
	};

	useEffect(() => {
		const data = localStorage.getItem("auth");
		if (!data) {
			nav("/admin");
		}
	}, []);

	return (
		<div>
			<div className="w-[85%]       mx-auto  ">
				<div className=" border-b border-b-gray-300  py-9  flex justify-between items-center   ">
					<ul className=" flex  items-center gap-6 align-middle">
						<li
							id="logo"
							className="text-xl   select-none tracking-wide  font-bold  text-orange-500">
							<Link to="/">
								<div className="flex items-center gap-1">
									NIKEE
									<img
										className="w-10"
										src="https://cdn-icons-png.flaticon.com/128/1785/1785348.png"
										alt=""
									/>
								</div>
							</Link>
						</li>

						<li className="text-gray-500 tracking-wide select-none active:border-b-2 transition-transform duration-200  active:border-b-orange-500  active:text-gray-900 active:font-bold  ">
							<NavLink to="/collections">Collections</NavLink>
						</li>

						<li className="text-gray-500 tracking-wide select-none active:border-b-2 transition-transform duration-200  active:border-b-orange-500  active:text-gray-900 active:font-bold  ">
							<NavLink to="/men">Men</NavLink>
						</li>

						<li className="text-gray-500 tracking-wide select-none active:border-b-2 transition-transform duration-200  active:border-b-orange-500  active:text-gray-900 active:font-bold  ">
							<NavLink to="/women">Women</NavLink>
						</li>

						<li className="text-gray-500 tracking-wide select-none active:border-b-2 transition-transform duration-200  active:border-b-orange-500  active:text-gray-900 active:font-bold  ">
							<a className=" duration-1000 " target="" href="#about">
								About
							</a>
						</li>

						<li className="text-gray-500 tracking-wide select-none active:border-b-2 transition-transform duration-200  active:border-b-orange-500  active:text-gray-900 active:font-bold  ">
							<NavLink>Contact</NavLink>
						</li>
					</ul>

					<div className="flex gap-4 select-none items-center ">
						<form
							onSubmit={handleSubmit}
							action="
						">
							<div
								className="flex border-slate-200 border  px-2   items-center  
						 rounded-md  ">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-5 m-0  h-5">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
									/>
								</svg>

								<input
									value={search}
									onChange={(e) => setSearch(e.target.value)}
									className="w-[90px] text-sm tracking-wide bg-transparent  border-0 focus:ring-0  text-md  "
									type="text"
									name="email"
								/>
							</div>
						</form>
						<div
							onClick={click}
							className="relative duration-500 active:scale-90 ">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-7 h-7">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
								/>
							</svg>

							<span className="w-4 absolute top-0 -end-1  h-4   text-center mx-auto text-xs font-semibold text-white bg-orange-500 rounded-full ">
								{cart.length}
							</span>
						</div>

						<div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="w-7 h-7">
								<path
									fillRule="evenodd"
									d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
									clipRule="evenodd"
								/>
							</svg>
						</div>
					</div>
				</div>

				<div>
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default NavComponent;
