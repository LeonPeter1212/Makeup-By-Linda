import React from "react";
import Slider from "../../../components/pages/services/slider";
import Prices from "../../../components/pages/services/prices";
import Contact from "../../../components/contact";

import Sub1 from "../../../components/pages/services/makeup/sub1";

export default function Makeup() {
	return (
		<>
			<Slider service="Hair Services" />

			<div className="container">
				<p className="content-element-4 mad-text-medium my-5">
					Welcome to our Hair Services page! We are proud to offer a
					wide range of hair services to help you achieve the look you
					desire.
				</p>
				<p className="content-element-4 mad-text-medium my-5">
					We offer a wide range of hair styling options to help you
					achieve the look you desire. Whether you're looking for a
					new hairstyle, or just need a quick touch-up, our
					experienced stylists are here to help.
				</p>
			</div>

			<div className="mad-body--scheme-brown mad-content no-pd">
				<Sub1
					title="Wig Installation / Curling / Flat Iron / Tong"
					desc="If you're looking for a quick and easy way to change your look, our wig installation service is perfect for you. We offer a variety of wigs to choose from, and our stylists can help you find the perfect fit. We also offer curling, flat iron and tong services to help you achieve the perfect look."
					range="From Ksh. 2,000"
				/>
				<Sub1
					title="Gel Styling / Extension Fixing"
					desc="If you're looking for a more dramatic change, our gel styling and extension fixing services are perfect for you. We offer a wide range of extensions to choose from, including human hair and synthetic options. Our stylists can help you find the perfect match for your hair type and can help you achieve the perfect look."
					range="From Ksh. 1,500"
				/>
				<Sub1
					title="Natural Hair Styling"
					desc="We understand that not everyone is looking for a dramatic change, and that's why we offer natural hair styling services. Whether you're looking for a simple trim, or need help with a more complex style, our stylists can help you achieve the perfect look without compromising the health of your hair."
					range="From Ksh. 1,500"
				/>
				{/* <Sub1 />
				<Sub1 /> */}
				<div className="dashed-div">
					<div className="container">
						<p className="content-element-4 mad-text-medium my-5">
							No matter what hair services you're looking for, our
							stylists are here to help. We're dedicated to
							providing you with the best service possible, and
							we'll work with you to help you achieve the look you
							desire. Contact us today to schedule your
							appointment and get the hair you've always wanted.
						</p>
					</div>
					<Contact />
				</div>
			</div>
		</>
	);
}
