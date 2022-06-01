/* eslint-disable max-len */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import type { NextPage } from 'next'
import Image from 'next/image'
import { BooksFooter, BooksNavbar } from '../../components'
import style from '../../styles/books/hotel-location.module.scss'

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
							<a className='nav-link active' href='#'>
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
					<div
						className='d-flex flex-row'
						style={{
							border: '1px solid #c9cacd',
							borderRadius: '10px',
							overflow: 'hidden',
						}}>
						<div className='col-4 p-4'>
							<div className='input-group col-12'>
								<div
									className='input-group-text col-2'
									style={{
										backgroundColor: '#fff',
									}}>
									<i className='bi bi-search col-12 fs-3'></i>
								</div>
								<div className='form-floating col-10'>
									<input
										type='text'
										className='form-control'
										id='search'
										placeholder='Dusit Thani Dubai'
										style={{
											borderRadius: '0 0.375rem 0.375rem 0',
											borderLeft: 'none',
										}}
									/>
									<label
										htmlFor='search'
										style={{
											color: '#000',
										}}>
										Search
									</label>
								</div>
							</div>
							<ul className='list-group pt-3'>
								<li className='list-group-item bg-primary bg-opacity-25'>
									Sheikh Zayed Road - 0.1mi
								</li>
								<li className='list-group-item'>Rolex Tower - 0.3 mi</li>
								<li className='list-group-item bg-primary bg-opacity-25'>
									Burj Khalifa Station - 0.37 mi
								</li>
								<li className='list-group-item'>
									Dubai Mall Metro Station - 0.37 mi
								</li>
								<li className='list-group-item bg-primary bg-opacity-25'>
									21st Century Tower - 0.38 mi
								</li>
								<li className='list-group-item'>Burj Khalifa - 0.6 mi</li>
								<li className='list-group-item bg-primary bg-opacity-25'>
									Dubai International Financial Centre...
								</li>
								<li className='list-group-item'>Dubai Mall - 0.78 mi</li>
							</ul>
						</div>
						<div className='col-8'>
							<iframe
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.942015012734!2d55.13489191517533!3d25.069954383955462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f13435f3abe57%3A0xb4c00b9d46311cd0!2sSheikh%20Zayed%20Rd%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1654084025700!5m2!1sen!2sin'
								style={{ border: '0', width: '100%', height: '100%' }}
								allowFullScreen={true}
								loading='lazy'></iframe>
						</div>
					</div>
				</div>
				<BooksFooter />
			</main>
		</>
	)
}

export default HotelFacilities
