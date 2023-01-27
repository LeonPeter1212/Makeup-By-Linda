import React from "react";
import Slider from "../components/pages/home/slider";
import Welcome from "../components/pages/home/welcome";
import Services from "../components/pages/home/services";
import Gallery from "../components/pages/home/galleryandtestimonials";
// import Insta from "../components/pages/home/insta";
import Contact from "../components/contact";

export default function Home({ links }) {
	return (
		<>
			<Slider />
			<div className="mad-body--scheme-brown mad-content no-pd">
				<div className="container-fluid">
					<Welcome />
					<Services />
					<Gallery />
					{/* <Insta links={links} /> */}
				</div>
				<Contact />
			</div>
		</>
	);
}

// export async function getServerSideProps(context) {
// 	const puppeteer = require("puppeteer");
// 	const browser = await puppeteer.launch();
// 	const page = await browser.newPage();
// 	await page.goto("https://www.instagram.com/make_upbylinda/");
// 	await page.waitForSelector("._aagv");
// 	const links = await page.evaluate(() => {
// 		const fetchedlinks = [];
// 		var a = document.querySelectorAll("._aagv img");
// 		for (var i = 0; i < a.length; i++) {
// 			fetchedlinks.push(a[i].src);
// 		}
// 		return fetchedlinks;
// 	});
	
// 	return {
// 		props: {
// 			links,
// 		}, // will be passed to the page component as props
// 	};
// }
