import React from "react";
import Link from "next/link"

const homeslider = () => {
	return (
		<div
			className="mad-breadcrumb with-bg-img with-overlay"
			// data-bg-image-src="/images/1920x512_bg1.jpg"
			style={{
				// backgroundImage: `url("/images/1920x512_bg1.jpg")`
				backgroundColor: "#674939",
			}}
		>
			<div className="container wide">
				<h1 className="mad-page-title">About Us</h1>
				<nav className="mad-breadcrumb-path">
					<span>
						<Link href="/">
							<a className="mad-link">Home</a>
						</Link>
					</span>{" "}
					/<span>About Us</span>
				</nav>
			</div>
		</div>
	);
};

export default homeslider;
