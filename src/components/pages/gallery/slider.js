import React from 'react'

const homeslider = () => {
    return (
		<div
			className="mad-breadcrumb with-bg-img with-overlay"
			// data-bg-image-src="/images/1920x512_bg1.jpg"
			style={{
				backgroundColor: "#674939",
			}}
		>
			<div className="container wide">
				<h1 className="mad-page-title">Galleries</h1>
				<nav className="mad-breadcrumb-path">
					<span>
						<a href="/" className="mad-link">
							Home
						</a>
					</span>{" "}
					/<span>Galleries</span>
				</nav>
			</div>
		</div>
	);
}

export default homeslider
