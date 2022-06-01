/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import type { NextPage } from 'next'
import Image from 'next/image'
import { BooksFooter, BooksNavbar } from '../../components'
import style from '../../styles/books/hotel-room.module.scss'

const HotelRoom: NextPage = () => {
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
							<a className='nav-link active' href='#'>
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
				<div className='px-5 pb-3 d-flex'>
					<span className='px-2'>12 room types</span>
					<div
						style={{
							borderLeft: '#000 2px solid',
						}}
					/>
					<span className='px-2'>77 room offers</span>
				</div>
				<div className='px-5'>
					<div
						className={`d-flex ${style.filter} align-items-center justify-content-evenly`}>
						<div className='d-flex col-10'>
							<div className='col-2 px-2'>
								<div className='input-group col-12'>
									<div
										className='input-group-text col-2'
										style={{
											backgroundColor: '#fff',
											padding: '0.25rem',
										}}>
										<i
											className='bx bxs-plane'
											style={{
												fontSize: '1.25rem',
											}}></i>
									</div>
									<div className='form-floating col-10'>
										<input
											type='text'
											className='form-control'
											id='check-in'
											placeholder='Check-in'
											defaultValue={'May 17'}
											style={{
												borderRadius: '0 0.375rem 0.375rem 0',
												borderLeft: 'none',
											}}
										/>
										<label
											htmlFor='check-in'
											style={{
												color: '#000',
											}}>
											Check-in
										</label>
									</div>
								</div>
							</div>
							<div className='col-2 px-2'>
								<div className='input-group col-12'>
									<div
										className='input-group-text col-2'
										style={{
											backgroundColor: '#fff',
											padding: '0.25rem',
										}}>
										<i
											className='bx bxs-plane'
											style={{
												transform: 'rotate(180deg)',
												fontSize: '1.25rem',
											}}></i>
									</div>
									<div className='form-floating col-10'>
										<input
											type='text'
											className='form-control'
											id='check-out'
											placeholder='Check-out'
											defaultValue={'May 21'}
											style={{
												borderRadius: '0 0.375rem 0.375rem 0',
												borderLeft: 'none',
											}}
										/>
										<label
											htmlFor='check-out'
											style={{
												color: '#000',
											}}>
											Check-out
										</label>
									</div>
								</div>
							</div>
							<div className='col-2 ps-2'>
								<div className='input-group col-12'>
									<div
										className='input-group-text col-2'
										style={{
											backgroundColor: '#fff',
											padding: '0.5rem',
										}}>
										<i
											className='bi bi-people'
											style={{
												fontSize: '1.25rem',
											}}></i>
									</div>
									<div className='form-floating col-10'>
										<input
											type='text'
											className='form-control'
											id='guests'
											placeholder='name@example.com'
											defaultValue={'1 Room,2 Guests'}
											style={{
												borderRadius: '0 0.375rem 0.375rem 0',
												borderLeft: 'none',
											}}
										/>
										<label
											htmlFor='guests'
											style={{
												color: '#000',
											}}>
											Guests
										</label>
									</div>
								</div>
							</div>
							<div className='px-4'>
								<span
									style={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										boxShadow: '0px 0px 0px 1px #f4af49',
										border: '0.05rem solid #f4af49',
										background: '#f4af49',
										padding: '0.75rem 2rem',
										borderRadius: '0.5rem',
									}}>
									Search
								</span>
							</div>
						</div>
						<div className='col-2 d-flex align-items-center'>
							<span
								className='col-4 px-1'
								style={{
									width: 'max-content !important',
								}}>
								Sort By:
							</span>
							<select
								className='form-select form-select-lg'
								aria-label='.form-select-lg example'
								defaultValue={'0'}>
								<option value='0' selected>
									Best value
								</option>
								<option value='1'>One</option>
								<option value='2'>Two</option>
								<option value='3'>Three</option>
							</select>
						</div>
					</div>
				</div>
				<div className='d-flex flex-row px-5 py-3'>
					<div className='col-6 pe-2'>
						<div className='py-2'>
							<div className={style.card}>
								<div className='d-flex flex-column col-6'>
									<img src='/Images/Rectangle_15.png' className='col-12 pb-1' />
									<div className='d-flex col-12'>
										<img src='/Images/Rectangle_16.png' className='col-6' />
										<img
											src='/Images/Rectangle_17.png'
											className='col-6 ps-1'
										/>
									</div>
								</div>
								<div className='d-flex col-6 p-4 flex-column'>
									<h2>Deluxe Twin Bed</h2>
									<span
										style={{
											display: 'flex',
											alignItems: 'center',
										}}>
										<i
											className='bi bi-check2'
											style={{
												color: '#04aa6d',
												fontSize: '1.25rem',
											}}></i>
										Pay at hotel
									</span>
									<span
										style={{
											display: 'flex',
											alignItems: 'center',
										}}>
										<i
											className='bi bi-check2'
											style={{
												color: '#04aa6d',
												fontSize: '1.25rem',
											}}></i>
										Free Wi-Fi
									</span>
									<span
										style={{
											display: 'flex',
											alignItems: 'center',
										}}>
										<i
											className='bi bi-check2'
											style={{
												color: '#04aa6d',
												fontSize: '1.25rem',
											}}></i>
										Free cancellation before May 12, 2022
									</span>
									<span
										style={{
											display: 'flex',
											alignItems: 'center',
										}}>
										<i
											className='bi bi-check2'
											style={{
												color: '#04aa6d',
												fontSize: '1.25rem',
											}}></i>
										City view
									</span>
									<span
										style={{
											display: 'flex',
											alignItems: 'center',
										}}>
										<i
											className='bi bi-check2'
											style={{
												color: '#04aa6d',
												fontSize: '1.25rem',
											}}></i>
										Non-smoking
									</span>
									<div className='d-flex justify-content-end pt-3'>
										<div className='d-flex flex-column px-3'>
											<span className={style.discount}>13% OFF</span>
											<span className={style.price_value}>$151</span>
										</div>
										<button className={style.book_now}>Book Now</button>
									</div>
								</div>
							</div>
						</div>
						<div className='py-2'>
							<div className={style.card}>
								<div className='d-flex flex-column col-6'>
									<img src='/Images/Rectangle_15.png' className='col-12 pb-1' />
									<div className='d-flex col-12'>
										<img src='/Images/Rectangle_16.png' className='col-6' />
										<img
											src='/Images/Rectangle_17.png'
											className='col-6 ps-1'
										/>
									</div>
								</div>
								<div className='d-flex col-6 p-4 flex-column'>
									<h2>Deluxe Twin Bed</h2>
									<span
										style={{
											display: 'flex',
											alignItems: 'center',
										}}>
										<i
											className='bi bi-check2'
											style={{
												color: '#04aa6d',
												fontSize: '1.25rem',
											}}></i>
										Pay at hotel
									</span>
									<span
										style={{
											display: 'flex',
											alignItems: 'center',
										}}>
										<i
											className='bi bi-check2'
											style={{
												color: '#04aa6d',
												fontSize: '1.25rem',
											}}></i>
										Free Wi-Fi
									</span>
									<span
										style={{
											display: 'flex',
											alignItems: 'center',
										}}>
										<i
											className='bi bi-check2'
											style={{
												color: '#04aa6d',
												fontSize: '1.25rem',
											}}></i>
										Free cancellation before May 12, 2022
									</span>
									<span
										style={{
											display: 'flex',
											alignItems: 'center',
										}}>
										<i
											className='bi bi-check2'
											style={{
												color: '#04aa6d',
												fontSize: '1.25rem',
											}}></i>
										City view
									</span>
									<span
										style={{
											display: 'flex',
											alignItems: 'center',
										}}>
										<i
											className='bi bi-check2'
											style={{
												color: '#04aa6d',
												fontSize: '1.25rem',
											}}></i>
										Non-smoking
									</span>
									<div className='d-flex justify-content-end pt-3'>
										<div className='d-flex flex-column px-3'>
											<span className={style.discount}>13% OFF</span>
											<span className={style.price_value}>$151</span>
										</div>
										<button className={style.book_now}>Book Now</button>
									</div>
								</div>
							</div>
						</div>
						<div className='py-2'>
							<div className={style.card}>
								<div className='d-flex flex-column col-6'>
									<img src='/Images/Rectangle_15.png' className='col-12 pb-1' />
									<div className='d-flex col-12'>
										<img src='/Images/Rectangle_16.png' className='col-6' />
										<img
											src='/Images/Rectangle_17.png'
											className='col-6 ps-1'
										/>
									</div>
								</div>
								<div className='d-flex col-6 p-4 flex-column'>
									<h2>Deluxe Twin Bed</h2>
									<span
										style={{
											display: 'flex',
											alignItems: 'center',
										}}>
										<i
											className='bi bi-check2'
											style={{
												color: '#04aa6d',
												fontSize: '1.25rem',
											}}></i>
										Pay at hotel
									</span>
									<span
										style={{
											display: 'flex',
											alignItems: 'center',
										}}>
										<i
											className='bi bi-check2'
											style={{
												color: '#04aa6d',
												fontSize: '1.25rem',
											}}></i>
										Free Wi-Fi
									</span>
									<span
										style={{
											display: 'flex',
											alignItems: 'center',
										}}>
										<i
											className='bi bi-check2'
											style={{
												color: '#04aa6d',
												fontSize: '1.25rem',
											}}></i>
										Free cancellation before May 12, 2022
									</span>
									<span
										style={{
											display: 'flex',
											alignItems: 'center',
										}}>
										<i
											className='bi bi-check2'
											style={{
												color: '#04aa6d',
												fontSize: '1.25rem',
											}}></i>
										City view
									</span>
									<span
										style={{
											display: 'flex',
											alignItems: 'center',
										}}>
										<i
											className='bi bi-check2'
											style={{
												color: '#04aa6d',
												fontSize: '1.25rem',
											}}></i>
										Non-smoking
									</span>
									<div className='d-flex justify-content-end pt-3'>
										<div className='d-flex flex-column px-3'>
											<span className={style.discount}>13% OFF</span>
											<span className={style.price_value}>$151</span>
										</div>
										<button className={style.book_now}>Book Now</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='col-6 ps-2'>
						<div className='py-2'>
							<div className={style.card}>
								<div className='d-flex flex-column col-6'>
									<img src='/Images/Rectangle_15.png' className='col-12 pb-1' />
									<div className='d-flex col-12'>
										<img src='/Images/Rectangle_16.png' className='col-6' />
										<img
											src='/Images/Rectangle_17.png'
											className='col-6 ps-1'
										/>
									</div>
								</div>
								<div className='d-flex col-6 p-4 flex-column'>
									<h2>Deluxe Twin Bed</h2>
									<span
										style={{
											display: 'flex',
											alignItems: 'center',
										}}>
										<i
											className='bi bi-check2'
											style={{
												color: '#04aa6d',
												fontSize: '1.25rem',
											}}></i>
										Pay at hotel
									</span>
									<span
										style={{
											display: 'flex',
											alignItems: 'center',
										}}>
										<i
											className='bi bi-check2'
											style={{
												color: '#04aa6d',
												fontSize: '1.25rem',
											}}></i>
										Free Wi-Fi
									</span>
									<span
										style={{
											display: 'flex',
											alignItems: 'center',
										}}>
										<i
											className='bi bi-check2'
											style={{
												color: '#04aa6d',
												fontSize: '1.25rem',
											}}></i>
										Free cancellation before May 12, 2022
									</span>
									<span
										style={{
											display: 'flex',
											alignItems: 'center',
										}}>
										<i
											className='bi bi-check2'
											style={{
												color: '#04aa6d',
												fontSize: '1.25rem',
											}}></i>
										City view
									</span>
									<span
										style={{
											display: 'flex',
											alignItems: 'center',
										}}>
										<i
											className='bi bi-check2'
											style={{
												color: '#04aa6d',
												fontSize: '1.25rem',
											}}></i>
										Non-smoking
									</span>
									<div className='d-flex justify-content-end pt-3'>
										<div className='d-flex flex-column px-3'>
											<span className={style.discount}>13% OFF</span>
											<span className={style.price_value}>$151</span>
										</div>
										<button className={style.book_now}>Book Now</button>
									</div>
								</div>
							</div>
						</div>
						<div className='py-2'>
							<div className={style.card}>
								<div className='d-flex flex-column col-6'>
									<img src='/Images/Rectangle_15.png' className='col-12 pb-1' />
									<div className='d-flex col-12'>
										<img src='/Images/Rectangle_16.png' className='col-6' />
										<img
											src='/Images/Rectangle_17.png'
											className='col-6 ps-1'
										/>
									</div>
								</div>
								<div className='d-flex col-6 p-4 flex-column'>
									<h2>Deluxe Twin Bed</h2>
									<span
										style={{
											display: 'flex',
											alignItems: 'center',
										}}>
										<i
											className='bi bi-check2'
											style={{
												color: '#04aa6d',
												fontSize: '1.25rem',
											}}></i>
										Pay at hotel
									</span>
									<span
										style={{
											display: 'flex',
											alignItems: 'center',
										}}>
										<i
											className='bi bi-check2'
											style={{
												color: '#04aa6d',
												fontSize: '1.25rem',
											}}></i>
										Free Wi-Fi
									</span>
									<span
										style={{
											display: 'flex',
											alignItems: 'center',
										}}>
										<i
											className='bi bi-check2'
											style={{
												color: '#04aa6d',
												fontSize: '1.25rem',
											}}></i>
										Free cancellation before May 12, 2022
									</span>
									<span
										style={{
											display: 'flex',
											alignItems: 'center',
										}}>
										<i
											className='bi bi-check2'
											style={{
												color: '#04aa6d',
												fontSize: '1.25rem',
											}}></i>
										City view
									</span>
									<span
										style={{
											display: 'flex',
											alignItems: 'center',
										}}>
										<i
											className='bi bi-check2'
											style={{
												color: '#04aa6d',
												fontSize: '1.25rem',
											}}></i>
										Non-smoking
									</span>
									<div className='d-flex justify-content-end pt-3'>
										<div className='d-flex flex-column px-3'>
											<span className={style.discount}>13% OFF</span>
											<span className={style.price_value}>$151</span>
										</div>
										<button disabled className={style.book_now}>
											Book Now
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className='py-2'>
							<div className={style.card}>
								<div className='d-flex flex-column col-6'>
									<img src='/Images/Rectangle_15.png' className='col-12 pb-1' />
									<div className='d-flex col-12'>
										<img src='/Images/Rectangle_16.png' className='col-6' />
										<img
											src='/Images/Rectangle_17.png'
											className='col-6 ps-1'
										/>
									</div>
								</div>
								<div className='d-flex col-6 p-4 flex-column'>
									<h2>Deluxe Twin Bed</h2>
									<span
										style={{
											display: 'flex',
											alignItems: 'center',
										}}>
										<i
											className='bi bi-check2'
											style={{
												color: '#04aa6d',
												fontSize: '1.25rem',
											}}></i>
										Pay at hotel
									</span>
									<span
										style={{
											display: 'flex',
											alignItems: 'center',
										}}>
										<i
											className='bi bi-check2'
											style={{
												color: '#04aa6d',
												fontSize: '1.25rem',
											}}></i>
										Free Wi-Fi
									</span>
									<span
										style={{
											display: 'flex',
											alignItems: 'center',
										}}>
										<i
											className='bi bi-check2'
											style={{
												color: '#04aa6d',
												fontSize: '1.25rem',
											}}></i>
										Free cancellation before May 12, 2022
									</span>
									<span
										style={{
											display: 'flex',
											alignItems: 'center',
										}}>
										<i
											className='bi bi-check2'
											style={{
												color: '#04aa6d',
												fontSize: '1.25rem',
											}}></i>
										City view
									</span>
									<span
										style={{
											display: 'flex',
											alignItems: 'center',
										}}>
										<i
											className='bi bi-check2'
											style={{
												color: '#04aa6d',
												fontSize: '1.25rem',
											}}></i>
										Non-smoking
									</span>
									<div className='d-flex justify-content-end pt-3'>
										<div className='d-flex flex-column px-3'>
											<span className={style.discount}>13% OFF</span>
											<span className={style.price_value}>$151</span>
										</div>
										<button className={style.book_now}>Book Now</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<nav className='px-5' aria-label='Page navigation example'>
					<ul
						className='pagination justify-content-between p-3 align-items-center'
						style={{
							boxShadow: '0px 0px 0px 1px #c9cacd',
							border: '0.05rem solid #c9cacd',
							borderRadius: '0.5rem',
						}}>
						<li className={style.previous}>
							<a className='p-2 text-black'>Previous</a>
						</li>
						<div className='d-flex'>
							<li className={style.page_number}>
								<a className={style.active} href='#'>
									1
								</a>
							</li>
							<li className={style.page_number}>
								<a className='p-2 text-black' href='#'>
									2
								</a>
							</li>
							<li className={style.page_number}>
								<a className='p-2 text-black' href='#'>
									3
								</a>
							</li>
							<li className={style.page_number}>
								<a className='p-2 text-black' href='#'>
									4
								</a>
							</li>
							<li className={style.page_number}>
								<a className='p-2 text-black' href='#'>
									5
								</a>
							</li>
							<li className={style.page_number}>
								<a className='p-2 text-black' href='#'>
									6
								</a>
							</li>
							<li className={style.page_number}>
								<a className='p-2 text-black' href='#'>
									...
								</a>
							</li>
						</div>
						<li className={style.next}>
							<a className='p-2 text-black' href='#'>
								Next
							</a>
						</li>
					</ul>
				</nav>
				<BooksFooter />
			</main>
		</>
	)
}

export default HotelRoom
