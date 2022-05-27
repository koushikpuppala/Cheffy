/* eslint-disable jsx-a11y/anchor-is-valid */
import type { NextPage } from 'next'
import Link from 'next/link'
import style from '../styles/check-email.module.scss'

const CheckEmail: NextPage = () => {
	return (
		<>
			<section id='hero' className={style.hero}>
				<div className={`${style.container}`}>
					<div className={style.symbol}>
						<div className={style.left}></div>
						<div className={style.line}></div>
						<div className={style.center}>
							<i className='bi bi-envelope'></i>
						</div>
						<div className={style.line}></div>
						<div className={style.right}></div>
					</div>
					<h1 className={`${style.card_title}`}>Check your email</h1>
					<p className={style.card_text}>
						We sent a password reset link to <br /> johndoe@email.com
					</p>
					<button className={`${style.reset_pass} col-md-12`}>
						I HAVE CLICKED THE LINK
					</button>
					<p className={style.card_text}>
						Didn’t receive the email? <Link href='#'>Click to resend</Link>
					</p>
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

export default CheckEmail
