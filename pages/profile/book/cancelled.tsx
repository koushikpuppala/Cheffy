/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import type { NextPage } from 'next'
import { ProfileFooter, ProfileNavbar } from '../../../components'
import style from '../../../styles/profile/book/upcoming.module.scss'

const BookCancelled: NextPage = () => {
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
						<h3 className='fw-bold pb-3'>Booking</h3>
						<ul className='nav nav-tabs'>
							<li className='nav-item'>
								<a className='nav-link' aria-current='page' href='#'>
									Upcoming
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='#'>
									Completed
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link active' href='#'>
									Cancelled
								</a>
							</li>
						</ul>
						<div className='py-2'>
							<div className={style.main_card}>
								<div className='d-flex flex-column col-5'>
									<img src='/Images/Rectangle_15.png' className='col-12 pb-1' />
									<div className='d-flex col-12'>
										<img src='/Images/Rectangle_16.png' className='col-6' />
										<img
											src='/Images/Rectangle_17.png'
											className='col-6 ps-1'
										/>
									</div>
								</div>
								<div className='d-flex col-7 px-4 flex-column'>
									<h2>Deluxe Twin Bed</h2>
									<span className='text-primary pb-3'>
										<i className='bi bi-geo-alt pe-1'></i>
										Sheikh Zayed Rd, Dubai, Dubai
									</span>
									<div className='d-flex flex-row p-2 bg-info bg-opacity-10 justify-content-between rounded'>
										<span className='d-flex flex-column px-1'>
											<span className='text-muted'>Check-in</span>
											May 17
										</span>
										<div className={style.line} />
										<span className='d-flex flex-column px-1'>
											<span className='text-muted'>Check-out</span>
											May 21
										</span>
										<div className={style.line} />
										<span className='d-flex flex-column px-1'>
											<span className='text-muted'>Nights</span>4
										</span>
									</div>
									<span className='d-flex align-items-center pt-2'>
										<i
											className='bi bi-check2'
											style={{
												color: '#04aa6d',
												fontSize: '1.25rem',
											}}></i>
										Pay the property at Check-in
									</span>
									<div
										className='alert alert-danger d-flex align-items-center'
										role='alert'>
										<i className='bi bi-exclamation-octagon pe-1'></i>
										<div>Cancelled on May 18, 2022</div>
									</div>
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

export default BookCancelled
