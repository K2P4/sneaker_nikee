/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaGithub, FaInstagram } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { LuMapPin } from "react-icons/lu";
import { IoMdMail } from "react-icons/io";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";

const ContactPage = () => {
	return (
		<div className="">
			<div className=" flex items-start  flex-col sm:flex-row  gap-5   border-b-gray-500 pb-4  border-b ">
				<div className="hidden w-full sm:w-[20%] sm:flex sm:me-20 sm:flex-col">
					<div className=" flex ">
						<div className="flex items-center text-xl    select-none tracking-wide  font-bold  text-orange-500 gap-1">
							NIKEE
							<img
								className="w-10"
								src="https://cdn-icons-png.flaticon.com/128/1785/1785348.png"
								alt=""
							/>
						</div>
					</div>

					<div className="flex  items-center sm:gap-5 mt-3 ">
						<a href="https://www.facebook.com/profile.php?id=100077023871140&mibextid=LQQJ4d">
							<FaFacebookF className=" bg-orange-500 hover:bg-orange-600 active:scale-95  rounded-full sm:w-8 sm:h-8  p-1 text-white " />
						</a>
						<a href="https://www.instagram.com/vik83124?igsh=MWdtMmphc3hodjBucg%3D%3D&utm_source=qr">
							<FaInstagram className=" bg-orange-500 hover:bg-orange-600 active:scale-95  rounded-full sm:w-8 sm:h-8  p-1 text-white " />
						</a>
						<a href="https://github.com/K2P4">
							<FaGithub className=" bg-orange-500 hover:bg-orange-600 active:scale-95  rounded-full sm:w-8 sm:h-8  p-1 text-white " />
						</a>
					</div>
				</div>

				<div className="flex w-full flex-col items-start   sm:w-[50%] border-b-gray-600 border-b  sm:border-0 pb-2 sm:pb-0  ">
					<h1 className="sm:text-lg text-xl  font-bold text-gray-700 mb-2">
						Contact Us
					</h1>
					<div className="flex flex-col items-start gap-3">
						<div className="flex items-center gap-5">
							<MdOutlineMail className=" text-gray-800  text-2xl" />
							<p className="sm:text-md text-xl tracking-wide font-medium text-gray-700 mb-2">
								pthuya381@gmail.com
							</p>
						</div>

						<div className="flex items-center gap-5">
							<FiPhone className=" text-gray-800 text-2xl" />
							<p className="sm:text-md text-xl tracking-wide font-medium text-gray-700 mb-2">
								+95 9968213232
							</p>
						</div>

						<div className="flex items-center gap-5">
							<LuMapPin className=" text-gray-800 sm:text-5xl text-7xl" />
							<p className=" text-md    tracking-wide font-medium text-gray-700 mb-2">
								No.644, Za Ghwal Ward, Eaindra 5 th Street,North Okkalpa
								Township ,Yangon
							</p>
						</div>
					</div>
				</div>

				<div className="">
					<h1 className="text-xl sm:text-lg  font-bold tracking-wide text-gray-700 mb-1">
						Subscribe
					</h1>

					<p className="text-md mt-2 sm:mt-0 tracking-wide font-medium text-gray-700 ">
						Enter your email to get notify about our new activity
					</p>

					<div
						className="flex w-[90%] border-slate-500 mt-4 justify-between border  px-2   items-center  
						 rounded-md  ">
						<input
							placeholder="Email"
							className="sm:w-[90px]  text-sm tracking-wide bg-transparent  border-0 focus:ring-0  text-md  "
							type="text"
							name="email"
						/>

						<IoMdMail className="text-xl" />
					</div>

					<button className=" hidden  sm:flex align-middle  items-center gap-2  font-medium bg-orange-500 rounded-md mt-3 active:scale-95 text-white px-3 py-2">
						Send Here
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-5 h-5">
							<path
								fillRule="evenodd"
								d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
								clipRule="evenodd"
							/>
						</svg>
					</button>
				</div>
				<div className="flex  sm:hidden flex-col space-y-2 items-center justify-center mx-auto ">
					<div
						onClick={() => nav("/dashboard")}
						className="flex  items-center text-xl    select-none tracking-wide  font-bold  text-orange-500 gap-1">
						NIKEE
						<img
							className="w-10"
							src="https://cdn-icons-png.flaticon.com/128/1785/1785348.png"
							alt=""
						/>
					</div>

					<div className="flex  items-center gap-8 sm:gap-5 sm:mt-3 ">
						<a href="https://www.facebook.com/profile.php?id=100077023871140&mibextid=LQQJ4d">
							<FaFacebookF className=" bg-orange-500 hover:bg-orange-600 active:scale-95  rounded-full w-6 h-6  sm:w-8 sm:h-8  p-1 text-white " />
						</a>
						<a href="https://www.instagram.com/vik83124?igsh=MWdtMmphc3hodjBucg%3D%3D&utm_source=qr">
							<FaInstagram className=" bg-orange-500 hover:bg-orange-600 active:scale-95  rounded-full w-6 h-6  sm:w-8 sm:h-8  p-1 text-white " />
						</a>
						<a href="https://github.com/K2P4">
							<FaGithub className=" bg-orange-500 hover:bg-orange-600 active:scale-95  rounded-full w-6 h-6  sm:w-8 sm:h-8  p-1 text-white " />
						</a>

						<a href="https://github.com/K2P4">
							<CiTwitter className=" bg-orange-500 hover:bg-orange-600 active:scale-95  rounded-full w-6 h-6  sm:w-8 sm:h-8  p-1 text-white " />
						</a>
					</div>
				</div>
			</div>

			<div className="  fixed bottom-2  left-[50%]  text-center ">
				<a href="#logo">
					<FaArrowAltCircleUp className="text-2xl text-orange-600 text-center mx-auto" />
				</a>
			</div>
		</div>
	);
};

export default ContactPage;
