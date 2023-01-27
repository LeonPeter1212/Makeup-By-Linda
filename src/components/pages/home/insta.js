import React, { useState } from 'react';
import { useRequest } from 'ahooks';
import Link from "next/link"
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

const insta = ({ links }) => {

	return (
		<div className="mad-section pt-size-2 mad-section--stretched mad-colorizer--scheme- with-texture16 pb-5">
			<div className="mad-title-wrap">
				<div className="mad-title-row">
					<div className="mad-col">
						<div className="mad-pre-title">#MakeupByLinda</div>
						<h2 className="mad-title">Insta Inspiration</h2>
					</div>
					<div className="mad-col">
						<Link href="https://www.instagram.com/make_upbylinda/">
							<a className="btn style-2" target="_blank">
								<i className="fab fa-instagram"></i>
								<span>Follow us On Instagram</span>
							</a>
						</Link>
					</div>
				</div>
			</div>
			<div className="row d-grid">
				<div className="col-lg-11">
					<img src="https://instagram.fmba5-1.fna.fbcdn.net/v/t51.2885-15/306421015_431331782178916_5800747817147674267_n.webp?stp=c0.124.997.997a_dst-jpg_e35_s640x640_sh0.08&_nc_ht=instagram.fmba5-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=0wojIaktEr0AX97jSOR&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT9sTsbVXCtfeHy6ISsLckT4tPWWaMz6ueU2snNOeMQ6Bg&oe=6324C46B&_nc_sid=8fd12b" />
					<OwlCarousel
						className="owl-theme mad-grid owl-carousel mad-grid mad-grid--cols-4 no-dots"
						loop={true}
						margin={10}
						responsive={{
							0: {
								items: 1,
							},
							600: {
								items: 4,
							},
							// 1000: {
							// 	items: 4,
							// },
						}}
					>
						{/* {links?.map((el) => (
							<div className="mad-col">
								<a href={el} data-fancybox="images">
									<img src={el} width="60px" />
								</a>
							</div>
						))} */}
					</OwlCarousel>
				</div>
			</div>
		</div>
	);
};

export default insta
