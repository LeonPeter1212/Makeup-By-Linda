import React from 'react'
import Link from "next/link";

const services = () => {
    return (
		<div className="mad-section pt-size-2 mad-section--stretched mad-colorizer--scheme-">
			<div className="row">
				<div className="col-xl-3">
					<div className="mad-pre-title">what we do</div>
					<h2 className="mad-title">
						Services That <br />
						We Offer
					</h2>
				</div>
				<div className="col-xl-9">
					{/* <!--================ Icon Boxes ================--> */}
					<div className="mad-icon-boxes item-col-3">
						<div className="mad-col">
							{/* <!--================ Icon Box ================--> */}
							<article className="mad-icon-box">
								<i className="mad-icon-box-icon">
									<img
										className="svg"
										src="legasy_icons_svg/color.svg"
										alt=""
									/>
								</i>
								<div className="mad-icon-box-content">
									<h6 className="mad-icon-box-title">
										Makeup Services
									</h6>
									<p>
										Do you want to look dazzling at the
										important events or do you want to
										change your image just to make yourself
										happy?
									</p>
									<Link href="/services/makeup">
										<a className="mad-text-link">
											Read More
										</a>
									</Link>
								</div>
							</article>
							{/* <!--================ End of Icon Box ================--> */}
						</div>
						<div className="mad-col">
							{/* <!--================ Icon Box ================--> */}
							<article className="mad-icon-box">
								<i className="mad-icon-box-icon">
									<img
										className="svg"
										src="legasy_icons_svg/cut.svg"
										alt=""
									/>
								</i>
								<div className="mad-icon-box-content">
									<h6 className="mad-icon-box-title">
										Hair Services
									</h6>
									<p>
										We create hairstlyes for you that
										reflexct your emotins and mood, as well
										as bring out your facial features
										perfectly.
									</p>
									<Link href="/services/hair">
										<a className="mad-text-link">
											Read More
										</a>
									</Link>
								</div>
							</article>
							{/* <!--================ End of Icon Box ================--> */}
						</div>
						<div className="mad-col">
							{/* <!--================ Icon Box ================--> */}
							<article className="mad-icon-box">
								<i className="mad-icon-box-icon">
									<img
										className="svg"
										src="legasy_icons_svg/treatment.svg"
										alt=""
									/>
								</i>
								<div className="mad-icon-box-content">
									<h6 className="mad-icon-box-title">
										Facial Treatment Services
									</h6>
									<p>
										We'll get your glow on with our wide
										range of beauty treatments. We will
										start off with an in depth skin analysis
										determining what treatment is best
										suited for your skin.
									</p>
									<Link href="/services/facial">
										<a className="mad-text-link">
											Read More
										</a>
									</Link>
								</div>
							</article>
							{/* <!--================ End of Icon Box ================--> */}
						</div>
					</div>
					{/* <!--================ End of Icon Boxes ================--> */}
				</div>
			</div>
		</div>
	);
}

export default services
