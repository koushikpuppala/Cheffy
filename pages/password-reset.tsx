/* eslint-disable jsx-a11y/anchor-is-valid */
import type { NextPage } from 'next'
import Link from 'next/link'
import style from '../styles/password-reset.module.scss'

const PasswordReset: NextPage = () => {
	return (
		<>
			<section id='hero' className={style.hero}>
				<div className={`${style.container}`}>
					<div className={`card text-center ${style.card}`}>
						<div className={`card-header ${style.card_head}`}>
							<div className={`${style.symbol}`}>
								<span className={`${style.symbol_item}`}>
									<i className='bi bi-shield-lock'></i>
								</span>
							</div>
							<h1 className={`card-title ${style.card_head_title}`}>
								Set a new Password
							</h1>
							Your new password must be different to previously used passwords.
						</div>
						<div className={`card-body ${style.card_body}`}>
							<form className='col-md-8'>
								<div className='input-group col-12'>
									<div className='input-group-text col-2'>
										<i className='bi bi-shield-lock col-12'></i>
									</div>
									<div className='form-floating col-10'>
										<input
											type='password'
											className='form-control'
											id='password'
											placeholder='Cheffy@123'
											style={{
												borderRadius: '0 0.375rem 0.375rem 0',
											}}
										/>
										<label
											htmlFor='password'
											style={{
												color: '#000',
											}}>
											Enter Password
										</label>
									</div>
								</div>
								<i className={style.reset_pass}>Reset Password</i>
								<Link href='/'>
									<a>
										<i className='bi bi-arrow-left'></i> Back to Sign In
									</a>
								</Link>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default PasswordReset
