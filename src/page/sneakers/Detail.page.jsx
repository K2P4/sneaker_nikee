/** @format */

import React, { useContext, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import useFetch from "../../hook/useFetch";
import { sneakerDataService } from "../../service/sneakerdata.service";
import { SneakerContext } from "../../service/store/SneakerContextProvider";
import { FaPlus, FaMinus } from "react-icons/fa";

import { LoadingComponent } from "../../components";

const DetailPage = () => {
	const nav = useNavigate();
	const { id } = useParams();
	const { addCart, cart } = useContext(SneakerContext);
	const [added, setAdded] = useState(false);
	const [number, setNumber] = useState(1);

	const toggleAdd = () => {
		setNumber(number + 1);
	};

	const toggleMinus = () => {
		setNumber(number - 1);
	};

	const handleBack = () => {
		nav(-1);
	};

	const { data, loading, error } = useFetch(
		sneakerDataService,
		`sneakers/${id}`
	);

	const toggleCart = () => {
		const newCart = {
			id: data.id,
			quantity: number,
			name: data.name,
			image: data.images.image1,
			price: productPrice,
			discount: productDisprice,
		};
		addCart(newCart);
		setAdded(!added);
	};

	//discount price
	const percentagePrice = parseInt(data?.discount) / 100;

	const discountPrice = data?.price * percentagePrice;
	const productPrice = data?.price * number;
	const productDisprice = discountPrice * number;

	return (
		<div>
			{loading && <LoadingComponent />}
			{data && (
				<div className="w-[85%]  select-none mt-8  flex   gap-10   mx-auto  ">
					<div className="w-[45%] flex flex-wrap ">
						<img
							className="w-full hover:border-orange-500 border-2 hover:rotate-1  hover:duration-500 transition-transform rounded-lg object-cover h-[300px]"
							src={data?.images?.image1}
							alt=""
						/>

						<div className="flex gap-7 my-4">
							<img
								className=" hover:border-orange-500 border-2 hover:rotate-2 hover:duration-500 transition-transform   w-[180px] h-[100px] rounded-lg shadow-sm object-cover "
								src={data?.images?.image1}
								alt=""
							/>
							<img
								className=" hover:border-orange-500 border-2 hover:rotate-2 hover:duration-500 transition-transform   w-[180px] h-[100px] rounded-lg shadow-sm object-cover "
								src={data?.images?.image2}
								alt=""
							/>
							<img
								className="w-[180px] hover:border-orange-500 border-2 hover:duration-500 transition-transform  hover:rotate-2  h-[100px] rounded-lg shadow-sm object-cover "
								src={data?.images?.image3}
								alt=""
							/>
							<img
								className="w-[180px] hover:border-orange-500 border-2 hover:duration-500 transition-transform  hover:rotate-2   h-[100px] rounded-lg shadow-sm object-cover "
								src={data?.images?.image4}
								alt=""
							/>
						</div>
					</div>

					<div className="w-[60%] ">
						<div>
							<div className="flex items-center justify-between ">
								<h3 className="text-3xl font-bold text-orange-500 ">
									{data.name}
								</h3>
								<button
									onClick={handleBack}
									className="flex gap-1   font-semibold items-center bg-orange-500  hover:bg-orange-400 active:scale-90 duration-500 transition-transform  py-2 px-3 rounded-md  ">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-5 h-4">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
										/>
									</svg>

									<p className="tracking-wide">Back</p>
								</button>
							</div>
							<h4 className=" my-3 text-xl  text-gray-800  font-medium tracking-wide  ">
								{data?.title}
							</h4>
							<p className="tracking-wide  text-justify  text-md font-medium mt-7  text-gray-400 ">
								{data?.description}
							</p>
						</div>

						<div className=" flex items-center gap-7 mt-5  ">
							{data.discount ? (
								<p className="tracking-wide  font-bold text-2xl text-gray-600">
									${productDisprice.toFixed(2)}
								</p>
							) : (
								<p className="tracking-wide  font-bold text-2xl text-gray-600">
									${productPrice}
								</p>
							)}

							{data?.discount && (
								<span className="bg-orange-200   text-orange-500 text-xs font-bold me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-orange-300 border border-orange-300">
									{data.discount}
								</span>
							)}
						</div>

						{/* discountPrice */}
						{data.discount && (
							<p className=" text-gray-400 text-md font-medium mt-4  line-through  ">
								${data.price.toFixed(2)}
							</p>
						)}

						<div className="flex items-center   gap-10">
							{/* plus minus toggle*/}

							<div className="select-none bg-slate-100       my-5 w-[100px]      rounded-md ">
								<div className="px-1 py-2 items-center gap-7 flex align-middle ">
									<FaMinus
										onClick={() => number > 1 && setNumber(number - 1)}
										className=" text-sm active:scale-90 duration-300  text-orange-500"
									/>

									<p className=" font-medium  text-md  ">{number}</p>
									<FaPlus
										onClick={() => number >= 0 && setNumber(number + 1)}
										className=" text-sm active:scale-90 duration-300  text-orange-500 "
									/>
								</div>
							</div>

							<button
								disabled={added}
								onClick={toggleCart}
								className=" bg-orange-500  hover:bg-orange-600 active:scale-90 duration-500 transition-transform  py-2 px-11 rounded-lg  ">
								<div className="flex items-center  mx-auto  font-semibold  gap-2 text-white ">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-5 h-5">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
										/>
									</svg>
									<p className="tracking-wide duration-500 transition-transform ">
										{added ? "Added" : "Add To Cart"}
									</p>
								</div>
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default DetailPage;
