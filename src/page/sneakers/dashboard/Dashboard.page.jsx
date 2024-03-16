/** @format */

import React, { useContext, useEffect } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import HomeCarouselComponent from "../../../components/HomeCarousel.component";
import AboutPage from "./module/About.page";
import ContactPage from "./module/Contact.page";
import {
	DashboardLoadingComponent,
	LoadingComponent,
	PreventComponent,
} from "../../../components";

const DashboardPage = () => {
	const { data, loading } = useFetch(MenSneakerService, "men");
	const nav = useNavigate();

	// useEffect(() => {
	// 	const checkingAuth = localStorage.getItem("auth");
	// 	if (!checkingAuth) {
	// 		nav("/");
	// 	}
	// });

	return (
		<PreventComponent>
			<div className="">
				<div className="w-[85%]   h-screen  sm:my-10 mx-auto select-none ">
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
									<div className="flex w-full flex-col items-center sm:flex-row h-[200px] sm:h-[320px] sm:items-start    align-middle ">
										<img
											className="w-full h-[130px] sm:w-[45%] sm:h-[320px] object-cover   rounded-sm  "
											src={item?.images.image1}
											alt=""
										/>

										<div className=" bg-gray-100 sm:h-[320px] w-full   px-4  sm:w-[60%]">
											<div className="mt-2 ">
												<h3 className="text-orange-500 text-center sm:text-left sm:text-3xl  line-clamp-1 sm:line-clamp-none  text-xl  font-bold  ">
													{item.name}
												</h3>

												<p className=" mt-5 text-lg hidden sm:inline-flex   text-gray-600  text-justify  tracking-wide leading-7 font-medium ">
													{item.description}
												</p>

												<button className=" my-7 hidden sm:inline-flex bg-orange-500 font-medium text-white rounded-md px-6 text-center py-2 ">
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

					<div className="    w-full    sm:bg-stone-100 px-3 py-5 rounded-lg  ">
						<ContactPage />
					</div>
				</div>
			</div>
		</PreventComponent>
	);
};

export default DashboardPage;
