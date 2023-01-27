import Head from 'next/head'
import "antd/dist/antd.css";
import '../styles/vendors/owl-carousel/assets/owl.carousel.min.css'
import '../styles/vendors/arcticmodal/jquery.arcticmodal-0.3.css'
import '../styles/css/fontawesome-all.min.css'
import "../styles/css/jquery.fancybox.min.css";
import '../styles/css/bootstrap.min.css'
import '../styles/vendors/revolution/css/settings.css'
import '../styles/vendors/revolution/css/layers.min.css'
import '../styles/vendors/revolution/css/navigation.min.css'
import '../styles/css/style.css'
import '../styles/css/responsive.css'

// Components
import Preloader from "../components/preloader"
import Header from "../components/header"
import Footer from "../components/footer"

function MyApp({ Component, pageProps }) {
  return (
		<>
			<Head>
				<title>Makeup By Linda</title>
			</Head>
      <div id="mad-page-wrapper" className="mad-page-wrapper">
        <Preloader />
        <Header />
        <Component {...pageProps} />
        <Footer />
    </div>
		</>
  );
}

export default MyApp
