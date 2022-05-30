/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import type { NextPage } from 'next'
import Image from 'next/image'
import { BooksFooter, BooksNavbar } from '../../components'
import style from '../../styles/books/hotel-overview.module.scss'

const HotelOverview: NextPage = () => {
	return (
		<>
			<BooksNavbar />
			<section id='hero' className={`d-flex ${style.hero} bg-light flex-column p-1`}>
				<div
					className='d-flex flex-row container position-relative'
					// data-aos='zoom-in'
					// data-aos-delay='100'
				>
					<div className='d-flex flex-column justify-content-evenly align-items-start text-center col-7'>
						<h1>Dusit Thani Dubai</h1>
						<div
							className='d-flex flex-row align-items-center justify-content-evenly'
							style={{
								width: '90%',
							}}>
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
							<div className='d-flex p-2'>
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
					<div
						className='col-5'
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-evenly',
							alignItems: 'flex-end',
						}}>
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
				<div className='d-flex container position-relative col-12 flex-row'>
					<div className='col-6 d-flex p-2'>
						<div className='col-12'>
							<Image
								width={628}
								height={504}
								layout='responsive'
								src='/images/Rectangle_1.png'
								className='img-fluid rounded'
								alt=''
							/>
						</div>
					</div>
					<div className='col-6 flex-column p-1'>
						<div className='column'>
							<div className='col-6 d-flex'>
								<div className='col-12 p-1'>
									<Image
										width={302}
										height={240}
										layout='responsive'
										src='/images/Rectangle_4.png'
										className='img-fluid rounded'
										alt=''
									/>
								</div>
								<div className='col-12 p-1'>
									<Image
										width={302}
										height={240}
										layout='responsive'
										src='/images/Rectangle_6.png'
										className='img-fluid rounded'
										alt=''
									/>
								</div>
							</div>
							<div className='col-6 d-flex'>
								<div className='col-12 p-1'>
									<Image
										width={302}
										height={240}
										layout='responsive'
										src='/images/Rectangle_5.png'
										className='img-fluid rounded'
										alt=''
									/>
								</div>
								<div className='col-12 p-1'>
									<Image
										width={302}
										height={240}
										layout='responsive'
										src='/images/Rectangle_7.png'
										className='img-fluid rounded'
										alt=''
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<main className={`bg-light ${style.main} p-0`}>
				<div className='d-flex container position-relative col-12 flex-row p-3'>
					<ul className='nav nav-tabs w-100'>
						<li className='nav-item'>
							<a className='nav-link active' aria-current='page' href='#'>
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
							<a className='nav-link' href='#'>
								Reviews
							</a>
						</li>
					</ul>
				</div>
				<div className='d-flex container position-relative col-12 flex-row'>
					<div className='col-md-8 py-2'>
						<div
							className='alert alert-warning d-flex align-items-center text-black'
							role='alert'>
							<i className='bi bi-exclamation-octagon px-3 fs-3'></i>
							<div>
								As part of the Coronavirus (COVID-19) restrictions, the property may
								request additional documentation from guests to validate
								identification, travel itinerary, and other relevant information.
								Please contact the property for more details.
							</div>
						</div>
						<div>
							<h3 className='fw-bold'>Overview</h3>
							<p>
								With a stay at Dusit Thani Dubai, you&apos;ll be centrally located
								in Dubai, steps from Sheikh Zayed Road and within a 5-minute drive
								of Dubai World Trade Centre. Featured amenities include a business
								center, limo/town car service, and complimentary newspapers in the
								lobby. Planning an event in Dubai? This hotel has facilities
								measuring 17007 square feet (1580 square meters), including a
								conference center. A roundtrip airport shuttle is provided for a
								surcharge (available 24 hours), and free self parking is available
								onsite.
							</p>
							<p>
								With a stay at Dusit Thani Dubai, you&apos;ll be centrally located
								in Dubai, steps from Sheikh Zayed Road and within a 5-minute drive
								of Dubai World Trade Centre. Featured amenities include a business
								center, limo/town car service, and complimentary newspapers in the
								lobby. Planning an event in Dubai? This hotel has facilities
								measuring 17007 square feet (1580 square meters), including a
								conference center. A roundtrip airport shuttle is provided for a
								surcharge (available 24 hours), and free self parking is available
								onsite.
							</p>
						</div>
					</div>
					<div className='col-md-4 px-5 py-3'>
						<div className='card col-lg-12'>
							<h2 className='card-header'>Highlights</h2>
							<div className='card-body'>
								<div className='row'>
									<div className='col-6 px-2'>
										<div className='py-1'>
											<div
												className={`d-flex flex-column justify-content-center align-items-center text-center ${style.highlight_card}`}>
												<img src='/images/Inside_city_center.svg' alt='' />
												<h5>Inside city center</h5>
											</div>
										</div>
										<div className='py-1'>
											<div
												className={`d-flex flex-column justify-content-center align-items-center text-center ${style.highlight_card}`}>
												<img src='/images/transfer.svg' alt='' />
												<h5>Airport transfer</h5>
											</div>
										</div>
										<div className='py-1'>
											<div
												className={`d-flex flex-column justify-content-center align-items-center text-center ${style.highlight_card}`}>
												<img src='/images/Excellent_view.svg' alt='' />
												<h5>
													Excellent <br /> view
												</h5>
											</div>
										</div>
									</div>
									<div className='col-6 px-2'>
										<div className='py-1'>
											<div
												className={`d-flex flex-column justify-content-center align-items-center text-center ${style.highlight_card}`}>
												<img src='/images/Front_desk.svg' alt='' />
												<h5>Front desk [24-hour]</h5>
											</div>
										</div>
										<div className='py-1'>
											<div
												className={`d-flex flex-column justify-content-center align-items-center text-center ${style.highlight_card}`}>
												<img src='/images/Sparkling_clean.svg' alt='' />
												<h5>Sparkling clean</h5>
											</div>
										</div>
										<div className='py-1'>
											<div
												className={`d-flex flex-column justify-content-center align-items-center text-center ${style.highlight_card}`}>
												<img src='/images/bus.svg' alt='' />
												<h5>near to public transportation</h5>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<BooksFooter />
			</main>
		</>
	)
}

export default HotelOverview
