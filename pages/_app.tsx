import 'bootstrap/dist/css/bootstrap.min.css'
import 'boxicons/css/boxicons.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'glightbox/dist/css/glightbox.min.css'
import 'aos/dist/aos.css'
import 'animate.css/animate.min.css'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'

const Application = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />
}

export default Application
