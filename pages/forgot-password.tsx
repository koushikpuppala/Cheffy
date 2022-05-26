/* eslint-disable jsx-a11y/anchor-is-valid */
import type { NextPage } from 'next'
import Link from 'next/link'
import style from '../styles/forgot-password.module.scss'
import ReCAPTCHA from 'react-google-recaptcha'

const ForgotPassword: NextPage = () => {
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
								Forgot Password?
							</h1>
							Have trouble remembering your Cheffy password?
						</div>
						<div className={`card-body ${style.card_body}`}>
							<form className='col-md-8'>
								<div className='input-group col-12'>
									<div className='input-group-text col-2'>
										<i className='bi bi-envelope col-12'></i>
									</div>
									<div className='form-floating col-10'>
										<input
											type='email'
											className='form-control'
											id='email'
											placeholder='name@example.com'
											style={{
												borderRadius: '0 0.375rem 0.375rem 0',
											}}
										/>
										<label
											htmlFor='email'
											style={{
												color: '#000',
											}}>
											Email address
										</label>
									</div>
								</div>
								<p className={`card-text ${style.card_body_text}`}>
									Please enter your email in the box above. We will send you a
									link to access further instructions.
								</p>
								<ReCAPTCHA sitekey='6LeHiB4gAAAAAMawmJ8mWMnKn_zideNkfGdhXWPB' />
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

export default ForgotPassword
