import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return {...initialProps}
  }

  render() {
    return (
		<Html lang="en">
			<Head>
				<meta name="description" content="" />
				<meta name="theme-color" content="#ffffff" />
				{/* <!--================ Mobile specific metas ================--> */}
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				{/* <!--================ Favicon ================--> */}
				<link rel="shortcut icon" href="images/favicon.ico" />
				{/* <!--================ Google web fonts ================--> */}
				<link
					href="https://fonts.googleapis.com/css2?family=Judson:ital,wght@0,400;0,700;1,400&family=Nanum+Gothic:wght@400;700;800&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css?family=Material+Icons%7CMaterial+Icons+Outlined%7CMaterial+Icons+Two+Tone%7CMaterial+Icons+Round%7CMaterial+Icons+Sharp"
					rel="stylesheet"
				/>
			</Head>
			<body className="disable-scrollbars mad-body--scheme-brown">
				<Main />
				<NextScript />
				<script src="/vendors/jquery-3.6.0.min.js"></script>
				<script src="/vendors/jquery.easing.1.3.min.js"></script>
				<script src="/vendors/monkeysan.jquery.nav.1.0.js"></script>
				<script src="/vendors/modernizr.js"></script>
				<script src="/vendors/owl-carousel/owl.carousel.min.js"></script>
				<script src="/vendors/arcticmodal/jquery.arcticmodal-0.3.min.js"></script>
				<script src="/vendors/monkeysan.validator.min.js"></script>
				<script src="/vendors/handlebars-v4.0.5.min.js"></script>
				<script src="/vendors/retina.min.js"></script>
				<script src="/vendors/fancybox/jquery.fancybox.min.js"></script>
				<script src="/vendors/revolution/js/jquery.themepunch.tools.min.js"></script>
				<script src="/vendors/revolution/js/jquery.themepunch.revolution.min.js"></script>
				<script src="/js/modules/mad.newsletter-form.min.js"></script>
				<script src="/js/modules/mad.alert-box.min.js"></script>
				<script src="/js/modules/mad.sticky-header-section.min.js"></script>
				<script src="/js/mad.app.js"></script>

				<script
					type="text/javascript"
					src="/vendors/revolution/js/extensions/revolution.extension.slideanims.min.js"
				></script>
				<script
					type="text/javascript"
					src="/vendors/revolution/js/extensions/revolution.extension.layeranimation.min.js"
				></script>
				<script
					type="text/javascript"
					src="/vendors/revolution/js/extensions/revolution.extension.navigation.min.js"
				></script>
			</body>
		</Html>
	);
  }
}

export default MyDocument
