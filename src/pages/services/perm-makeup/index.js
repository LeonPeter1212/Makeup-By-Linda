import React from "react";
import Slider from "../../../components/pages/services/slider";
import Prices from "../../../components/pages/services/prices";
import Contact from "../../../components/contact";
import Sub1 from "../../../components/pages/services/makeup/sub1"

const microshadingImages = [
	"/services/microshading/1.jpg",
	"/services/microshading/2.jpg",
	"/services/microshading/3.jpg",
	"/services/microshading/4.jpg",
	"/services/microshading/5.jpg",
	"/services/microshading/6.jpg",
];

export default function Makeup() {
	return (
		<>
			<Slider service="Permanent Makeup" />

			<div className="container">
				<p className="content-element-4 mad-text-medium my-5">
					Welcome to our Permanent Makeup page! Here, we offer a
					variety of services to enhance your natural beauty and save
					you time in your daily routine.
				</p>
				<p className="content-element-4 mad-text-medium my-5">
					Our Permanent Makeup service is perfect for those looking
					for long-lasting, natural-looking results. We use a
					specialized technique to apply pigment to the skin,
					mimicking the look of perfectly applied makeup. This service
					is great for defining and filling in eyebrows, creating a
					subtle lip color, and even adding eyeliner.
				</p>
			</div>
			
			<div className="mad-body--scheme-brown mad-content no-pd">
				<Sub1
					title="Microshading"
					desc="Microshading is a semi-permanent makeup technique that uses a machine to create fine, hair-like strokes to fill in sparse brows or create a full, defined look. This method is perfect for those who want a natural, powdered look without the daily hassle of filling in their brows. It is also a great option for those with sensitive skin or who have had previous permanent makeup procedures that did not turn out as desired."
					lasts="3-5 years"
					range="From Ksh. 20,000"
					images={microshadingImages}
				/>
				<Sub1
					title="Microblading"
					desc="Microblading is a semi-permanent makeup technique that uses a manual tool to create fine, hair-like strokes to fill in sparse brows or create a full, defined look. This method is perfect for those who want a natural, hair-like look without the daily hassle of filling in their brows. It is also a great option for those with sensitive skin or who have had previous permanent makeup procedures that did not turn out as desired."
					lasts="1-2 years"
					range="From Ksh. 20,000"
				/>
				<Sub1
					title="Combo Brows"
					desc="Combo Brows is a combination of microblading and shading, which creates a natural, full, and defined look. This method is perfect for those who want a natural, hair-like look without the daily hassle of filling in their brows. It is also a great option for those with sensitive skin or who have had previous permanent makeup procedures that did not turn out as desired.."
					lasts="2-5 years"
					range="From Ksh. 25,000"
				/>
				<Sub1
					title="Permanent Eyeliner"
					desc="Say goodbye to smudged eyeliner and hello to a more polished, put-together look with permanent eyeliner. Our technicians use a variety of techniques to create natural-looking, long-lasting eyeliner that will make your eyes pop. Whether you want a subtle enhancement or a bold, dramatic look, we can help you achieve your desired look."
					range="From Ksh. 15,000"
				/>
				<Sub1
					title="Lip Blush"
					desc="Enhance your natural lip color and add a pop of color with our lip blush service. Our technicians use a variety of techniques to create natural-looking, long-lasting lip color that will make your lips look fuller and more defined. Whether you want a subtle enhancement or a bold, dramatic look, we can help you achieve your desired look."
					range="From Ksh. 20,000"
				/>

				<div className="dashed-div">
				<div className="container">
					<p className="content-element-4 mad-text-medium my-5">
						Overall, all of our services are safe and performed by
						licensed technicians who will work with you to create a
						personalized look that enhances your natural beauty. We
						look forward to helping you look and feel your best!
					</p>
				</div>
					<Contact />
				</div>
			</div>
		</>
	);
}
