/* eslint-disable jsx-a11y/anchor-is-valid */
import { NextPage } from 'next'
import Link from 'next/link'
import style from '../styles/password-changed.module.scss'

const PasswordChanged: NextPage = () => {
	return (
		<>
			<section id='hero' className={style.hero}>
				<div className={`${style.container}`}>
					<div className={style.symbol}>
						<div className={style.center}>
							<i className='bi bi-check'></i>
						</div>
					</div>
					<h1 className={`${style.card_title}`}>Password Changed Successfully</h1>
					<p className={style.card_text}>
						Your password has been changed successfully. Click below to sign in
					</p>
					<button className={`${style.reset_pass} col-md-12`}>CONTINUE</button>
					<Link href='#'>
						<a className={`bi bi-arrow-left ${style.back_sign_in}`}>
							&nbsp;Back to Sign In
						</a>
					</Link>
				</div>
			</section>
		</>
	)
}

export default PasswordChanged
