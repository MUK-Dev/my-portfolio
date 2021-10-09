import "materialize-css/dist/css/materialize.min.css";

import "../styles/_app.css";

function MyApp({ Component, pageProps }) {
	return (
		<div className="app">
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
