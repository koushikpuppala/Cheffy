/* eslint-disable jsx-a11y/anchor-is-valid */
import type { NextPage } from 'next'
import Link from 'next/link'
import style from '../styles/check-email.module.scss'

const CheckEmail: NextPage = () => {
	return (
		<>
			<section id='hero' className={style.hero}>
				<div className={`${style.container}`}>
					<div className={`card text-center ${style.card}`}>
						<div className={`card-header ${style.card_head}`}>
							<div className={`${style.symbol}`}>
								<span className={`${style.symbol_item}`}>
									<i className='bi bi-envelope'></i>
								</span>
							</div>
							<h1 className={`card-title ${style.card_head_title}`}>
								Check your email
							</h1>
							We sent a password reset link to <br />
							johndoe@email.com
						</div>
						<div className={`card-body ${style.card_body}`}>
							<i className={style.reset_pass}>I HAVE CLICKED THE LINK</i>
							<p className={`card-text ${style.card_body_text}`}>
								Didn’t receive the email? <Link href='#'>Click to resend</Link>
							</p>
							<Link href='#'>
								<a>
									<i className='bi bi-arrow-left'></i> Back to Sign In
								</a>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default CheckEmail
