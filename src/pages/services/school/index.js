import React from "react";
import Slider from "../../../components/pages/services/slider";
import Prices from "../../../components/pages/services/prices";
import Contact from "../../../components/contact";

import Sub1 from "../../../components/pages/services/makeup/sub1";

export default function Makeup() {
	return (
		<>
			<Slider service="Makeup Training" />

			<div className="container">
				<p className="content-element-4 mad-text-medium my-5">
					Welcome to our Makeup Training page! Here at Makeup By
					Linda, we offer professional and comprehensive makeup
					training courses for individuals looking to enter the makeup
					industry or improve their skills.
				</p>
				<p className="content-element-4 mad-text-medium my-5">
					Our courses are taught by experienced and talented makeup
					artists who have years of experience in the field. They will
					provide you with the knowledge and skills you need to
					succeed in this competitive industry.
				</p>
				<p className="content-element-4 mad-text-medium my-5">
					We offer a variety of courses to suit different levels of
					experience and interests. Our beginner courses are designed
					for those who are new to makeup and want to learn the basics
					of application, while our advanced courses are perfect for
					those who want to take their skills to the next level.
				</p>
				<p className="content-element-4 mad-text-medium my-5">
					<span>Our beginner courses cover topics such as:</span>
					<ul
						style={{
							listStyle: "disc",
							margin: "revert",
							padding: "revert",
						}}
					>
						<li>Basic makeup application</li>
						<li>Color theory</li>
						<li>Skin care</li>
						<li>Tools and products</li>
					</ul>
				</p>

				<p className="content-element-4 mad-text-medium my-5">
					<span>Our advanced courses include:</span>
					<ul
						style={{
							listStyle: "disc",
							margin: "revert",
							padding: "revert",
						}}
					>
						<li>Special effects makeup</li>
						<li>Airbrush makeup</li>
						<li>Bridal makeup</li>
						<li>Editorial and fashion makeup</li>
					</ul>
				</p>

				<p className="content-element-4 mad-text-medium my-5">
					All of our courses are hands-on, so you will have the
					opportunity to practice your skills and receive feedback
					from our instructors. You will also receive a certificate of
					completion upon finishing the course.
				</p>
				<p className="content-element-4 mad-text-medium my-5">
					In addition to our regular courses, we also offer private
					lessons and workshops for those who prefer a more
					personalized approach to learning.
				</p>
				<p className="content-element-4 mad-text-medium my-5">
					If you're ready to take your makeup skills to the next level
					and begin a career in the industry, enroll in one of our
					courses today! We look forward to helping you achieve your
					goals.
				</p>
			</div>
		</>
	);
}
