import React from "react";
import { formatMoney } from "accounting";
import dynamic from "next/dynamic";
import { List, Image, Empty } from "antd";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

const index = ({
	title = "Subcategory Title Here",
	desc,
	range,
	images,
	lasts,
	pricelist,
}) => {
	const makeupPrices = [
		{
			label: "Range",
			value: range,
		},
	];

	return (
		<div className="dashed-div">
			<div className="container">
				<div className="mad-section mad-section-4rem mad-section--stretched mad-text-medium content-element-6">
					<div className="detailssec">
						<h4 className="mad-widget-title">{title}</h4>
						<div className="content-element-4 mb-5">
							<p>{desc}</p>
							{lasts ? (
								<p
									style={{
										fontWeight: "bold",
									}}
								>
									Lasts: {lasts}
								</p>
							) : null}
						</div>
					</div>

					<div className="pricingnimg_sec">
						<div className="content-element-6">
							<h5 className="pricingtitle">
								<span>Pricing:</span>
							</h5>
						</div>

						<List
							itemLayout="horizontal"
							dataSource={pricelist ? pricelist : makeupPrices}
							renderItem={(item) => (
								<List.Item>
									<List.Item.Meta
										title={
											<div className="content-element">
												<p
													style={{
														fontWeight: "lighter",
														fontSize: "1.3rem",
														fontFamily: `"Nanum Gothic", sans-serif`,
													}}
												>
													{item.label}
												</p>
											</div>
										}
									/>
									<p
										style={{
											fontWeight: "lighter",
											fontSize: "1.1rem",
											fontFamily: `"Nanum Gothic", sans-serif`,
										}}
									>
										{item.value}
									</p>
								</List.Item>
							)}
						/>

						<div
							style={{ marginTop: "2rem", marginBottom: "2rem" }}
						>
							<div className="content-element-6">
								<h5 className="pricingtitle">
									<span>Gallery:</span>
								</h5>
							</div>

							{images ? (
								<>
									<Image.PreviewGroup>
										{images?.map((el, i) => (
											<Image
												src={el}
												width={220}
												className="p-2"
											/>
										))}
									</Image.PreviewGroup>
								</>
							) : (
								<div>
									<Image.PreviewGroup>
										<Image
											width={220}
											src="/imgs/s1.png"
											className="p-2"
										/>
										<Image
											width={220}
											src="/imgs/s2.png"
											className="p-2"
										/>
									</Image.PreviewGroup>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default index;
