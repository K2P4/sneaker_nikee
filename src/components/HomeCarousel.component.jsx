/** @format */

// /** @format */

import React, { useContext, useState } from "react";
import { SneakerContext } from "../service/store/SneakerContextProvider";
import { SwiperSlide, Swiper } from "swiper/react";
import { useNavigate } from "react-router-dom";
import {
	Navigation,
	Pagination,
	Scrollbar,
	A11y,
	EffectCoverflow,
} from "swiper/modules";
import "../../node_modules/swiper/swiper-bundle.min.css";

const HomeCarouselComponent = () => {
	const { data, loading } = useContext(SneakerContext);
	const [favourite, setFavourite] = useState(false);

	const nav = useNavigate();

	return (
		<div className="">
			{loading ? (
				<h1>loading</h1>
			) : (
				<div className=" my-16  ">
					<div className="text-orange-500     font-bold text-center">
						<h1 className="text-3xl aboutFont tracking-wide">New Release </h1>

						<h1 className="text-xl   aboutFont mt-2 text-orange-600 tracking-wide">
							Products
						</h1>
					</div>

					<Swiper
						// install Swiper modules]

						className="my-10"
						modules={[Navigation, EffectCoverflow, Pagination, Scrollbar, A11y]}
						spaceBetween={30}
						effect={"coverflow"}
						slidesPerView={3}
						coverflowEffect={{
							rotate: 50,
							stretch: 0,
							depth: 100,
							modifier: 1,
							slideShadows: true,
						}}
						scrollbar={{ draggable: true }}
						onSwiper={(swiper) => console.log(swiper)}
						onSlideChange={() => console.log("slide change")}>
						{data?.map((item) => (
							<SwiperSlide key={item.id}>
								<div
									onClick={() => nav(`/detail/${item.id}`)}
									className="flex relative w-full h-[280px]  items-center    align-middle ">
									<img
										className=" w-[350px] object-cover h-[280px]  rounded-lg  "
										src={item?.images.image1}
										alt=""
									/>

									{/* <button
									onClick={toggleFav}
									className={` absolute ${
										favourite && "bg-orange-500 text-white"
									}  top-3 end-4 rounded-sm border border-gray-300 p-1`}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-6 h-6">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
										/>
									</svg>
								</button> */}
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			)}
		</div>
	);
};

export default HomeCarouselComponent;

{
	/* <div className="flex items-center overflow-x-scroll gap-5  ">
					{data.map((item) => (
						<div className=" " key={item.id}>
							<img
								className="w-[300px] object-cover h-[300px] "
								src={item.images.image2}
								alt=""
							/>
						</div>
					))}
				</div> */
}
