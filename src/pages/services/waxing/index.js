import React from "react";
import Slider from "../../../components/pages/services/slider";
import Prices from "../../../components/pages/services/prices";
import Contact from "../../../components/contact";

import Sub1 from "../../../components/pages/services/makeup/sub1"

export default function Makeup() {
	return (
		<>
			<Slider service="Waxing" />
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
					desc="Waxing is a method of semi-permanent hair removal which removes the hair from the root. Wax is applied to the skin in the direction of hair growth, then quickly removed against the direction of hair growth, taking the hair with it. This method can be used to remove hair from various parts of the body, including the legs, underarms, bikini area, and face. Waxing can provide longer-lasting results than shaving, as it removes hair at the root rather than just cutting it at the surface. It's a safe and effective way to remove unwanted hair and leave your skin smooth and hair-free."
					pricelist={[
						{
							label: "Full arms",
							value: "Ksh. 1000",
						},
						{
							label: "Bikini",
							value: "Ksh. 1000",
						},
						{
							label: "Brazilian",
							value: "Ksh. 1500",
						},
						{
							label: "Armpits",
							value: "Ksh. 500",
						},
						{
							label: "Legs",
							value: "Ksh. 1000",
						},
						{
							label: "Full legs",
							value: "Ksh. 3000",
						},
						{
							label: "Butt",
							value: "Ksh. 1000",
						},
						{
							label: "Chin",
							value: "Ksh. 300",
						},
						{
							label: "Upper lip",
							value: "Ksh. 300",
						},
						{
							label: "Full body",
							value: "Ksh. 7000",
						},
					]}
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
