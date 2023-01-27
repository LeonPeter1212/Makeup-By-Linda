import React from "react";
import { Form, Input, DatePicker, Select } from "antd";

const services = [
	{
		label: "Makeup Services",
		value: "Makeup Services",
	},
	{
		label: "Hait Services",
		value: "Hait Services",
	},
	{
		label: "Facial Treatment Services",
		value: "Facial Treatment Services",
	},
];

const contact = () => {
	return (
		<>
			<div
				id="booknow"
				className="no-pb with-overlay-2 mad-section--stretched mad-colorizer--scheme-"
			>
				<div className="mad-gmap-element">
					<div className="row">
						<div className="col-md-6">
							<div className="mad-title-wrap">
								<div className="mad-pre-title">
									How to find us
								</div>
								<h2 className="mad-title">Contact Details</h2>
							</div>
							<p className="content-element-4">
								The most alluring thing a woman can do is have
								confidence. Here at Makeup By Linda, we make
								sure that you walk out of our boutique looking
								great and feeling confident as ever.
							</p>
							<ul className="mad-vr-list mad-map-info content-element-3">
								<li>
									<img
										src="/legasy_icons_svg/loc4.svg"
										alt=""
										className="svg"
									/>
									<a
										href="https://www.google.com/search?q=makeup+by+linda&oq=make&aqs=edge.0.69i59l2j0i433i512j0i20i263i512j0i512j0i433i512j69i60l2j69i61.1718j0j1&sourceid=chrome&ie=UTF-8#"
										className="mad-link"
									>
										Kenya House Complex, Nairobi
									</a>
								</li>
								<li>
									<img
										src="/legasy_icons_svg/phone4.svg"
										alt=""
										className="svg"
									/>
									<a
										href="tel:0718778549"
										className="mad-link"
									>
										0718 778549
									</a>
								</li>
								{/* <li>
									<img
										src="/legasy_icons_svg/email.svg"
										alt=""
										className="svg"
									/>
									<a
										href="pages_gallery_grid.html"
										className="mad-link"
									>
										mail@companyname.com
									</a>
								</li> */}
								<li>
									<img
										src="/legasy_icons_svg/clock4.svg"
										alt=""
										className="svg"
									/>
									Monday - Saturday: 8AM - 6.30PM <br />
									Sunday: 10AM - 5PM
								</li>
							</ul>
							<div className="mad-social-icons size-2">
								<ul>
									<li>
										<a
											href="https://web.facebook.com/makeupbylinda254"
											target="_blank"
										>
											<i className="fab fa-facebook-f"></i>
										</a>
									</li>
									<li>
										<a
											href="https://www.instagram.com/make_upbylinda/"
											target="_blank"
										>
											<i className="fab fa-instagram"></i>
										</a>
									</li>
									{/* <li>
										<a
											href="https://www.tiktok.com/@make_upbylinda"
											target="_blank"
										>
											<i className="fab fa-tiktok"></i>
										</a>
									</li> */}
									<li>
										<a
											href="https://www.youtube.com/channel/UCS8mwNDErLVXflpfgk_K0dw"
											target="_blank"
										>
											<i className="fab fa-youtube"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-md-6">
							<div className="mad-title-wrap">
								<div className="mad-pre-title">We are open</div>
								<h2 className="mad-title">
									Book an Appointment
								</h2>
							</div>
							{/* <p className="mad-text-medium content-element-4">
								Please feel free to book an appointment via the form below. Fields marked with * are
								required.
							</p> */}
							<Form
								className="row"
								name="basic"
								// onFinish={onFinish}
								// onFinishFailed={onFinishFailed}
								autoComplete="off"
								layout="vertical"
							>
								<Form.Item
									className="col-md-6"
									label="Name"
									name="name"
								>
									<Input />
								</Form.Item>
								<Form.Item
									className="col-md-6"
									label="Phone number"
									name="tel"
								>
									<Input type="tel" />
								</Form.Item>
								<Form.Item
									className="col-md-6"
									label="Date"
									name="date"
								>
									<DatePicker
										dropdownMatchSelectWidth={false}
									/>
								</Form.Item>
								<Form.Item
									className="col-md-6"
									label="Service"
									name="service"
								>
									<Select options={services} />
								</Form.Item>

								<Form.Item className="col-md-12">
									<button
										type="submit"
										className="btn btn-big"
									>
										Submit
									</button>
								</Form.Item>
							</Form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default contact;
