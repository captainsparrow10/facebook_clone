import Head from "next/head";
import Header from "../components/header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Facebook</title>
				<link rel="shortcut icon" href="/facebook.ico" />
				<meta
					name="google-site-verification"
					content="sKR-FNlFAROcYXngJBHUpFSFCYwj1Xze-v5VfkpPJmE"
				/>
			</Head>
			<Header />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
