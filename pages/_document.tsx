/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
	return (
		<Html>
			<Head />
			<body>
				<Main />
				{/* <!-- JavaScript Bundle with Popper --> */}
				<script
					src='https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js'
					integrity='sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2'
					crossOrigin='anonymous'></script>
				<script src='https://cdn.jsdelivr.net/gh/mcstudios/glightbox/dist/js/glightbox.min.js' />
				<script src='/js/index.js' />
				<NextScript />
			</body>
		</Html>
	)
}

export default Document
