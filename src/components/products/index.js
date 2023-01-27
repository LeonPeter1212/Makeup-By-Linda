import React from "react";
import { useRouter } from "next/router";

const Product = () => {

	const router = useRouter();

	return (
		<div class="mad-col">
			<div className="row">
				<div className="col-lg-3 col-md-4">
					<div class="mad-product cursor-pointer" onClick={()=>router.push('/products/single')}>
						<div class="mad-product-image">
							<img src="images/390x390_product2.jpg" alt="" />
						</div>
						<div class="mad-product-content">
							<div class="mad-product-description">
								<div class="mad-cat-holder mt-3">
									<div
										class="mad-product-cat"
									>
										Makeup products
									</div>
								</div>
								<div class="mad-title-wrap">
									<h5 class="mad-product-title">
											Cosmetic Wipes{" "}
									</h5>
									<div class="mad-price">Ksh 899</div>
								</div>
							</div>
							<button class="btn btn-big">
								<i class="material-icons-outlined">
									shopping_bag
								</i>
								<span>Order this Item</span>
							</button>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-4">
					<div class="mad-product cursor-pointer" onClick={()=>router.push('/products/single')}>
						<div class="mad-product-image">
							<img src="images/390x390_product2.jpg" alt="" />
						</div>
						<div class="mad-product-content">
							<div class="mad-product-description">
								<div class="mad-cat-holder mt-3">
									<div
										class="mad-product-cat"
									>
										Makeup products
									</div>
								</div>
								<div class="mad-title-wrap">
									<h5 class="mad-product-title">
											Cosmetic Wipes{" "}
									</h5>
									<div class="mad-price">Ksh 899</div>
								</div>
							</div>
							<button class="btn btn-big">
								<i class="material-icons-outlined">
									shopping_bag
								</i>
								<span>Order this Item</span>
							</button>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-4">
					<div class="mad-product cursor-pointer" onClick={()=>router.push('/products/single')}>
						<div class="mad-product-image">
							<img src="images/390x390_product2.jpg" alt="" />
						</div>
						<div class="mad-product-content">
							<div class="mad-product-description">
								<div class="mad-cat-holder mt-3">
									<div
										class="mad-product-cat"
									>
										Makeup products
									</div>
								</div>
								<div class="mad-title-wrap">
									<h5 class="mad-product-title">
											Cosmetic Wipes{" "}
									</h5>
									<div class="mad-price">Ksh 899</div>
								</div>
							</div>
							<button class="btn btn-big">
								<i class="material-icons-outlined">
									shopping_bag
								</i>
								<span>Order this Item</span>
							</button>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-4">
					<div class="mad-product cursor-pointer" onClick={()=>router.push('/products/single')}>
						<div class="mad-product-image">
							<img src="images/390x390_product2.jpg" alt="" />
						</div>
						<div class="mad-product-content">
							<div class="mad-product-description">
								<div class="mad-cat-holder mt-3">
									<div
										class="mad-product-cat"
									>
										Makeup products
									</div>
								</div>
								<div class="mad-title-wrap">
									<h5 class="mad-product-title">
											Cosmetic Wipes{" "}
									</h5>
									<div class="mad-price">Ksh 899</div>
								</div>
							</div>
							<button class="btn btn-big">
								<i class="material-icons-outlined">
									shopping_bag
								</i>
								<span>Order this Item</span>
							</button>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-4">
					<div class="mad-product cursor-pointer" onClick={()=>router.push('/products/single')}>
						<div class="mad-product-image">
							<img src="images/390x390_product2.jpg" alt="" />
						</div>
						<div class="mad-product-content">
							<div class="mad-product-description">
								<div class="mad-cat-holder mt-3">
									<div
										class="mad-product-cat"
									>
										Makeup products
									</div>
								</div>
								<div class="mad-title-wrap">
									<h5 class="mad-product-title">
											Cosmetic Wipes{" "}
									</h5>
									<div class="mad-price">Ksh 899</div>
								</div>
							</div>
							<button class="btn btn-big">
								<i class="material-icons-outlined">
									shopping_bag
								</i>
								<span>Order this Item</span>
							</button>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-4">
					<div class="mad-product cursor-pointer" onClick={()=>router.push('/products/single')}>
						<div class="mad-product-image">
							<img src="images/390x390_product2.jpg" alt="" />
						</div>
						<div class="mad-product-content">
							<div class="mad-product-description">
								<div class="mad-cat-holder mt-3">
									<div
										class="mad-product-cat"
									>
										Makeup products
									</div>
								</div>
								<div class="mad-title-wrap">
									<h5 class="mad-product-title">
											Cosmetic Wipes{" "}
									</h5>
									<div class="mad-price">Ksh 899</div>
								</div>
							</div>
							<button class="btn btn-big">
								<i class="material-icons-outlined">
									shopping_bag
								</i>
								<span>Order this Item</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
