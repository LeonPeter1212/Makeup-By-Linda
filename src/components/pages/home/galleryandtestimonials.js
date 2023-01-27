import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

const gallery = () => {
	return (
		<div className="mad-section no-pt mad-section--stretched mad-colorizer--scheme-color-3 mad-colorizer--scheme-light with-texture15">
			<div
				className="mad-colorizer-bg-color"
				style={{ left: "-64px", right: "-64px" }}
			></div>
			<div className="content-element-main">
				<div className="with-half-bg">
					<div className="mad-texture-holder">
						<span className="mad-img-texture6 bg-move"></span>
					</div>
					<div className="container">
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
									items: 3,
								},
								1000: {
									items: 4,
								},
							}}
						>
							{/* <!-- owl item --> */}
							<div className="mad-grid-item">
								<a
									className="mad-gallery-item"
									href="/images/728x728_img1.jpg"
									data-fancybox="services"
								>
									<img src="/images/728x728_img1.jpg" />
								</a>
								{/* <Link href="portfolio_single_img.html">
								</Link> */}
							</div>
							{/* <!-- / owl item --> */}
							{/* <!-- owl item --> */}
							<div className="mad-grid-item">
								<a
									className="mad-gallery-item"
									href="/images/728x728_img2.jpg"
									data-fancybox="services"
								>
									<img src="/images/728x728_img2.jpg" />
								</a>
								{/* <Link href="portfolio_single_img.html">
								</Link> */}
							</div>
							{/* <!-- / owl item --> */}
							{/* <!-- owl item --> */}
							<div className="mad-grid-item">
								<a
									className="mad-gallery-item"
									href="/images/728x728_img3.jpg"
									data-fancybox="services"
								>
									<img src="/images/728x728_img3.jpg" />
								</a>
								{/* <Link href="portfolio_single_img.html">
								</Link> */}
							</div>
							{/* <!-- / owl item --> */}
							{/* <!-- owl item --> */}
							<div className="mad-grid-item">
								<a
									className="mad-gallery-item"
									href="/images/728x728_img4.jpg"
									data-fancybox="services"
								>
									<img src="/images/728x728_img4.jpg" />
								</a>
								{/* <Link href="portfolio_single_img.html">
								</Link> */}
							</div>
							{/* <!-- / owl item --> */}
							{/* <!-- owl item --> */}
							<div className="mad-grid-item">
								<a
									className="mad-gallery-item"
									href="/images/728x728_img5.jpg"
									data-fancybox="services"
								>
									<img src="/images/728x728_img5.jpg" />
								</a>
								{/* <Link href="portfolio_single_img.html">
								</Link> */}
							</div>
							{/* <!-- / owl item --> */}
						</OwlCarousel>
					</div>
				</div>
			</div>
			<div className="row justify-content-evenly">
				<div className="col-xxl-3 col-lg-4">
					<div className="mad-pre-title">what others say</div>
					<h2 className="mad-title">Testimonials</h2>
				</div>
				<div className="col-xxl-6 col-lg-8">
					{/* <!--================ Testimonials ================--> */}
					<div className="mad-testimonials style-2">
						<OwlCarousel
							className="owl-theme mad-grid mad-grid--cols-1 owl-carousel no-nav dots-color-2"
							loop={true}
							margin={10}
							responsive={{
								0: {
									items: 1,
								},
							}}
						>
							{/* <!-- owl item --> */}
							<div className="mad-grid-item">
								<div className="mad-testimonial">
									<div className="mad-testimonial-info">
										<blockquote>
											<p>
												"I love my regular visits to get
												my makeup done, it's the
												highlight of my week. You have a
												rare place where you get treated
												like family and feel such love
												and care."
											</p>
										</blockquote>
									</div>
									<div className="mad-author">
										<div className="mad-author-info">
											<span className="mad-author-name">
												Nicole Mungai, NA, KENYA
											</span>
										</div>
									</div>
								</div>
							</div>
							{/* <!-- / owl item --> */}
							{/* <!-- owl item --> */}
							<div className="mad-grid-item">
								<div className="mad-testimonial">
									<div className="mad-testimonial-info">
										<blockquote>
											<p>
												"I’ve been seeing Linda for 4
												years now – great service and
												most importantly, I always walk
												out with fabulous hair and
												makeup."
											</p>
										</blockquote>
									</div>
									<div className="mad-author">
										<div className="mad-author-info">
											<span className="mad-author-name">
												Grace Musau, NA, KENYA
											</span>
										</div>
									</div>
								</div>
							</div>
							{/* <!-- / owl item --> */}
							{/* <!-- owl item --> */}
							<div className="mad-grid-item">
								<div className="mad-testimonial">
									<div className="mad-testimonial-info">
										<blockquote>
											<p>
												"I can only say good things
												about Linda, she is a 
												highly professional makeup artist, who
												get it right every time. I find
												myself looking forward to seeing
												her each month!"
											</p>
										</blockquote>
									</div>
									<div className="mad-author">
										<div className="mad-author-info">
											<span className="mad-author-name">
												Brenda Jepchirchir, NA, KENYA
											</span>
										</div>
									</div>
								</div>
							</div>
							{/* <!-- / owl item --> */}
						</OwlCarousel>
					</div>
					{/* <!--================ End of Testimonials ================--> */}
				</div>
			</div>
		</div>
	);
};

export default gallery;
