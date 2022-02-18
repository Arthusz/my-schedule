import "../styles/globals.css";

import { Provider } from "react-redux";

import Layout from "../components/layout";
import store from "../store/app/store";

import type { AppProps } from "next/app";
import { SWRConfig } from "swr";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<SWRConfig
				value={{
					refreshInterval: 3000,
					fetcher: (resource, init) =>
						fetch("http://localhost:3030" + resource, init).then((res) =>
							res.json()
						),
				}}
			>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</SWRConfig>
		</Provider>
	);
}

export default MyApp;
