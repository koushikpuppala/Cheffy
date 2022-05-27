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
					<div className={style.symbol}>
						<div className={style.left}></div>
						<div className={style.center}>
							<i className='bi bi-shield-lock'></i>
						</div>
						<div className={style.line}></div>
						<div className={style.right}></div>
					</div>
					<h1 className={`${style.card_title}`}>Forgot Password?</h1>
					<p className={style.card_text}>
						Have trouble remembering your Cheffy password?
					</p>
					<form className='col-md-8'>
						<div className={`input-group col-12 ${style.form_group}`}>
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
						<p className={style.card_text}>
							Please enter your email in the box above. We will send you a link to
							access further instructions.
						</p>
						<ReCAPTCHA sitekey='6LeHiB4gAAAAAMawmJ8mWMnKn_zideNkfGdhXWPB' />
						<button className={`${style.reset_pass} col-md-12`}>RESET PASSWORD</button>
						<Link href='#'>
							<a className={`bi bi-arrow-left ${style.back_sign_in}`}>
								&nbsp;Back to Sign In
							</a>
						</Link>
					</form>
				</div>
			</section>
		</>
	)
}

export default ForgotPassword
