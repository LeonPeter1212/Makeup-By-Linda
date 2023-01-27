import React from "react";
import Slider from "../components/pages/about/slider";
import OurStory from "../components/pages/about/ourstory";
import Contact from "../components/contact";

export default function Home() {
	return (
		<>
			<Slider />
			<div className="mad-body--scheme-brown mad-content no-pd">
				<div className="container-fluid">
					<OurStory />
				</div>
				<Contact />
			</div>
		</>
	);
}
