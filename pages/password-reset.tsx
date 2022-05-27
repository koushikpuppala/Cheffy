/* eslint-disable jsx-a11y/anchor-is-valid */
import type { NextPage } from 'next'
import Link from 'next/link'
import style from '../styles/password-reset.module.scss'

const PasswordReset: NextPage = () => {
	return (
		<>
			<section id='hero' className={style.hero}>
				<div className={`${style.container}`}>
					<div className={style.symbol}>
						<div className={style.left}></div>
						<div className={style.line}></div>
						<div className={style.center}>
							<i className='bi bi-shield-lock'></i>
						</div>
						<div className={style.right}></div>
					</div>
					<h1 className={`${style.card_title}`}>Set a New Password</h1>
					<p className={style.card_text}>
						Your new password must be different to previously used passwords.
					</p>
					<form className='col-md-10'>
						<div className={`input-group col-12 ${style.form_group}`}>
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
								<label htmlFor='password'>Enter Password</label>
							</div>
						</div>
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

export default PasswordReset
