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
				<div className='px-5'>
					<div className={`d-flex ${style.filter} align-items-center`}>
						<div className='col-2 px-2'>
							<div className='input-group col-2'>
								<div
									className='input-group-text col-2'
									style={{
										backgroundColor: '#fff',
									}}>
									<i className='bi bi-envelope'></i>
								</div>
								<div className='form-floating col-10'>
									<input
										type='email'
										className='form-control'
										id='email'
										placeholder='name@example.com'
										style={{
											borderRadius: '0 0.375rem 0.375rem 0',
											borderLeft: 'none',
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
						</div>
						<div className='col-2 px-2'>
							<div className='input-group col-2'>
								<div
									className='input-group-text col-2'
									style={{
										backgroundColor: '#fff',
									}}>
									<i className='bi bi-envelope'></i>
								</div>
								<div className='form-floating col-10'>
									<input
										type='email'
										className='form-control'
										id='email'
										placeholder='name@example.com'
										style={{
											borderRadius: '0 0.375rem 0.375rem 0',
											borderLeft: 'none',
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
						</div>
						<div className='col-2 px-2'>
							<div className='input-group col-2'>
								<div
									className='input-group-text col-2'
									style={{
										backgroundColor: '#fff',
									}}>
									<i className='bi bi-envelope'></i>
								</div>
								<div className='form-floating col-10'>
									<input
										type='email'
										className='form-control'
										id='email'
										placeholder='name@example.com'
										style={{
											borderRadius: '0 0.375rem 0.375rem 0',
											borderLeft: 'none',
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
						<div></div>
					</div>
				</div>
				<div className='d-flex flex-row px-5 pb-3'>
					<div className='col-6'>
						<div className='p-1'>
							<div className='col-5'></div>
							<div className='col-7'></div>
							<div
								className={`d-flex flex-column justify-content-center align-items-center text-center ${style.highlight_card}`}>
								<img
									src='/Images/Inside_city_center.svg'
									alt='Inside_city_center'
								/>
								<h5>Inside city center</h5>
							</div>
						</div>
						<div className='p-1'>
							<div
								className={`d-flex flex-column justify-content-center align-items-center text-center ${style.highlight_card}`}>
								<img src='/Images/transfer.svg' alt='transfer' />
								<h5>Airport transfer</h5>
							</div>
						</div>
						<div className='p-1'>
							<div
								className={`d-flex flex-column justify-content-center align-items-center text-center ${style.highlight_card}`}>
								<img src='/Images/Excellent_view.svg' alt='Excellent_view' />
								<h5>Excellent view</h5>
							</div>
						</div>
					</div>
					<div className='col-6'>
						<div className='p-1'>
							<div
								className={`d-flex flex-column justify-content-center align-items-center text-center ${style.highlight_card}`}>
								<img
									src='/Images/Inside_city_center.svg'
									alt='Inside_city_center'
								/>
								<h5>Inside city center</h5>
							</div>
						</div>
						<div className='p-1'>
							<div
								className={`d-flex flex-column justify-content-center align-items-center text-center ${style.highlight_card}`}>
								<img src='/Images/transfer.svg' alt='transfer' />
								<h5>Airport transfer</h5>
							</div>
						</div>
						<div className='p-1'>
							<div
								className={`d-flex flex-column justify-content-center align-items-center text-center ${style.highlight_card}`}>
								<img src='/Images/Excellent_view.svg' alt='Excellent_view' />
								<h5>Excellent view</h5>
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
