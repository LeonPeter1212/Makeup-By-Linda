import React, {useEffect} from "react";
import Link from "next/link";
import $ from 'jquery'

const Header = () => {
	useEffect(() => {

		var $window = $(window),
			$html = $(".mad-navigation2");

		function resize() {
			if ($window.width() < 1201) {
				return $html.addClass("mad-navigation");
			} 
			$html.removeClass("mad-navigation");
		}
		$window.resize(resize).trigger("resize");
		$(document).on("resize, ready", function () {
			// Add class if screen size equals
		});
	}, [])
	

	return (
		<header
			id="mad-header"
			className="mad-header mad-header--transparent mad-header--transparent-single"
		>
			<div className="mad-header-section--sticky-xl">
				<div className="container-fluid">
					<div className="mad-header-items">
						<div className="mad-header-item">
							<Link href="/">
								<a className="mad-logo logo1">
									<img
										src="/images/mainlogo.png"
										width="120"
									/>
								</a>
							</Link>
							<Link href="/">
								<a className="mad-logo logo2">
									<img
										src="/images/mainlogo2.png"
										width="120"
									/>
								</a>
							</Link>
						</div>
						<div className="mad-header-item">
							{/* <!--================ Navigation ================--> */}
							<nav className="mad-navigation-container">
								<ul className="mad-navigation2 mad-navigation--vertical-sm">
									<li className="menu-item">
										<Link href="/">
											<a>Home</a>
										</Link>
									</li>
									<li className="menu-item">
										<Link href="/about">
											<a>About</a>
										</Link>
									</li>
									<li className="menu-item menu-item-has-children">
										<a>Services</a>
										{/* <!--================ Sub Menu ================--> */}
										<ul className="sub-menu">
											<li className="menu-item">
												<Link href="/services/makeup">
													Makeup Services
												</Link>
											</li>
											<li className="menu-item">
												<Link href="/services/school">
													Makeup Training
												</Link>
											</li>
											<li className="menu-item">
												<Link href="/services/perm-makeup">
													Permanent Makeup
												</Link>
											</li>
											<li className="menu-item">
												<Link href="/services/facial">
													Facial Treatment Services
												</Link>
											</li>
											<li className="menu-item">
												<Link href="/services/hair">
													Hair Services
												</Link>
											</li>
											<li className="menu-item">
												<Link href="/services/waxing">Waxing</Link>
											</li>
											<li className="menu-item">
												<Link href="/services/nails">Nails</Link>
											</li>
										</ul>
										{/* <!--================ End of Sub Menu ================--> */}
									</li>
									<li className="menu-item menu-item-has-children">
										<a>Products</a>
										{/* <!--================ Sub Menu ================--> */}
										<ul className="sub-menu">
											<li className="menu-item">
												<Link href="/products">
													Makeup Products
												</Link>
											</li>
											<li className="menu-item">
												<Link href="/products">
													Hair Products
												</Link>
											</li>
										</ul>
										{/* <!--================ End of Sub Menu ================--> */}
									</li>
									<li className="menu-item">
										<Link href="/gallery">Gallery</Link>
									</li>
								</ul>
							</nav>
							{/* <!--================ End of Navigation ================--> */}
							<div className="mad-actions">
								<div className="mad-col">
									<Link href="#booknow">
										<a className="btn">Book Now</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
