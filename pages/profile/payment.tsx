/* eslint-disable jsx-a11y/anchor-is-valid */
import type { NextPage } from 'next'
import { ProfileFooter, ProfileNavbar } from '../../components'
import style from '../../styles/profile/payment.module.scss'

const Payment: NextPage = () => {
	return (
		<>
			<ProfileNavbar />
			<section id='hero' className={`${style.hero} bg-light py-3`}>
				<div className='d-flex flex-row container'>
					<div className='col-3 pe-4'>
						<div className={style.card}>
							<ul className='p-0'>
								<li className='d-flex align-items-center'>
									<i className='bi bi-person fs-5 pe-2'></i>
									Profile
								</li>
								<hr />
								<li className='d-flex align-items-center'>
									<i className='bi bi-calendar2-date fs-5 pe-2'></i>
									<strong>Booking</strong>
								</li>
								<hr />
								<li className='d-flex align-items-center'>
									<i className='bi bi-credit-card fs-5 pe-2'></i>
									Payment method
								</li>
								<hr />
								<li className='d-flex align-items-center'>
									<i className='bi bi-chat-square-dots fs-5 pe-2'></i>
									Reviews
								</li>
							</ul>
						</div>
					</div>
					<div className='col-6'>
						<h2>Payment method</h2>
						<div className='input-group'>
							<div
								className='input-group-text col-1'
								style={{
									backgroundColor: '#fff',
								}}>
								<i className='bi bi-credit-card-2-front fs-4 col-12'></i>
							</div>
							<select
								className='form-select'
								id='autoSizingSelect'
								style={{
									borderRadius: '0 0.375rem 0.375rem 0',
									borderLeft: 'none',
								}}>
								<option selected={true}>Visa / MasterCard / JCB / Amex</option>
								<option value='1'>Visa</option>
								<option value='2'>MasterCard</option>
								<option value='3'>JCB</option>
								<option value='4'>Amex</option>
							</select>
						</div>
						<br />
						<div className='input-group'>
							<div
								className='input-group-text col-1'
								style={{
									backgroundColor: '#fff',
								}}>
								<i className='bi bi-credit-card-2-front fs-4 col-12'></i>
							</div>
							<div className='form-floating col-11'>
								<input
									type='text'
									className='form-control'
									id='card-number'
									placeholder='Card Number'
									style={{
										borderRadius: '0 0.375rem 0.375rem 0',
										borderLeft: 'none',
									}}
								/>
								<label htmlFor='card-number'>Card Number</label>
							</div>
						</div>
						<br />
						<div className='d-flex flex-row'>
							<div className='col-6 pe-1'>
								<div className='input-group'>
									<div
										className='input-group-text col-2'
										style={{
											backgroundColor: '#fff',
										}}>
										<i className='bi bi-calendar2-date fs-4 col-12'></i>
									</div>
									<div className='form-floating col-10'>
										<input
											type='text'
											className='form-control'
											id='expiry-date'
											placeholder='Expiry date'
											style={{
												borderRadius: '0 0.375rem 0.375rem 0',
												borderLeft: 'none',
											}}
										/>
										<label htmlFor='expiry-date'>Expiry date</label>
									</div>
								</div>
							</div>
							<div className='col-6 ps-1'>
								<div className='input-group'>
									<div
										className='input-group-text col-2'
										style={{
											backgroundColor: '#fff',
										}}>
										<i className='bi bi-credit-card-2-front fs-4 col-12'></i>
									</div>
									<div className='form-floating col-10'>
										<input
											type='text'
											className='form-control'
											id='cvc-cvv'
											placeholder='Card Number'
											style={{
												borderRadius: '0 0.375rem 0.375rem 0',
												borderLeft: 'none',
											}}
										/>
										<label htmlFor='cvc-cvv'>CVC / CVV</label>
									</div>
								</div>
							</div>
						</div>
						<br />
						<div className='d-flex flex-row justify-content-evenly'>
							<button className={style.btn_save}>Save</button>
							<button className={style.btn_cancel}>Cancel</button>
						</div>
					</div>
					<div className='col-3 ps-4'>
						<div className={style.promotion}>
							<span>Promotion</span>
						</div>
						<br />
						<div className={style.promotion}>
							<span>Promotion</span>
						</div>
					</div>
				</div>
			</section>
			<ProfileFooter />
		</>
	)
}

export default Payment
