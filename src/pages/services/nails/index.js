import React from "react";
import Slider from "../../../components/pages/services/slider";
import Prices from "../../../components/pages/services/prices";
import Contact from "../../../components/contact";

import Sub1 from "../../../components/pages/services/makeup/sub1"

export default function Makeup() {
	return (
		<>
			<Slider service="Nails" />
			<div className="mad-body--scheme-brown mad-content no-pd">
				{/* <div className="container-fluid bg-white">
					<div className="mad-section mad-section--stretched mad-colorizer--scheme-color-2 mad-text-medium content-element-6 m-0">
						<p>
							Thank you for your interest in my services! Here
							you’ll find information about the services I
							provide. For detailed pricing information, please
							contact me for a custom quote via the contact form below.
						</p>
					</div>
				</div> */}
				<Sub1
					title=""
					desc="Nails service typically includes the grooming and beautification of the nails on the hands and feet. This can include services such as manicures, pedicures, nail polish application, nail art, and acrylic or gel nail extensions. The goal of a nails service is to leave the client with clean, polished, and stylish nails. The service is often performed by a nail technician or cosmetologist, and can take place in a salon, spa, or nail boutique. It is a popular choice for special occasions or as a regular grooming routine."
					range="From Ksh. 2,000"
				/>
				{/* <Sub1 />
				<Sub1 /> */}
				<div className="dashed-div">
					<Contact />
				</div>
			</div>
		</>
	);
}
