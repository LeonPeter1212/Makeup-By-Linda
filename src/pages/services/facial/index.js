import React from "react";
import Slider from "../../../components/pages/services/slider";
import Prices from "../../../components/pages/services/prices";
import Contact from "../../../components/contact";

import Sub1 from "../../../components/pages/services/makeup/sub1"

export default function Makeup() {
	return (
		<>
			<Slider service="Facial Treatment Services" />
			<div className="mad-body--scheme-brown mad-content no-pd">
				<Sub1
					title=""
					desc="Facial treatment services are a type of beauty treatment that focuses on the skin of the face. These services can include a variety of different treatments, such as exfoliation, moisturizing, and the application of masks and serums. Facial treatments are often customized to suit the individual needs of each client, and may be used to address a wide range of skin concerns, including acne, wrinkles, and sun damage. Many facial treatment services also include a relaxing massage to help promote relaxation and reduce stress."
					range="From Ksh. 2,500"
				/>
				<div className="dashed-div">
					<Contact />
				</div>
			</div>
		</>
	);
}
