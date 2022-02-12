import "../styles/globals.css";

import { Provider } from "react-redux";

import Layout from "../components/layout";
import store from "../store/app/store";

import type { AppProps } from "next/app";
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}

export default MyApp;
