import React from "react";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

const welcome = () => {
	return (
		<div className="mad-content no-pd">
			<div className="container-fluid">
				<div className="mad-section no-pb">
					<div className="mad-entities type-4 style-2">
						<article className="mad-entity">
							<div className="mad-entity-media">
								<img
									// src={LindaImg}
									src="/imgs/linda.jpg"
									// width="680px"
									// height="800px"
									layout="responsive"
								/>
							</div>
							<div className="mad-entity-content">
								<div className="content-element-6">
									<h2 className="mad-title">
										Your Satisfaction Is Our Priority!
									</h2>
								</div>
								<div className="content-element-6">
									<p>
										Make up By Linda was founded by Kenyan
										Pro Make Up Artist - Linda Njambi Mutua
										who began her journey in the Beauty
										Industry 3 years ago driven by love and
										passion. She then decided to take it to
										the next level and came up with the
										brand.
									</p>
									<p>
										Our Beauty Parlour is located in Nairobi
										offering a range of services and
										products -Quality make up, skin, hair
										and body care. If you are looking for
										such...this the place for you! We are
										constantly keeping up to date with new
										technologies and ongoing trends within
										the beauty industry. All services are
										performed under strict hygiene standards
										using only the highest quality products.{" "}
									</p>
								</div>
								<div className="content-element-6">
									<h2 className="mad-title">Our Mission</h2>
								</div>
								<div className="content-element-6">
									<p>
										Spread love through beauty. We hold
										ourselves accountable for exceeding our
										clients’ high expectations and recognize
										every client as our ultimate focus. We
										believe the actions of one, have the
										power to change the world. We work hard
										to please our customers. The payoff is,
										that it brings us as much pleasure as it
										does our satisfied customers.
									</p>
								</div>
								<img
									className="content-element"
									src="/imgs/signature.png"
								/>
								<p className="mad-text-color-2">
									Founder & Makeup Lead
								</p>
							</div>
						</article>
					</div>
				</div>
				<article className="mad-section">
					{/* <!--================ Counters ================--> */}
					<div className="mad-counters align-center vr-type type-2 item-col-4">
						<div className="mad-col">
							<div className="mad-counter">
								<div className="mad-counter-inner">
									<div className="mad-counter-icon">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="60"
											height="80"
											viewBox="0 0 60 80"
											fill="none"
											className="svg replaced-svg"
										>
											<path
												d="M49.8032 51.747L57.3361 72.0477L46.7788 72.1497L38.1 79L30.5297 58.6066M9.91447 50.7366L2.09448 72.0477L13.6809 72.1497L21.3329 79L26.6513 64.4883M24.7307 24.5659L13.5293 26.1881L21.6293 34.021L19.7157 45.096L29.734 39.861L39.7499 45.0891L37.8363 34.0141L45.9387 26.1881L34.7373 24.5659L29.734 14.4851L24.7307 24.5659ZM30 1C24.2643 1 18.6575 2.68901 13.8885 5.85345C9.11945 9.01789 5.40245 13.5156 3.20751 18.7779C1.01257 24.0402 0.438269 29.8306 1.55724 35.417C2.67621 41.0034 5.43819 46.1349 9.49391 50.1624C13.5496 54.19 18.7169 56.9328 24.3424 58.044C29.9678 59.1552 35.7988 58.5849 41.0978 56.4052C46.3969 54.2255 50.9261 50.5343 54.1126 45.7984C57.2992 41.0624 59 35.4945 59 29.7987C59 26.0168 58.2499 22.2719 56.7925 18.7779C55.3351 15.2839 53.199 12.1091 50.5061 9.43494C47.8132 6.76073 44.6163 4.63944 41.0978 3.19217C37.5794 1.7449 33.8083 1 30 1Z"
												stroke="#C28566"
												stroke-width="1.5"
												stroke-linecap="round"
												stroke-linejoin="round"
											></path>
										</svg>
									</div>
									<div className="mad-counter-content">
										<div className="mad-counter-count">
											4
										</div>
										<div className="mad-counter-title">
											Years of Experience
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="mad-col">
							<div className="mad-counter">
								<div className="mad-counter-inner">
									<div className="mad-counter-icon">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="77"
											height="80"
											viewBox="0 0 77 80"
											fill="none"
											className="svg replaced-svg"
										>
											<path
												d="M1.68367 31.5031C-0.462552 20.7157 2.46965 8.95754 10.1242 1C10.1242 1 11.6544 6.99839 21.1921 15.2897C25.8439 19.3322 37.6994 21.6412 42.1378 28.5797C51.2376 42.8081 35.9189 58.2008 35.9189 58.2008M6.3306 43.0887C11.2085 50.6447 19.4838 56.3932 31.3313 57.825M36.6247 79V70.1862C35.6318 25.3596 19.5303 32.2513 12.8077 19.1M29.0439 35.5633C26.1069 31.5853 11.7346 30.1922 11.7346 30.1922M33.569 45.6428C37.0177 39.2413 35.6414 31.5305 35.6414 31.5305M51.2953 63.7992C51.0852 63.9057 43.7033 66.9823 36.8717 78.7549M51.584 53.3311C42.3335 56.3448 43.7868 68.993 43.7868 68.993C60.2058 81.6122 77.1381 67.2967 75.9399 52.7764C75.9399 52.7764 73.0719 54.8952 65.7879 55.0951C62.2333 55.1903 56.0914 51.8605 51.584 53.3311ZM61.0399 61.3112C63.5374 61.1161 65.8312 61.0048 68.218 59.9616L61.0399 61.3112ZM56.6208 59.9438C56.2918 59.8661 55.9473 59.8881 55.6309 60.0072C55.3144 60.1262 55.0401 60.337 54.8428 60.6127C54.6455 60.8885 54.534 61.2169 54.5223 61.5563C54.5107 61.8958 54.5995 62.2311 54.7774 62.5199C54.9554 62.8087 55.2145 63.0379 55.5221 63.1786C55.8297 63.3193 56.1718 63.3651 56.5053 63.3103C56.8388 63.2554 57.1486 63.1024 57.3956 62.8706C57.6425 62.6388 57.8156 62.3385 57.8928 62.0078C57.9962 61.5645 57.9204 61.0981 57.6818 60.7111C57.4433 60.324 57.0616 60.0481 56.6208 59.9438ZM4.1539 36.1696C3.82488 36.092 3.48038 36.1143 3.16396 36.2336C2.84755 36.3529 2.57344 36.5639 2.37633 36.8399C2.17921 37.1158 2.06794 37.4443 2.05659 37.7838C2.04524 38.1234 2.13432 38.4586 2.31256 38.7473C2.4908 39.0359 2.75019 39.2649 3.05792 39.4053C3.36565 39.5457 3.70789 39.5912 4.04135 39.536C4.37481 39.4808 4.68449 39.3275 4.93124 39.0954C5.17798 38.8632 5.35069 38.5627 5.42752 38.2319C5.53046 37.7887 5.45413 37.3225 5.21532 36.9358C4.9765 36.5491 4.59474 36.2735 4.1539 36.1696Z"
												stroke="#C28566"
												stroke-width="1.5"
												stroke-linecap="round"
												stroke-linejoin="round"
											></path>
										</svg>
									</div>
									<div className="mad-counter-content">
										<div className="mad-counter-count">
											100%
										</div>
										<div className="mad-counter-title">
											Natural Products
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="mad-col">
							<div className="mad-counter">
								<div className="mad-counter-inner">
									<div className="mad-counter-icon">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="80"
											height="80"
											viewBox="0 0 80 80"
											fill="none"
											className="svg replaced-svg"
										>
											<path
												d="M64.1461 41.7301H74.8667M64.1461 53.4069H72.9173M64.1461 65.0837H69.9942M17.3685 31.9995H29.1094C29.7486 31.9995 30.3727 31.8061 30.8996 31.445C31.4265 31.0839 31.8315 30.5718 32.0613 29.9764L40.8487 12.9268V0.863281H44.6237C45.4726 0.863221 46.2984 1.13981 46.9755 1.65102C47.6527 2.16223 48.1442 2.88012 48.3754 3.69564L50.4485 13.5999C50.6378 14.3327 50.6434 15.1007 50.4646 15.8361L48.6713 24.8506C48.517 25.4682 48.5058 26.1127 48.6384 26.7353C48.771 27.3579 49.044 27.9421 49.4366 28.4436C49.8292 28.9451 50.331 29.3508 50.9041 29.6297C51.4772 29.9086 52.1064 30.0535 52.744 30.0534H73.5468C75.0483 30.0202 76.5089 30.5426 77.6478 31.5199C78.7867 32.4973 79.5233 33.8606 79.7159 35.3475C79.8577 36.8458 79.4147 38.341 78.4791 39.5211C77.5436 40.7013 76.1878 41.4753 74.6945 41.6818C74.6822 41.6841 74.671 41.6906 74.663 41.7003C74.6549 41.7099 74.6505 41.7221 74.6505 41.7346C74.6505 41.7472 74.6549 41.7593 74.663 41.769C74.671 41.7786 74.6822 41.7852 74.6945 41.7874C76.1878 41.9939 77.5436 42.7679 78.4791 43.9481C79.4147 45.1282 79.8577 46.6234 79.7159 48.1218C79.5221 49.6077 78.785 50.9697 77.6462 51.9459C76.5074 52.9222 75.0474 53.4438 73.5468 53.4105H70.968C72.519 53.4105 74.0065 54.0256 75.1032 55.1205C76.1999 56.2154 76.8161 57.7004 76.8161 59.2489C76.8161 59.3372 76.8161 59.4255 76.8161 59.5138C76.6854 61.0595 75.9686 62.497 74.812 63.5329C73.6555 64.5687 72.1465 65.1247 70.5932 65.0872H67.1912C67.1779 65.0858 67.1645 65.0897 67.1541 65.0981C67.1437 65.1065 67.137 65.1187 67.1356 65.132C67.1342 65.1453 67.1381 65.1586 67.1465 65.169C67.1549 65.1794 67.1671 65.1861 67.1804 65.1875C68.6725 65.4705 69.9961 66.3213 70.8715 67.5604C71.7469 68.7995 72.1056 70.3298 71.8718 71.828C71.5994 73.2426 70.8332 74.515 69.7095 75.4188C68.5858 76.3226 67.1775 76.7992 65.735 76.764H55.3694L49.4801 76.6816C43.0352 76.5974 36.6656 75.2867 30.7127 72.8198L26.145 70.9256H26.1235H19.3179M8.88435 76.7586H19.3197V31.9995H8.88435M2.8372 74.6514C3.23871 74.6514 3.63121 74.7702 3.96505 74.9929C4.29889 75.2156 4.55909 75.5321 4.71274 75.9025C4.86639 76.2728 4.90659 76.6803 4.82826 77.0735C4.74993 77.4666 4.55659 77.8277 4.27268 78.1111C3.98877 78.3946 3.62705 78.5876 3.23325 78.6658C2.83946 78.744 2.43127 78.7039 2.06033 78.5505C1.68938 78.3971 1.37233 78.1373 1.14926 77.804C0.926193 77.4707 0.807129 77.0789 0.807129 76.6781C0.807129 76.4119 0.85964 76.1484 0.96166 75.9025C1.06368 75.6566 1.21321 75.4332 1.40172 75.245C1.59023 75.0568 1.81403 74.9075 2.06033 74.8056C2.30663 74.7038 2.57061 74.6514 2.8372 74.6514ZM0.807129 32.0819C0.807129 32.4827 0.926193 32.8746 1.14926 33.2078C1.37233 33.5411 1.68938 33.8009 2.06033 33.9543C2.43127 34.1077 2.83946 34.1478 3.23325 34.0696C3.62705 33.9914 3.98877 33.7984 4.27268 33.515C4.55659 33.2315 4.74993 32.8704 4.82826 32.4773C4.90659 32.0841 4.86639 31.6766 4.71274 31.3063C4.55909 30.936 4.29889 30.6194 3.96505 30.3967C3.63121 30.174 3.23871 30.0552 2.8372 30.0552C2.29879 30.0552 1.78244 30.2687 1.40172 30.6488C1.02101 31.0289 0.807129 31.5444 0.807129 32.0819Z"
												stroke="#C28566"
												stroke-width="1.5"
												stroke-miterlimit="10"
												stroke-linecap="round"
											></path>
										</svg>
									</div>
									<div className="mad-counter-content">
										<div className="mad-counter-count">
											800+
										</div>
										<div className="mad-counter-title">
											Satisfied Clients
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="mad-col">
							<div className="mad-counter">
								<div className="mad-counter-inner">
									<div className="mad-counter-icon">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="77"
											height="80"
											viewBox="0 0 77 80"
											fill="none"
											className="svg replaced-svg"
										>
											<path
												d="M44.3039 2.81655C59.002 3.51767 70.3155 16.3578 70.3155 31.2806V34.6268C70.3155 36.4686 70.6967 38.2899 71.4343 39.9729L75.8151 49.991C75.9596 50.3185 76.021 50.6776 75.9936 51.0353C75.9663 51.3931 75.851 51.7382 75.6584 52.0392C75.4658 52.3402 75.2019 52.5875 74.8909 52.7586C74.5799 52.9296 74.2315 53.019 73.8777 53.0186H68.6059C68.6059 53.1939 68.6059 65.9256 68.6059 66.0244C68.6059 68.0959 66.7203 69.4727 64.6776 69.4727H56.6529V78.9984M38.7195 78.9984V69.4695H46.7458C48.7885 69.4695 50.6631 68.0864 50.674 66.0212C50.674 65.9288 50.674 53.1891 50.674 53.0154H55.9505C56.3044 53.0158 56.6527 52.9265 56.9637 52.7554C57.2748 52.5843 57.5386 52.337 57.7312 52.036C57.9239 51.735 58.0391 51.3899 58.0665 51.0321C58.0939 50.6744 58.0325 50.3154 57.888 49.9878L53.5024 39.9793C52.7648 38.2963 52.3837 36.475 52.3836 34.6332V31.2869C52.3836 16.3642 41.0702 3.52404 26.3736 2.82292M21.644 79V69.4695H29.6718C31.7145 69.4695 33.5891 68.0864 33.6001 66.0212C33.6001 65.9288 33.6001 53.1891 33.6001 53.0154H38.8766C39.2304 53.0158 39.5788 52.9265 39.8898 52.7554C40.2008 52.5843 40.4647 52.337 40.6573 52.036C40.8499 51.735 40.9652 51.3899 40.9926 51.0321C41.0199 50.6744 40.9586 50.3154 40.814 49.9878L36.4253 39.9761C35.6877 38.2931 35.3066 36.4718 35.3066 34.63V31.2838C35.3066 16.361 23.9931 3.52086 9.29656 2.81973M2.70802 1C2.37021 1 2.03998 1.10159 1.7591 1.29191C1.47821 1.48224 1.25929 1.75275 1.13002 2.06925C1.00074 2.38575 0.966916 2.73402 1.03282 3.07001C1.09872 3.406 1.2614 3.71463 1.50027 3.95687C1.73914 4.19911 2.04348 4.36407 2.3748 4.43091C2.70613 4.49774 3.04955 4.46344 3.36165 4.33234C3.67375 4.20124 3.94051 3.97924 4.12819 3.69439C4.31587 3.40955 4.41604 3.07467 4.41604 2.73209C4.41604 2.27271 4.23609 1.83215 3.91578 1.50732C3.59546 1.18249 3.16102 1 2.70802 1Z"
												stroke="#C28566"
												stroke-width="1.5"
												stroke-linecap="round"
												stroke-linejoin="round"
											></path>
										</svg>
									</div>
									<div className="mad-counter-content">
										<div className="mad-counter-count">
											3
										</div>
										<div className="mad-counter-title">
											Specialists in The Team
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <!--================ End of Counters ================--> */}
				</article>
				<div className="mad-section mad-section--stretched mad-colorizer--scheme-color-5 mad-colorizer--scheme-light with-texture7">
					<div
						className="mad-colorizer-bg-color"
						style={{
							left: "-64px",
							right: "-64px",
						}}
					></div>
					<div className="row justify-content-center">
						<div className="col-xl-8">
							<div className="mad-title-wrap align-center">
								<h2 className="mad-page-title">Testimonials</h2>
							</div>
							{/* <!--================ Testimonials ================--> */}
							<div className="mad-testimonials align-center with-quotes style-2">
								<OwlCarousel
									className="owl-theme mad-grid mad-grid--cols-2 owl-carousel no-nav dots-center dots-color-3 owl-loaded owl-drag"
									loop={false}
									margin={10}
									nav
									responsive={{
										0: {
											items: 1,
										},
									}}
								>
									<div className="mad-grid-item">
										<div className="mad-testimonial">
											<div className="mad-testimonial-info">
												<blockquote>
													<p>
														"I love my regular
														visits to get my makeup
														done, it's the highlight
														of my week. You have a
														rare place where you get
														treated like family and
														feel such love and
														care."
													</p>
												</blockquote>
											</div>
											<div className="mad-author">
												<div className="mad-author-info">
													<span className="mad-author-name">
														Nicole Mungai, NA, KENYA
													</span>
												</div>
											</div>
										</div>
									</div>
									<div className="mad-grid-item">
										<div className="mad-testimonial">
											<div className="mad-testimonial-info">
												<blockquote>
													<p>
														"I’ve been seeing Linda
														for 4 years now – great
														service and most
														importantly, I always
														walk out with fabulous
														hair and makeup."
													</p>
												</blockquote>
											</div>
											<div className="mad-author">
												<div className="mad-author-info">
													<span className="mad-author-name">
														Grace Musau, NA, KENYA
													</span>
												</div>
											</div>
										</div>
									</div>
									<div className="mad-grid-item">
										<div className="mad-testimonial">
											<div className="mad-testimonial-info">
												<blockquote>
													<p>
														"I can only say good
														things about Linda, she
														is a highly professional
														makeup artist, who get
														it right every time. I
														find myself looking
														forward to seeing her
														each month!"
													</p>
												</blockquote>
											</div>
											<div className="mad-author">
												<div className="mad-author-info">
													<span className="mad-author-name">
														Brenda Jepchirchir, NA,
														KENYA
													</span>
												</div>
											</div>
										</div>
									</div>
								</OwlCarousel>
								{/* <OwlCarousel
									className="mad-grid mad-grid--cols-2 owl-theme no-nav dots-center dots-color-3 owl-loaded owl-drag"
									loop={false}
									margin={10}
									nav={true}
									responsive={{
										0: {
											items: 2,
										},
										600: {
											items: 2,
										},
										1000: {
											items: 2,
										},
									}}
								>
									<div className="mad-grid-item">
										<div className="mad-testimonial">
											<div className="mad-testimonial-info">
												<blockquote>
													<p>
														"Clean and very
														professional hair boutique.
														The explained their
														services well and make
														great recommendations
														for you not just for the
														money, as a result, got
														a great haircut."
													</p>
												</blockquote>
											</div>
											<div className="mad-author">
												<div className="mad-author-info">
													<span className="mad-author-name">
														Rebecca Johnson, CA, USA
													</span>
												</div>
											</div>
										</div>
									</div>
								</OwlCarousel> */}
							</div>
							{/* <!--================ End of Testimonials ================--> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default welcome;
