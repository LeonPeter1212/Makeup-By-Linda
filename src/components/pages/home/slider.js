import React from "react";
import Link from "next/link";
import $ from "jquery";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

const homeslider = () => {

	return (
		<div dir="ltr" className="rev-slider with-overlay fullscreenabanner">
			{/* <div
				id="rev-slider-1"
				data-version="5.4.5"
				className=""
			>
			</div> */}
			<OwlCarousel
				className="owl-theme rev_slider_wrapper fullscreenbanner-container dots-color-2 custom-dots-position"
				loop={true}
				margin={0}
				responsive={{
					0: {
						items: 1,
					},
				}}
				dots={true}
				nav={true}
				autoplay={true}
				autoplayTimeout={5000}
			>
				{/* <!--================ Slide 1 ================--> */}
				<div
					className="with-overlay d-flex justify-content-center align-items-center flex-column text-white"
					style={{
						backgroundImage: "url(/images/slide1.png)",
						backgroundSize: "cover",
						backgroundPosition: "top center",
						backgroundRepeat: "no-repeat",
						minHeight: "100vh",
						minWidth: "100vw",
					}}
				>
					<>
						{/* <!--================ Layer ================--> */}
						<div className="tp-caption tp-resizeme rev-sub-title">
							<div className="mad-pre-title">Welcome Back</div>
						</div>
						{/* <!--================ End of Layer ================--> */}
						{/* <!--================ Layer ================--> */}
						<div className="tp-caption tp-resizeme tp-layer-section-title">
							We are open! <br />
							Book your appointment today!
						</div>
						{/* <!--================ End of Layer ================--> */}
						{/* <!--================ Layer ================--> */}
						<div
							data-frames='[{"delay":600,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
							data-x="center"
							data-y="center"
							data-voffset="['170', '140', '140', '120']"
							data-width="['98%', '98%', '98%', '98%']"
							data-textAlign="['center']"
							className="tp-caption tp-resizeme"
						>
							<div className="btn-set justify-content-center">
								<Link href="#booknow">
									<a className="btn btn-huge">Book Online</a>
								</Link>
								<Link href="/makeup">
									<a className="btn btn-huge style-2">
										View services
									</a>
								</Link>
							</div>
						</div>
						{/* <!--================ End of Layer ================--> */}
					</>
				</div>
				{/* <!--================ End of Slide 1 ================--> */}
				{/* <!--================ Slide 2 ================--> */}
				<div
					className="with-overlay d-flex justify-content-center align-items-center flex-column text-white"
					style={{
						backgroundImage: "url(/images/slide2.png)",
						backgroundSize: "cover",
						backgroundPosition: "top center",
						backgroundRepeat: "no-repeat",
						minHeight: "100vh",
						minWidth: "100vw",
					}}
				>
					<>
						{/* <!--================ Layer ================--> */}
						<div className="tp-caption tp-resizeme rev-sub-title">
							<div className="mad-pre-title">
								YOU CAN THANK US LATER
							</div>
						</div>
						{/* <!--================ End of Layer ================--> */}
						{/* <!--================ Layer ================--> */}
						<div className="tp-caption tp-resizeme tp-layer-section-title">
							Your Beauty Is Our Inspiration
						</div>
						{/* <!--================ End of Layer ================--> */}
						{/* <!--================ Layer ================--> */}
						<div
							data-frames='[{"delay":600,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
							data-x="center"
							data-y="center"
							data-voffset="['170', '140', '140', '120']"
							data-width="['98%', '98%', '98%', '98%']"
							data-textAlign="['center']"
							className="tp-caption tp-resizeme"
						>
							<div className="btn-set justify-content-center">
								<Link href="#booknow">
									<a className="btn btn-huge">Book Online</a>
								</Link>
							</div>
						</div>
						{/* <!--================ End of Layer ================--> */}
					</>
				</div>
				{/* <!--================ End of Slide 2 ================--> */}
				{/* <!--================ Slide 3 ================--> */}
				<div
					className="with-overlay d-flex justify-content-center align-items-center flex-column text-white"
					style={{
						backgroundImage: "url(/images/slide3.png)",
						backgroundSize: "cover",
						backgroundPosition: "top center",
						backgroundRepeat: "no-repeat",
						minHeight: "100vh",
						minWidth: "100vw",
					}}
				>
					<>
						{/* <!--================ Layer ================--> */}
						<div className="tp-caption tp-resizeme rev-sub-title">
							<div className="mad-pre-title">
								TIME FOR CHANGES
							</div>
						</div>
						{/* <!--================ End of Layer ================--> */}
						{/* <!--================ Layer ================--> */}
						<div className="tp-caption tp-resizeme tp-layer-section-title">
							Be Your Own Kind Of Beautiful, <br /> Be Unique!
						</div>
						{/* <!--================ End of Layer ================--> */}
						{/* <!--================ Layer ================--> */}
						<div
							data-frames='[{"delay":600,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'
							data-x="center"
							data-y="center"
							data-voffset="['170', '140', '140', '120']"
							data-width="['98%', '98%', '98%', '98%']"
							data-textAlign="['center']"
							className="tp-caption tp-resizeme"
						>
							<div className="btn-set justify-content-center">
								<Link href="#">
									<a className="btn btn-huge">
										Make a change
									</a>
								</Link>
							</div>
						</div>
						{/* <!--================ End of Layer ================--> */}
					</>
				</div>
				{/* <!--================ End of Slide 3 ================--> */}
			</OwlCarousel>
		</div>
	);
};

export default homeslider;
