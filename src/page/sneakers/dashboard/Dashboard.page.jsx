/** @format */

import React, { useContext } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "../../../../node_modules/swiper/swiper-bundle.min.css";
import {
	Navigation,
	EffectFade,
	Pagination,
	Autoplay,
	A11y,
} from "swiper/modules";
import useFetch from "../../../hook/useFetch";
import { MenSneakerService } from "../../../service/men.service";
import { Link } from "react-router-dom";
import HomeCarouselComponent from "../../../components/HomeCarousel.component";
import AboutPage from "./module/About.page";
import ContactPage from "./module/Contact.page";
import {
	DashboardLoadingComponent,
	LoadingComponent,
} from "../../../components";

const DashboardPage = () => {
	const { data, loading } = useFetch(MenSneakerService, "men");

	return (
		<div className="">
			<div className="w-[85%]   h-screen  my-10 mx-auto select-none ">
				{loading ? (
					<DashboardLoadingComponent />
				) : (
					<Swiper
						className="  animate__fadeIn animate__animated  text-orange-600  "
						// install Swiper modules
						modules={[Navigation, Autoplay, EffectFade, Pagination, A11y]}
						spaceBetween={30}
						centeredSlides={true}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						slidesPerView={1}
						navigation
						pagination={{ clickable: true }}
						effect="fade"
						onSwiper={(swiper) => console.log(swiper)}
						onSlideChange={() => console.log("slide change")}>
						{data?.map((item) => (
							<SwiperSlide key={item.id}>
								<div className="flex w-full h-[320px] items-start    align-middle ">
									<img
										className="w-[45%] object-cover h-[320px]  rounded-sm  "
										src={item?.images.image1}
										alt=""
									/>

									<div className=" bg-gray-100 h-[320px]  px-4  w-[60%]">
										<div className="mt-2 ">
											<h3 className="text-orange-500 text-3xl   font-bold  ">
												{item.name}
											</h3>

											<p className=" mt-5 text-lg  text-gray-600  text-justify  tracking-wide leading-7 font-medium ">
												{item.description}
											</p>

											<button className=" my-7 bg-orange-500 font-medium text-white rounded-md px-6 text-center py-2 ">
												<Link to={"/collections"}>SHOP NOW</Link>
											</button>
										</div>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				)}

				<div className="">
					<HomeCarouselComponent />
				</div>

				<div className="  ">
					<AboutPage />
				</div>

				<div className="  w-full   bg-stone-200 px-3 py-5 rounded-lg  ">
					<ContactPage />
				</div>
			</div>
		</div>
	);
};

export default DashboardPage;
