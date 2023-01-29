import React from "react";

const welcome = () => {
	return (
		<>
			<div className="mad-section mad-img-section no-pb mad-section--stretched mad-colorizer--scheme-color-4 with-texture1">
				<div className="row no-row-gap">
					<div className="col-xl-6">
						<div className="mad-img-content">
							<div className="mad-pre-title">
								Hello and Welcome
							</div>
							<h2 className="mad-title">
								Providing The Best Beauty Services Tailored to Your Needs
							</h2>
							<div className="row justify-content-center">
								<div className="col-xl-8">
									<div className="mad-text-medium content-element-6">
										<p>
											As one of the best beauty parlours in
											Nairobi, our goal is to provide a
											luxury hair and beauty experience in
											a welcoming atmosphere where clients
											walk in excited and leave feeling
											their best.
										</p>
										<p>
											As a full service hair boutique
											located close to you in Nairobi, we
											specialize in brow and makeup
											services we offer a wide range of
											beauty services ensuring all your
											beauty needs are met! Utilizing all
											#crueltyfree beauty brands including
											Pravana, R&Co, Oligo and Olaplex you
											can look amazing and feel good about
											it too!
										</p>
									</div>
									<img
										className="content-element"
										src="/imgs/signature.png"
										// width="200"
									/>
									<p className="mad-text-color-2">
										Founder & Makeup Lead
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-6">
						<div className="mad-img-container index-11">
							<div className="mad-img">
								<img src="/imgs/store1.jpg" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="mad-texture-holder">
				<span className="mad-img-texture5 bg-move"></span>
			</div>
		</>
	);
};

export default welcome;
