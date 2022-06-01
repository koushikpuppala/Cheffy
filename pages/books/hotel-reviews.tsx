/* eslint-disable max-len */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import type { NextPage } from 'next'
import Image from 'next/image'
import { BooksFooter, BooksNavbar } from '../../components'
import style from '../../styles/books/hotel-reviews.module.scss'

const HotelFacilities: NextPage = () => {
	return (
		<>
			<BooksNavbar />
			<section id='hero' className={`d-flex ${style.hero} bg-light flex-column py-3 px-5`}>
				<div className='d-flex flex-row container-fluid position-relative'>
					<div className='d-flex flex-column justify-content-evenly align-items-start text-center col-7'>
						<h1>Dusit Thani Dubai</h1>
						<div className='d-flex flex-row align-items-center justify-content-evenly'>
							<div className='text-center'>
								<i className={`bi bi-star-fill ${style.star}`}></i>
								<i className={`bi bi-star-fill ${style.star}`}></i>
								<i className={`bi bi-star-fill ${style.star}`}></i>
								<i className={`bi bi-star-fill ${style.star}`}></i>
								<i className={`bi bi-star-fill ${style.star}`}></i>
								<span className='px-2 d-inline-flex'>5 Star</span>
							</div>
							<div className={style.line}></div>
							<div>
								<span className='fw-bold'>4.6/5.0</span>
								<span className='px-2 d-inline-flex'>Wonderful (295 reviews)</span>
							</div>
							<div className={style.line}></div>
							<div className={style.location}>
								<span className='bi bi-geo-alt'>Sheikh Zayed Rd, Dubai, Dubai</span>
							</div>
						</div>
						<div className='d-flex flex-row'>
							<div className='d-flex py-2'>
								<span className={style.tags}>Car park</span>
							</div>
							<div className='d-flex p-2'>
								<span className={style.tags}>Kitchen</span>
							</div>
							<div className='d-flex p-2'>
								<span className={style.tags}>Swimming pool</span>
							</div>
							<div className='d-flex p-2'>
								<span className={style.tags}>Elevator</span>
							</div>
							<div className='d-flex p-2'>
								<span className={style.tags}>Balcony or terrace</span>
							</div>
							<div className='d-flex p-2'>
								<span className={style.tags}>Pay at stay</span>
							</div>
						</div>
					</div>
					<div className='col-5 d-flex flex-column justify-content-evenly align-items-end'>
						<span>
							<i className='bi bi-heart'></i> &nbsp;
							<i className='bi bi-share'></i>
						</span>
						<span className={style.discount}>13% OFF</span>
						<div className={style.price}>
							<span className={style.price_dis}>
								Per night <br /> including taxes & fees
							</span>
							<div className={style.price_line} />
							<span className={style.price_value}>$151</span>
						</div>
					</div>
				</div>
				<div className='d-flex'>
					<div className='col-6 p-2'>
						<Image
							width={628}
							height={504}
							layout='responsive'
							src='/Images/Rectangle_1.png'
							className='img-fluid rounded'
							alt='Rectangle_1'
						/>
					</div>
					<div className='col-6 d-flex py-1'>
						<div className='col-6'>
							<Image
								width={302}
								height={240}
								layout='responsive'
								src='/Images/Rectangle_4.png'
								className='img-fluid rounded p-1'
								alt='Rectangle_4'
							/>
							<Image
								width={302}
								height={240}
								layout='responsive'
								src='/Images/Rectangle_6.png'
								className='img-fluid rounded p-1'
								alt='Rectangle_6'
							/>
						</div>
						<div className='col-6'>
							<Image
								width={302}
								height={240}
								layout='responsive'
								src='/Images/Rectangle_5.png'
								className='img-fluid rounded p-1'
								alt='Rectangle_5'
							/>
							<Image
								width={302}
								height={240}
								layout='responsive'
								src='/Images/Rectangle_7.png'
								className='img-fluid rounded p-1'
								alt='Rectangle_7'
							/>
						</div>
					</div>
				</div>
			</section>

			<main className={`bg-light ${style.main}`}>
				<div className='d-flex flex-row px-5 py-3'>
					<ul className='nav nav-tabs w-100'>
						<li className='nav-item'>
							<a className='nav-link' aria-current='page' href='#'>
								Overview
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#'>
								Rooms
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#'>
								Facilities
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='#'>
								Location
							</a>
						</li>
						<li className='nav-item'>
							<a className='nav-link active' href='#'>
								Reviews
							</a>
						</li>
					</ul>
				</div>
				<div className='d-flex flex-row px-5 pb-3'>
					<div className='col-2'>
						<div>
							<h3>Overall rating</h3>
							<div className='d-flex pb-4 align-items-center'>
								<div
									style={{
										fontSize: '2.5rem',
										border: '#04aa6d solid 1px',
										background: '#04aa6d',
										padding: '1rem',
										borderRadius: '2rem',
										fontWeight: 'bold',
										color: '#fff',
									}}>
									8.6
								</div>
								<div className='d-flex flex-column px-2'>
									<span>Excellent</span>
									<span
										style={{
											fontSize: '0.8rem',
										}}>
										From 7,338 reviews
									</span>
								</div>
							</div>
							<div className='py-1'>
								<span className='w-100 d-flex justify-content-between'>
									<i>Cleanliness</i>
									<i>8.6</i>
								</span>
								<div
									className='progress'
									style={{
										height: '10px',
									}}>
									<div
										className='progress-bar bg-warning'
										role='progressbar'
										style={{ width: '75%' }}></div>
								</div>
							</div>
							<div className='py-1'>
								<span className='w-100 d-flex justify-content-between'>
									<i>Location</i>
									<i>8.6</i>
								</span>
								<div
									className='progress'
									style={{
										height: '10px',
									}}>
									<div
										className='progress-bar bg-warning'
										role='progressbar'
										style={{ width: '75%' }}></div>
								</div>
							</div>
							<div className='py-1'>
								<span className='w-100 d-flex justify-content-between'>
									<i>Service</i>
									<i>8.6</i>
								</span>
								<div
									className='progress'
									style={{
										height: '10px',
									}}>
									<div
										className='progress-bar bg-warning'
										role='progressbar'
										style={{ width: '75%' }}></div>
								</div>
							</div>
							<div className='py-1'>
								<span className='w-100 d-flex justify-content-between'>
									<i>Facilities</i>
									<i>8.6</i>
								</span>
								<div
									className='progress'
									style={{
										height: '10px',
									}}>
									<div
										className='progress-bar bg-warning'
										role='progressbar'
										style={{ width: '75%' }}></div>
								</div>
							</div>
							<div className='py-1'>
								<span className='w-100 d-flex justify-content-between'>
									<i>Room comfort and quality</i>
									<i>8.6</i>
								</span>
								<div
									className='progress'
									style={{
										height: '10px',
									}}>
									<div
										className='progress-bar bg-warning'
										role='progressbar'
										style={{ width: '75%' }}></div>
								</div>
							</div>
							<div className='py-1'>
								<span className='w-100 d-flex justify-content-between'>
									<i>Value for money</i>
									<i>8.6</i>
								</span>
								<div
									className='progress'
									style={{
										height: '10px',
									}}>
									<div
										className='progress-bar bg-warning'
										role='progressbar'
										style={{ width: '75%' }}></div>
								</div>
							</div>
						</div>
						<hr />
						<div>
							<h3>Rating</h3>
							<div className='form-check'>
								<input
									className='form-check-input'
									type='checkbox'
									id='9_exceptional'
									value='option1'
								/>
								<label className='form-check-label' htmlFor='9_exceptional'>
									9+ Exceptional
								</label>
							</div>
							<div className='form-check'>
								<input
									className='form-check-input'
									type='checkbox'
									id='8_9_excellent'
									value='option1'
								/>
								<label className='form-check-label' htmlFor='8_9_excellent'>
									8-9 Excellent
								</label>
							</div>
							<div className='form-check'>
								<input
									className='form-check-input'
									type='checkbox'
									id='7_8_very_good'
									value='option1'
								/>
								<label className='form-check-label' htmlFor='7_8_very_good'>
									7-8 Very Good
								</label>
							</div>
							<div className='form-check'>
								<input
									className='form-check-input'
									type='checkbox'
									id='6_7_good'
									value='option1'
								/>
								<label className='form-check-label' htmlFor='6_7_good'>
									6-7 Good
								</label>
							</div>
							<div className='form-check'>
								<input
									className='form-check-input'
									type='checkbox'
									id='6_below_expectation'
									value='option1'
								/>
								<label className='form-check-label' htmlFor='6_below_expectation'>
									{'< 6'} Below Expectation
								</label>
							</div>
						</div>
						<hr />
						<div>
							<h3>Time of the year</h3>
							<div className='form-check'>
								<input
									className='form-check-input'
									type='checkbox'
									id='mar_may'
									value='option1'
								/>
								<label className='form-check-label' htmlFor='mar_may'>
									Mar - May
								</label>
							</div>
							<div className='form-check'>
								<input
									className='form-check-input'
									type='checkbox'
									id='jun_aug'
									value='option1'
								/>
								<label className='form-check-label' htmlFor='jun_aug'>
									Jun - Aug
								</label>
							</div>
							<div className='form-check'>
								<input
									className='form-check-input'
									type='checkbox'
									id='sep_nov'
									value='option1'
								/>
								<label className='form-check-label' htmlFor='sep_nov'>
									Sep - Nov
								</label>
							</div>
							<div className='form-check'>
								<input
									className='form-check-input'
									type='checkbox'
									id='dec_feb'
									value='option1'
								/>
								<label className='form-check-label' htmlFor='dec_feb'>
									Dec - Feb
								</label>
							</div>
						</div>
						<hr />
						<div>
							<h3>Guests</h3>
							<div className='form-check'>
								<input
									className='form-check-input'
									type='checkbox'
									id='business_traveler'
									value='option1'
								/>
								<label className='form-check-label' htmlFor='business_traveler'>
									Business traveler
								</label>
							</div>
							<div className='form-check'>
								<input
									className='form-check-input'
									type='checkbox'
									id='couple'
									value='option2'
								/>
								<label className='form-check-label' htmlFor='couple'>
									Couple
								</label>
							</div>
							<div className='form-check'>
								<input
									className='form-check-input'
									type='checkbox'
									id='solor_traveler'
									value='option3'
								/>
								<label className='form-check-label' htmlFor='solor_traveler'>
									Solor traveler
								</label>
							</div>
							<div className='form-check'>
								<input
									className='form-check-input'
									type='checkbox'
									id='family'
									value='option3'
								/>
								<label className='form-check-label' htmlFor='family'>
									Family
								</label>
							</div>
						</div>
					</div>
					<div className='col-10 px-5 d-flex flex-column justify-content-between'>
						<div className={style.card}>
							<div className='col-4'>
								<div className='d-flex align-items-start justify-content-center'>
									<img src='/Images/Avatar_2.png' alt='' />
									<div className='px-3 pt-1'>
										<h2>Siti</h2>
										<p>
											Singapore <br /> Family - Delux Twin Bed <br /> Stayed 3
											nights in May 2013
										</p>
									</div>
								</div>
							</div>
							<div className='col-8'>
								<div className='d-flex align-items-baseline'>
									<h1
										style={{
											color: '#04aa6d',
										}}>
										9.7
									</h1>
									<span className='px-2'>Exceptional</span>
								</div>
								<h3>A touch of warmth is a glittery bustling city</h3>
								<span>
									Very warm and thoughtful service from staff, delicious Thai food
									and good location. <br /> Dusit Thani Dubai was an excellent
									choice for our short long weekend trip. Centrally located on
									Syeikh Zayed Road close to the Metro, steady availability of
									taxis, walking distance to good restaurants, pharmacy and mini
									mart. The taxi fare from the airport was AED60, but from the
									hotel to the airport is AED30. The hotel also provides scheduled
									shuttle bus services to Dubal Mall, Mall ofEmirates, DIFC &
									Jumeirah Beach Park. We arrived at 11 am and was delighted that
									they had an early checkout and the room ready for us within 15
									mins. Thank you very much for making our very short
								</span>
							</div>
						</div>
						<div className={`${style.card} bg-info bg-opacity-25`}>
							<div className='col-4'>
								<div className='d-flex align-items-start justify-content-center'>
									<img src='/Images/Avatar_1.png' alt='' className='rounded' />
									<div className='px-3 pt-1'>
										<h2>Zhen</h2>
										<p>
											Australia <br /> Solo traveler - Delux Twin Bed <br />
											Stayed 2 nights in October 2015
										</p>
									</div>
								</div>
							</div>
							<div className='col-8'>
								<div className='d-flex align-items-baseline'>
									<h1
										style={{
											color: '#04aa6d',
										}}>
										9.7
									</h1>
									<span className='px-2'>Exceptional</span>
								</div>
								<h3>A touch of warmth is a glittery bustling city</h3>
								<span>
									Breakfast, nice staff and view to burj khalifa This is second
									time we stay in Dusit Thani Dubai hotel. Great 5 star hotel.
									Staff are very nice and polite. Comfort room. Great breakfast. 7
									mins walk from metro station. Shuttle bus to dubai mall. Highly
									recommended.
								</span>
							</div>
						</div>
						<div className={style.card}>
							<div className='col-4'>
								<div className='d-flex align-items-start justify-content-center'>
									<img src='/Images/Avatar.png' alt='' className='rounded' />
									<div className='px-3 pt-1'>
										<h2>Jason</h2>
										<p>
											Canada <br /> Couple - Delux Twin Bed <br /> Stayed 1
											nights in January 2017
										</p>
									</div>
								</div>
							</div>
							<div className='col-8'>
								<div className='d-flex align-items-baseline'>
									<h1
										style={{
											color: '#04aa6d',
										}}>
										10.0
									</h1>
									<span className='px-2'>Exceptional</span>
								</div>
								<h3>A touch of warmth is a glittery bustling city</h3>
								<span>
									My girlfriend and I stayed at the Dusit Thani whilst stopping
									over in Dubai and we were extremely pleased with our stay. The
									level of service provided by each employee was truly
									exceptional, which made this one of the most pleasant hotel
									experiences we&apos;ve had. We highly recommend it!!!
								</span>
							</div>
						</div>
						<div className={`${style.card} bg-info bg-opacity-25`}>
							<div className='col-4'>
								<div className='d-flex align-items-start justify-content-center'>
									<img src='/Images/Avatar_2.png' alt='' />
									<div className='px-3 pt-1'>
										<h2>Khetarun</h2>
										<p>
											Switzerland <br /> Couple - Delux Twin Bed <br /> Stayed
											6 nights in April 2022
										</p>
									</div>
								</div>
							</div>
							<div className='col-8'>
								<div className='d-flex align-items-baseline'>
									<h1
										style={{
											color: '#04aa6d',
										}}>
										9.6
									</h1>
									<span className='px-2'>Exceptional</span>
								</div>
								<h3>A touch of warmth is a glittery bustling city</h3>
								<span>
									We arrived hotel with an early flight, but staff was so kind to
									let us check in already since the room was ready, so we could
									take shower and sleep after a long flight. We really appreciate.
									During breakfast, we found a variety of food, and they were all
									tasty. Staffs were all nice. And easy to call a cab.
								</span>
							</div>
						</div>
					</div>
				</div>
				<BooksFooter />
			</main>
		</>
	)
}

export default HotelFacilities
