import React from "react";
import Slider from "../../components/products/slider";
import Products from "../../components/products";

const product = () => {
	return (
		<>
			<Slider />
			<div className="mad-body--scheme-brown mad-content">
				<div className="container-fluid">
					<Products />
				</div>
			</div>
		</>
	);
};

export default product;
