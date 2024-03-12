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

const ContactPage = () => {
	return (
		<div className="">
			<div className=" flex items-start   gap-44 border-b-gray-500 pb-4  border-b ">
				<div className="">
					<div className="flex flex-col ">
						<div className="flex items-center text-xl   select-none tracking-wide  font-bold  text-orange-500 gap-1">
							NIKEE
							<img
								className="w-10"
								src="https://cdn-icons-png.flaticon.com/128/1785/1785348.png"
								alt=""
							/>
						</div>
					</div>

					<div className="flex  items-center gap-5 mt-3 ">
						<a href="https://www.facebook.com/profile.php?id=100077023871140&mibextid=LQQJ4d">
							<FaFacebookF className=" bg-orange-500 hover:bg-orange-600 active:scale-95  rounded-full  w-8 h-8  p-1 text-white " />
						</a>
						<a href="https://www.instagram.com/vik83124?igsh=MWdtMmphc3hodjBucg%3D%3D&utm_source=qr">
							<FaInstagram className=" bg-orange-500 hover:bg-orange-600 active:scale-95  rounded-full  w-8 h-8  p-1 text-white " />
						</a>
						<a href="https://github.com/K2P4">
							<FaGithub className=" bg-orange-500 hover:bg-orange-600 active:scale-95  rounded-full  w-8 h-8  p-1 text-white " />
						</a>
					</div>
				</div>

				<div className="flex flex-col items-start gap-1 w-[360px] ">
					<h1 className="text-lg font-medium text-gray-700 mb-2">Contact Us</h1>
					<div className="flex flex-col items-start gap-3">
						<div className="flex items-center gap-3">
							<MdOutlineMail className=" text-gray-800 text-2xl" />
							<p className="text-md tracking-widest font-medium text-gray-700 mb-2">
								pthuya381@gmail.com
							</p>
						</div>

						<div className="flex items-center gap-3">
							<FiPhone className=" text-gray-800 text-2xl" />
							<p className="text-md tracking-widest font-medium text-gray-700 mb-2">
								+95 9968213232
							</p>
						</div>

						<div className="flex items-center gap-3">
							<LuMapPin className=" text-gray-800 text-5xl" />
							<p className="text-md tracking-wide font-medium text-gray-700 mb-2">
								No.644, Za Ghwal Ward, Eaindra 5 th Street,North Okkalpa
								Township ,Yangon
							</p>
						</div>
					</div>
				</div>

				<div className="w-[290px]">
					<h1 className="text-lg font-medium tracking-wide text-gray-700 mb-1">
						Subscribe
					</h1>

					<p className="text-md tracking-wide font-medium text-gray-700 ">
						Enter your email to get notify about our new activity
					</p>

					<div
						className="flex border-slate-500 mt-4 justify-between border  px-2   items-center  
						 rounded-md  ">
						<input
							placeholder="Email"
							className="w-[90px] text-sm tracking-wide bg-transparent  border-0 focus:ring-0  text-md  "
							type="text"
							name="email"
						/>

						<IoMdMail className="text-xl" />
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
