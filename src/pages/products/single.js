import React from "react";
import { Tabs } from "antd";
import Slider from "../../components/products/slider";

const { TabPane } = Tabs;

const product = () => {
	return (
		<>
			<Slider />
			<div class="mad-content">
				<div class="container-fluid">
					<div class="content-element-main">
						<div class="mad-product mad-product-single">
							<div class="mad-col">
								<div class="image-preview-container type-2">
									<div class="image-preview">
										<span class="mad-label">Sale</span>
										<a
											href="https://velikorodnov.com/html/legasy/images/824x824_product1.jpg"
											data-zoom-image="images/824x824_product1.jpg"
											data-fancybox="group"
										>
											<img
												id="zoom-image"
												src="https://velikorodnov.com/html/legasy/images/824x824_product1.jpg"
												alt=""
											/>
										</a>
										<a
											href="https://velikorodnov.com/html/legasy/images/824x824_product1.jpg"
											class="mad-zoom-img"
											data-fancybox="group"
										>
											<img
												src="https://velikorodnov.com/html/legasy/images/crosshair2.svg"
												alt=""
											/>
										</a>
									</div>
									<div class="mad-thumb-holer">
										<div
											class="mad-product-thumbs mad-grid mad-grid--cols-4 owl-carousel no-dots"
											id="thumbnails"
										>
											<div class="mad-grid-item">
												<a
													class="active"
													href="https://velikorodnov.com/html/legasy/images/824x824_product1.jpg"
													data-image="https://velikorodnov.com/html/legasy/images/824x824_product1.jpg"
												>
													<img
														src="https://velikorodnov.com/html/legasy/images/192x192_product1.jpg"
														alt=""
													/>
												</a>
											</div>
											<div class="mad-grid-item">
												<a
													href="https://velikorodnov.com/html/legasy/images/824x824_product2.jpg"
													data-image="images/824x824_product3.jpg"
													data-fancybox="group"
												>
													<img
														src="https://velikorodnov.com/html/legasy/images/192x192_product2.jpg"
														alt=""
													/>
												</a>
											</div>
											<div class="mad-grid-item">
												<a
													href="https://velikorodnov.com/html/legasy/images/824x824_product2.jpg"
													data-image="images/824x824_product2.jpg"
													data-fancybox="group"
												>
													<img
														src="https://velikorodnov.com/html/legasy/images/192x192_product3.jpg"
														alt=""
													/>
												</a>
											</div>
											<div class="mad-grid-item">
												<a
													href="https://velikorodnov.com/html/legasy/images/824x824_product4.jpg"
													data-image="images/824x824_product4.jpg"
													data-fancybox="group"
												>
													<img
														src="https://velikorodnov.com/html/legasy/images/192x192_product4.jpg"
														alt=""
													/>
												</a>
											</div>
											<div class="mad-grid-item">
												<a
													class="active"
													href="https://velikorodnov.com/html/legasy/images/824x824_product1.jpg"
													data-image="https://velikorodnov.com/html/legasy/images/824x824_product1.jpg"
												>
													<img
														src="https://velikorodnov.com/html/legasy/images/192x192_product1.jpg"
														alt=""
													/>
												</a>
											</div>
											<div class="mad-grid-item">
												<a
													href="https://velikorodnov.com/html/legasy/images/824x824_product2.jpg"
													data-image="https://velikorodnov.com/html/legasy/images/824x824_product2.jpg"
												>
													<img
														src="https://velikorodnov.com/html/legasy/images/192x192_product2.jpg"
														alt=""
													/>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="mad-col">
								<h2 class="mad-product-title">
									Premium Body Cream
								</h2>
								<div class="mad-price">Ksh 3999</div>
								<p class="content-element-4 mad-text-medium">
									Praesent justo dolor, lobortis quis,
									lobortis dignissim, pulvinar ac, lorem.
									Vestibulum sed ante. Donec sagittis euismod
									purus.Sed ut perspiciatis unde omnis iste
									natus error sit voluptatem accusantium
									doloremque laudantium.
								</p>
								<div class="form-control content-element-4">
									<div class="content-element-2">
										<label>Quantity</label>
										<div class="btn-set big-btns">
											<div class="quantity type-2">
												<input
													type="text"
													value="1"
													readonly=""
												/>
												<button
													type="button"
													class="qty-plus"
												>
													<i class="material-icons">
														add
													</i>
												</button>
												<button
													type="button"
													class="qty-minus"
												>
													<i class="material-icons">
														remove
													</i>
												</button>
											</div>
											<a href="#" class="btn btn-big">
												Order this item
											</a>
										</div>
									</div>
								</div>
								<div class="mad-rest-info size-2">
									<div class="mad-rest-info-item">
										<span class="mad-rest-title">
											Categories
										</span>
										<span>
											<a href="#" class="mad-link">
												Makeup Products
											</a>
										</span>
									</div>
								</div>
							</div>
						</div>
						<div class="container">
							<Tabs tabPosition="left">
								<TabPane
									tab={
										<span className="tabopt">
											Description
										</span>
									}
									key="1"
								>
									<p>
										Mauris fermentum dictum magna. Sed
										laoreet aliquam leo. Ut tellus dolor,
										dapibus eget, elementum vel, cursus
										eleifend, elit. Aenean auctor wisi et
										urna. Aliquam erat volutpat. Duis ac
										turpis. Integer rutrum ante eu
										lacus.Vestibulum libero nisl, porta vel,
										scelerisque eget, malesuada at, neque.
										Duis ac turpis. Donec sit amet eros.
										Lorem ipsum dolor sit amet, consectetuer
										adipiscing elit. Mauris fermentum dictum
										magna. Donec eget tellus non erat
										lacinia fermentum. Donec in velit vel
										ipsum auctor pulvinar. Vestibulum
										iaculis lacinia est. Proin dictum
										elementum velit. Fusce euismod consequat
										ante. Lorem ipsum dolor sit amet,
										consectetuer adipis.
									</p>
								</TabPane>
								<TabPane
									tab={
										<span className="tabopt">
											Additional Information
										</span>
									}
									key="2"
								>
									<div class="mad-table-wrap">
										<table class="mad-table mad-table--vertical">
											<tbody>
												<tr>
													<th>Weight</th>
													<td>300 g</td>
												</tr>
												<tr>
													<th>Dimensions</th>
													<td>20 x 10 x 5 cm</td>
												</tr>
												<tr>
													<th>Material</th>
													<td>Cotton</td>
												</tr>
												<tr>
													<th>Color</th>
													<td>Blue</td>
												</tr>
											</tbody>
										</table>
									</div>
								</TabPane>
							</Tabs>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default product;
