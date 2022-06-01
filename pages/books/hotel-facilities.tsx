/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import type { NextPage } from 'next'
import Image from 'next/image'
import { BooksFooter, BooksNavbar } from '../../components'
import style from '../../styles/books/hotel-facilities.module.scss'

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
							<a className='nav-link active' href='#'>
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
				<div className='d-flex flex-column px-5 pb-3'>
					<div className='py-2'>
						<h2>Highlights</h2>
						<div className='d-flex'>
							<div className='p-2 pt-1 ps-0'>
								<div
									className={`d-flex flex-column justify-content-center align-items-center text-center ${style.highlight_card}`}>
									<img
										src='/Images/Inside_city_center.svg'
										alt='Inside_city_center'
									/>
									<h5>
										Inside city
										<br /> center
									</h5>
								</div>
							</div>
							<div className='p-1 px-2'>
								<div
									className={`d-flex flex-column justify-content-center align-items-center text-center ${style.highlight_card}`}>
									<img src='/Images/transfer.svg' alt='transfer' />
									<h5>
										Airport <br />
										transfer
									</h5>
								</div>
							</div>
							<div className='p-1 px-2'>
								<div
									className={`d-flex flex-column justify-content-center align-items-center text-center ${style.highlight_card}`}>
									<img src='/Images/Excellent_view.svg' alt='Excellent_view' />
									<h5>
										Excellent
										<br /> view
									</h5>
								</div>
							</div>
							<div className='p-1 px-2'>
								<div
									className={`d-flex flex-column justify-content-center align-items-center text-center ${style.highlight_card}`}>
									<img src='/Images/Front_desk.svg' alt='Front_desk' />
									<h5>
										Front desk
										<br /> [24-hour]
									</h5>
								</div>
							</div>
							<div className='p-1 px-2'>
								<div
									className={`d-flex flex-column justify-content-center align-items-center text-center ${style.highlight_card}`}>
									<img src='/Images/Sparkling_clean.svg' alt='Sparkling_clean' />
									<h5>
										Sparkling <br /> clean
									</h5>
								</div>
							</div>
							<div className='p-1 px-2'>
								<div
									className={`d-flex flex-column justify-content-center align-items-center text-center ${style.highlight_card}`}>
									<img src='/Images/bus.svg' alt='bus' />
									<h5>
										near to public <br /> transportation
									</h5>
								</div>
							</div>
						</div>
					</div>
					<div className='d-flex flex-row justify-content-evenly pt-4'>
						<div className='d-flex col-3 flex-column pe-2'>
							<div className='d-flex row'>
								<h3 className='text-black fw-bold'>Internet access</h3>
								<ul className='p-0'>
									<li>
										<a href='#'>
											<i className='bi bi-check2'></i>Free Wi-Fi in all rooms
										</a>
									</li>
									<li>
										<a href='#'>
											<i className='bi bi-check2'></i>Internet [LAN]
										</a>
									</li>
									<li>
										<a href='#'>
											<i className='bi bi-check2'></i>Internet services
										</a>
									</li>
									<li>
										<a href='#'>
											<i className='bi bi-check2'></i>Wi-Fi in public areas
										</a>
									</li>
								</ul>
								<h3 className='text-black fw-bold'>For the kids</h3>
								<ul className='p-0'>
									<li>
										<a href='#'>
											<i className='bi bi-check2'></i>Family room
										</a>
									</li>
									<li>
										<a href='#'>
											<i className='bi bi-check2'></i>Kids meal
										</a>
									</li>
									<li>
										<a href='#'>
											<i className='bi bi-check2'></i>Playground
										</a>
									</li>
									<li>
										<a href='#'>
											<i className='bi bi-check2'></i>Swimming pool [kids]
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className='d-flex col-3 flex-column'>
							<div className='d-flex row'>
								<h3 className='text-black fw-bold'>Things to do, ways to relax</h3>
								<ul className='p-0'>
									<li>
										<a href='#'>
											<i className='bi bi-check2'></i>Fitness center
										</a>
									</li>
									<li>
										<a href='#'>
											<i className='bi bi-check2'></i>Game room
										</a>
									</li>
									<li>
										<a href='#'>
											<i className='bi bi-check2'></i>Garden
										</a>
									</li>
									<li>
										<a href='#'>
											<i className='bi bi-check2'></i>Golf course [on-site]
										</a>
									</li>
									<li>
										<a href='#'>
											<i className='bi bi-check2'></i>Hot tub
										</a>
									</li>
									<li>
										<a href='#'>
											<i className='bi bi-check2'></i>Massage
										</a>
									</li>
									<li>
										<a href='#'>
											<i className='bi bi-check2'></i>Sauna
										</a>
									</li>
									<li>
										<a href='#'>
											<i className='bi bi-check2'></i>Spa
										</a>
									</li>
									<li>
										<a href='#'>
											<i className='bi bi-check2'></i>Swimming pool [indoor]
										</a>
									</li>
									<li>
										<a href='#'>
											<i className='bi bi-check2'></i>Ticket services
										</a>
									</li>
									<li>
										<a href='#'>
											<i className='bi bi-check2'></i>Yoga room
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className='d-flex col-3 flex-column px-5 pt-1'>
							<div className='d-flex row'>
								<h3 className='text-black fw-bold'>Getting around</h3>
								<ul className='p-0'>
									<li>
										<a href='#'>
											<i className='bi bi-check2'></i>Airport transfer
										</a>
									</li>
									<li>
										<a href='#'>
											<i className='bi bi-check2'></i>Bicycle parking
										</a>
									</li>
									<li>
										<a href='#'>
											<i className='bi bi-check2'></i>
											Car park [free of charge]
										</a>
									</li>
									<li>
										<a href='#'>
											<i className='bi bi-check2'></i>
											Car power charging station
										</a>
									</li>
									<li>
										<a href='#'>
											<i className='bi bi-check2'></i>Rental car
										</a>
									</li>
									<li>
										<a href='#'>
											<i className='bi bi-check2'></i>Shuttle services
										</a>
									</li>
									<li>
										<a href='#'>
											<i className='bi bi-check2'></i>Taxi services
										</a>
									</li>
									<li>
										<a href='#'>
											<i className='bi bi-check2'></i>Valet parking
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className='d-flex col-3 flex-column p-1'>
							<div className='d-flex row'>
								<h3 className='text-black fw-bold'>Services and conveniences</h3>
								<ul className='p-0'>
									<li>
										<a href='#'>
											<i className='bi bi-check2'></i>Cash withdrawal
										</a>
									</li>
									<li>
										<a href='#'>
											<i className='bi bi-check2'></i>Concierge
										</a>
									</li>
									<li>
										<a href='#'>
											<i className='bi bi-check2'></i>Currency exchange
										</a>
									</li>
									<li>
										<a href='#'>
											<i className='bi bi-check2'></i>Dry cleaning
										</a>
									</li>
									<li>
										<a href='#'>
											<i className='bi bi-check2'></i>Elevator
										</a>
									</li>
									<li>
										<a href='#'>
											<i className='bi bi-check2'></i>Luggage storage
										</a>
									</li>
									<li>
										<a href='#'>
											<i className='bi bi-check2'></i>Ironing service
										</a>
									</li>
									<li>
										<a href='#'>
											<i className='bi bi-check2'></i>Infirmary
										</a>
									</li>
									<li>
										<a href='#'>
											<i className='bi bi-check2'></i>Food delivery
										</a>
									</li>
									<li>
										<a href='#'>
											<i className='bi bi-check2'></i>Contactless check-in/out
										</a>
									</li>
									<li>
										<a href='#'>
											<i className='bi bi-check2'></i>Yoga room
										</a>
									</li>
								</ul>
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
