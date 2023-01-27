import React from "react";
import Link from 'next/link'
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

const ftImages = [
	"/services/facialtreatment/1.jpg",
	"/services/facialtreatment/2.jpg",
	"/services/facialtreatment/3.jpg",
	"/services/facialtreatment/4.jpg",
];

const welcome = () => {
	return (
		<div className="mad-content no-pd">
			<div className="mad-section mad-section--stretched mad-colorizer--scheme- with-texture20">
				<div className="container">
					<div className="pb-5">
						<div className="mad-title-wrap">
							<h2 className="mad-page-title">Makeup Services</h2>
						</div>
						<OwlCarousel
							className="owl-theme mad-grid mad-gallery mad-carousel-type-2 no-loop mad-grid--cols-2 nav-color-2 owl-carousel no-dots"
							loop={false}
							margin={10}
							nav
							responsive={{
								0: {
									items: 1,
								},
								600: {
									items: 2,
								},
								1000: {
									items: 3,
								},
							}}
						>
							{/* <!-- owl item --> */}
							<div className="mad-grid-item">
								<Link href="/images/728x728_img1.jpg">
									<a
										className="mad-gallery-item"
										data-fancybox="gallery"
									>
										<img
											src="/images/728x728_img1.jpg"
											alt=""
										/>
									</a>
								</Link>
							</div>
							{/* <!-- / owl item --> */}
							{/* <!-- owl item --> */}
							<div className="mad-grid-item">
								<Link href="/images/728x728_img2.jpg">
									<a
										className="mad-gallery-item"
										data-fancybox="gallery"
									>
										<img
											src="/images/728x728_img2.jpg"
											alt=""
										/>
									</a>
								</Link>
							</div>
							{/* <!-- / owl item --> */}
							{/* <!-- owl item --> */}
							<div className="mad-grid-item">
								<Link href="/images/728x728_img3.jpg">
									<a
										className="mad-gallery-item"
										data-fancybox="gallery"
									>
										<img
											src="/images/728x728_img3.jpg"
											alt=""
										/>
									</a>
								</Link>
							</div>
							{/* <!-- / owl item --> */}
							{/* <!-- owl item --> */}
							<div className="mad-grid-item">
								<Link href="/images/728x728_img4.jpg">
									<a
										className="mad-gallery-item"
										data-fancybox="gallery"
									>
										<img
											src="/images/728x728_img4.jpg"
											alt=""
										/>
									</a>
								</Link>
							</div>
							{/* <!-- / owl item --> */}
							{/* <!-- owl item --> */}
							<div className="mad-grid-item">
								<Link href="/images/728x728_img5.jpg">
									<a
										className="mad-gallery-item"
										data-fancybox="gallery"
									>
										<img
											src="/images/728x728_img5.jpg"
											alt=""
										/>
									</a>
								</Link>
							</div>
							{/* <!-- / owl item --> */}
						</OwlCarousel>
					</div>
					<div className="pb-5">
						<div className="mad-title-wrap">
							<h2 className="mad-page-title">Hair Services</h2>
						</div>
						<OwlCarousel
							className="owl-theme mad-grid mad-gallery mad-carousel-type-2 no-loop mad-grid--cols-2 nav-color-2 owl-carousel no-dots"
							loop={false}
							margin={10}
							nav
							responsive={{
								0: {
									items: 1,
								},
								600: {
									items: 2,
								},
								1000: {
									items: 3,
								},
							}}
						>
							{/* <!-- owl item --> */}
							<div className="mad-grid-item">
								<Link href="/images/728x728_img1.jpg">
									<a
										className="mad-gallery-item"
										data-fancybox="gallery"
									>
										<img
											src="/images/728x728_img1.jpg"
											alt=""
										/>
									</a>
								</Link>
							</div>
							{/* <!-- / owl item --> */}
							{/* <!-- owl item --> */}
							<div className="mad-grid-item">
								<Link href="/images/728x728_img2.jpg">
									<a
										className="mad-gallery-item"
										data-fancybox="gallery"
									>
										<img
											src="/images/728x728_img2.jpg"
											alt=""
										/>
									</a>
								</Link>
							</div>
							{/* <!-- / owl item --> */}
							{/* <!-- owl item --> */}
							<div className="mad-grid-item">
								<Link href="/images/728x728_img3.jpg">
									<a
										className="mad-gallery-item"
										data-fancybox="gallery"
									>
										<img
											src="/images/728x728_img3.jpg"
											alt=""
										/>
									</a>
								</Link>
							</div>
							{/* <!-- / owl item --> */}
							{/* <!-- owl item --> */}
							<div className="mad-grid-item">
								<Link href="/images/728x728_img4.jpg">
									<a
										className="mad-gallery-item"
										data-fancybox="gallery"
									>
										<img
											src="/images/728x728_img4.jpg"
											alt=""
										/>
									</a>
								</Link>
							</div>
							{/* <!-- / owl item --> */}
							{/* <!-- owl item --> */}
							<div className="mad-grid-item">
								<Link href="/images/728x728_img5.jpg">
									<a
										className="mad-gallery-item"
										data-fancybox="gallery"
									>
										<img
											src="/images/728x728_img5.jpg"
											alt=""
										/>
									</a>
								</Link>
							</div>
							{/* <!-- / owl item --> */}
						</OwlCarousel>
					</div>
					<div className="pb-0">
						<div className="mad-title-wrap">
							<h2 className="mad-page-title">
								Facial Treatment Services
							</h2>
						</div>
						<OwlCarousel
							className="owl-theme mad-grid mad-gallery mad-carousel-type-2 no-loop mad-grid--cols-2 nav-color-2 owl-carousel dots-color-2 custom-dots-position"
							loop={false}
							margin={10}
							nav
							responsive={{
								0: {
									items: 1,
								},
								600: {
									items: 2,
								},
								1000: {
									items: 3,
								},
							}}
						>
							{ftImages?.map((el) => (
								<div className="mad-grid-item">
									<Link href={el}>
										<a
											className="mad-gallery-item block"
											data-fancybox="gallery"
											style={{
												backgroundImage: `url(${el})`,
												backgroundRepeat: "no-repeat",
												backgroundPosition: "center",
												backgroundSize: "cover",
												minHeight: "400px",
											}}
										></a>
									</Link>
								</div>
							))}
						</OwlCarousel>
					</div>
				</div>
			</div>
		</div>
	);
};

export default welcome;
