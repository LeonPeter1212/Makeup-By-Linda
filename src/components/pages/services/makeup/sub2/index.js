import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

const index = ({ title = "Subcategory Title Here", desc, lasts, images }) => {
	return (
		<div className="dashed-div">
			<div className="container">
				<div className="mad-section mad-section-4rem mad-section--stretched mad-text-medium content-element-6">
					<div className="detailssec">
						<h4 className="mad-widget-title">{title}</h4>
						<div className="content-element-4 mb-5">
							<p>{desc}</p>
						</div>
					</div>

					<div className="mad-entities type-4 style-2">
						<div className="row my-2">
							<div className="col-md-6">
								<div className="gallerysec d-flex justify-content-center">
									<OwlCarousel
										className="owl-theme mad-grid mad-grid--cols-2 owl-carousel no-nav dots-center dots-color-1 owl-loaded owl-drag"
										loop={true}
										margin={10}
										nav
										autoplay={true}
										navSpeed={4000}
										responsive={{
											0: {
												items: 1,
											},
										}}
									>
										{images ? (
											images?.map((el) => (
												<div className="mad-grid-item">
													<img
														style={{
															width: "600px",
														}}
														src={el}
														className="m-auto"
														data-fancybox="gallery"
													/>
													{/* <a
														className="mad-gallery-item block"
														href={el}
														style={{
															backgroundImage: `url(${el})`,
															backgroundRepeat:
																"no-repeat",
															backgroundPosition:
																"center",
															backgroundSize:
																"contain",
															minHeight: "400px",
															display: "block",
														}}
													></a> */}
												</div>
											))
										) : (
											<>
												<img
													style={{ width: "600px" }}
													slot="first"
													src="/imgs/s1.png"
													className="m-auto"
												/>
												<img
													style={{ width: "600px" }}
													slot="second"
													src="/imgs/s2.png"
													className="m-auto"
												/>
											</>
										)}
									</OwlCarousel>
								</div>
							</div>
							{lasts ? (
								<div className="col-md-6 d-flex justify-content-center align-items-center">
									<div className="mad-entity-content2 p-5 flex-grow-1">
										<div className="content-element-6">
											<h5 className="pricingtitle">
												<span>Lifespan</span>
											</h5>
										</div>
										<div className="content-element-6">
											<ul className="mad-services">
												<li className="mad-services-item col-lg-12 m-0">
													<div className="mad-service-header align-items-start">
														<div className="font-weight-light mad-service-header-name">
															Lasts:
														</div>
														<div className="mad-service-price">
															{lasts}
														</div>
													</div>
													{/* <p>
												Ut tellus dolor, dapibus eget, elementum
												vel, cursus eleifend, elit. Aenean
												auctor wisi et. Aliquam erat volutpat.
											</p> */}
												</li>
											</ul>
										</div>
										<a
											class="btn"
											href="/services/facial#booknow"
										>
											Book Now
										</a>
									</div>
								</div>
							) : null}
						</div>
					</div>
					{/* <button className="btn">book an appointment</button> */}
				</div>
			</div>
		</div>
	);
};

export default index;
