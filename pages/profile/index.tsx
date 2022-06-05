import type { NextPage } from 'next'
import { ProfileFooter, ProfileNavbar } from '../../components'
import style from '../../styles/profile/index.module.scss'

const Profile: NextPage = () => {
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
									<strong>Profile</strong>
								</li>
								<hr />
								<li className='d-flex align-items-center'>
									<i className='bi bi-calendar2-date fs-5 pe-2'></i>
									Booking
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
						<div className='pb-3'>
							<h3 className='fw-bold'>User details</h3>
							<div className={style.user_name}>
								<div className='col-3 pe-3'>
									<img src='/Images/blog_avatar.png' alt='' />
								</div>
								<div className='col-9 ps-3 d-flex flex-row justify-content-between'>
									<div className='d-flex flex-column justify-content-evenly'>
										<span>Name</span>
										<strong>Jhon Doe</strong>
										<br />
										<span className='text-muted'>
											Last updated: <br />
											{new Date().toLocaleTimeString()}
										</span>
									</div>
									<div className='d-flex flex-row justify-content-between align-items-end'>
										<div className='px-2'>
											<button className={style.edit_btn_photo}>
												Edit Profile Photo
											</button>
										</div>
										<div className='px-2'>
											<button className={style.edit_btn_name}>
												Edit Name
											</button>
										</div>
									</div>
								</div>
							</div>
							<br />
							<div className={style.user_email}>
								<span className='text-muted'>Email address</span>
								<div>
									<span className='pe-4'>john.doe@mail.com</span>
									<span className={style.verified}>verified</span>
								</div>
							</div>
							<br />
							<div className={style.user_password}>
								<div className='d-flex flex-column'>
									<span className='text-muted'>Password</span>
									<span>••••••••••</span>
								</div>
								<button className={style.btn}>Change</button>
							</div>
							<br />
							<div className={style.user_phone}>
								<div className='d-flex flex-column'>
									<span className='text-muted'>Phone Number</span>
									<div>
										<span className='pe-4'>+19159969739</span>
										<span className={style.verified}>verified</span>
									</div>
								</div>
								<button className={style.btn}>Edit</button>
							</div>
						</div>
						<div>
							<h3 className='fw-bold'>Subscription</h3>
							<div className={style.subscription_list}>
								<div className='form-check form-check-inline'>
									<input
										className='form-check-input'
										type='radio'
										name='inlineRadioOptions'
										id='inlineRadio1'
										value='option1'
										defaultChecked={true}
									/>
									<label className='form-check-label' htmlFor='inlineRadio1'>
										Daily
									</label>
								</div>
								<div className='form-check form-check-inline'>
									<input
										className='form-check-input'
										type='radio'
										name='inlineRadioOptions'
										id='inlineRadio2'
										value='option2'
									/>
									<label className='form-check-label' htmlFor='inlineRadio2'>
										Weekly
									</label>
								</div>
								<div className='form-check form-check-inline'>
									<input
										className='form-check-input'
										type='radio'
										name='inlineRadioOptions'
										id='inlineRadio3'
										value='option3'
									/>
									<label className='form-check-label' htmlFor='inlineRadio3'>
										Monthly
									</label>
								</div>
								<div className='form-check form-check-inline'>
									<input
										className='form-check-input'
										type='radio'
										name='inlineRadioOptions'
										id='inlineRadio4'
										value='option4'
									/>
									<label className='form-check-label' htmlFor='inlineRadio4'>
										Never
									</label>
								</div>
							</div>
							<div className={style.subscription_check_list}>
								<div className='form-check'>
									<input
										className='form-check-input'
										type='checkbox'
										value=''
										id='flexCheckDefault'
										defaultChecked={true}
									/>
									<label className='form-check-label' htmlFor='flexCheckDefault'>
										I would like to receive booking assist reminders
									</label>
								</div>
								<div className='form-check'>
									<input
										className='form-check-input'
										type='checkbox'
										value=''
										id='flexCheckChecked'
										defaultChecked={true}
									/>
									<label className='form-check-label' htmlFor='flexCheckChecked'>
										I would like to receive emails about Metoospace promotions
									</label>
								</div>
								<div className='form-check'>
									<input
										className='form-check-input'
										type='checkbox'
										value=''
										id='flexCheckChecked'
										defaultChecked={true}
									/>
									<label
										className='form-check-label'
										style={{
											width: 'max-content',
										}}
										htmlFor='flexCheckChecked'>
										I would like to know about information and offers related to
										my upcoming trip
									</label>
								</div>
							</div>
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

export default Profile
