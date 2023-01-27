import React from "react";
import Slider from "../../../components/pages/services/slider";
import Prices from "../../../components/pages/services/prices";
import Contact from "../../../components/contact";

import Sub1 from "../../../components/pages/services/makeup/sub1";

export default function Makeup() {
	return (
		<>
			<Slider service="Makeup Services" />

			<div className="container">
				<p className="content-element-4 mad-text-medium my-5">
					Welcome to our Makeup Services page! “Beauty is power, and
					makeup is something that really enhances that; it’s a
					woman’s secret.” We offer make up application services from
					day do day office make up, bridal, photoshoot make up,
					editorial, print and special occasions. Day to day make up
					look /special occasions make up Makeup is the finishing
					touch, the final accessory. Visit us and show up looking all
					glamorous! We are excited to offer a wide range of makeup
					services to help you look and feel your best. Whether you're
					looking for a simple touch-up or a full makeover, our
					professional makeup artists have the skills and experience
					to help you achieve your desired look.
				</p>
			</div>
			<div className="mad-body--scheme-brown mad-content no-pd">
				<Sub1
					title="Makeup for Photoshoots"
					desc="Whether you're a model, an actor, or just want to have some professional photos taken, our makeup for photoshoots service is perfect for you. We'll work with you to create a look that is both camera-ready and true to your unique style."
					range="From Ksh. 3,500 per person"
				/>
				<Sub1
					title="Bridal Makeup"
					desc="Your wedding day is one of the most important days of your life, and you deserve to look and feel your best. Our bridal makeup service will ensure that you look flawless on your big day. We'll work with you to create a look that complements your dress, hairstyle, and overall vision for your wedding day."
					range="From Ksh 5,000.00 per person"
				/>

				
				<div className="dashed-div">
					<Contact />
				</div>
			</div>
		</>
	);
}
