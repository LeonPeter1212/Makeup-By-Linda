import React from "react";
import Slider from "../components/pages/gallery/slider";
import Carousel from "../components/pages/gallery/carousel";
import Contact from "../components/contact";

export default function Home() {
	return (
		<>
			<Slider />
			<div className="mad-body--scheme-brown mad-content no-pd">
				<div className="container-fluid">
					<Carousel />
				</div>
				<Contact />
			</div>
		</>
	);
}
