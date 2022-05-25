import type { NextComponentType, NextPageContext } from 'next'
import type { HeaderProps } from '../interface'
import Head from 'next/head'

const Header: NextComponentType<NextPageContext, HeaderProps, HeaderProps> = (
	props: HeaderProps
) => {
	const title = props.title || 'Cheffy'
	const description = props.description || 'Next.js'
	const keywords = props.keywords || 'Next.js'

	return (
		<Head>
			<meta charSet='utf-8' />
			<meta content='width=device-width, initial-scale=1.0' name='viewport' />

			<title>{title}</title>
			<meta content={description} name='description' />
			<meta content={keywords} name='keywords' />

			{/* <!-- Favicons --> */}
			<link href='/favicon.png' rel='icon' />
			<link href='/favicon.png' rel='apple-touch-icon' />
		</Head>
	)
}

export default Header
