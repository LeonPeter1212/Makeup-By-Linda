import React from 'react'
import Link from "next/link"

const footer = () => {
    return (
		<footer id="mad-footer" className="mad-footer">
			{/* <!--================ Footer row ================--> */}
			<div className="container-fluid">
				<div className="mad-footer-main">
					<div className="row justify-content-between vr-size-1">
						<div className="col-xl-3 col-lg-4 col-md-6">
							{/* <!--================ Widget ================--> */}
							<section className="mad-widget">
								<Link href="/">
									<a className="mad-logo">
										<img src="/images/logo2.png" width="200" />
									</a>
								</Link>
							</section>
							{/* <!--================ End of Widget ================--> */}
						</div>
						<div className="col-xl-5 col-lg-8">
							{/* <!--================ Widget ================--> */}
							<section className="mad-widget">
								<h6 className="mad-widget-title">
									Newsletter Sign Up
								</h6>
								<p className="content-element-2">
									Sign up for news and special offers
								</p>
								<form className="mad-newsletter-form one-line">
									<div className="mad-col">
										<input
											type="email"
											name="email"
											placeholder="Enter Email Address"
										/>
									</div>
									<div className="mad-col">
										<button
											type="button"
											className="btn btn-big btn-style-3"
										>
											Subscribe
										</button>
									</div>
								</form>
							</section>
							{/* <!--================ End of Widget ================--> */}
						</div>
						<div className="col-xl-4 col-lg-12 col-md-12">
							{/* <!--================ Widget ================--> */}
							<div className="mad-footer-bottom">
								<p className="copyrights">
									Copyright © 2022{" "}
									<Link href="/">Makeup By Linda</Link>. All Rights
									Reserved.
								</p>
								<ul className="mad-hr-list">
									<li>
										<Link href="/about">About</Link>
									</li>
									<li>
										<Link href="/gallery">Gallery</Link>
									</li>
									<li>
										<Link href="#">Academy</Link>
									</li>
									<li>
										<Link href="#booknow">Contact Us</Link>
									</li>
								</ul>
							</div>
							{/* <!--================ End of Widget ================--> */}
						</div>
					</div>
				</div>
			</div>
			{/* <!--================ End of Footer row ================--> */}
		</footer>
	);
}

export default footer
