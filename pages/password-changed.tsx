/* eslint-disable jsx-a11y/anchor-is-valid */
import { NextPage } from 'next'
import Link from 'next/link'
import style from '../styles/password-reseted.module.scss'

const PasswordReseted: NextPage = () => {
	return (
		<>
			<section id='hero' className={style.hero}>
				<div className={`${style.container}`}>
					<div className={`card text-center ${style.card}`}>
						<div className={`card-header ${style.card_head}`}>
							<div className={`${style.symbol}`}>
								<span className={`${style.symbol_item}`}>
									<i className='bi bi-check'></i>
								</span>
							</div>
							<h1 className={`card-title ${style.card_head_title}`}>
								Password Changed Successfully
							</h1>
							Your password has been changed successfully. Click below to sign in
						</div>
						<div className={`card-body ${style.card_body}`}>
							<i className={style.reset_pass}>CONTINUE</i>
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

export default PasswordReseted
