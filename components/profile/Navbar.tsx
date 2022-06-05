/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import type { NextComponentType } from 'next'

const Navbar: NextComponentType = () => {
	return (
		<>
			<div className='container-fluid bg-light px-md-5'>
				<nav className='navbar sticky-top navbar-expand-lg'>
					{/* <div className='container-fluid'> */}
					<a className='navbar-brand text-dark fs-3 fw-bold' href='#'>
						Metoospace
					</a>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarScroll'
						aria-controls='navbarScroll'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div
						className='collapse navbar-collapse justify-content-between'
						id='navbarScroll'>
						<div className='d-flex col-md-4' role='search'>
							<div className='input-group col-12'>
								<div
									className='input-group-text col-2'
									style={{
										backgroundColor: '#fff',
									}}>
									<i className='bi bi-search col-12'></i>
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
										Where are you going?
									</label>
								</div>
							</div>
						</div>
						<div>
							<ul className='navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll pe-5 justify-content-between align-items-center fw-semibold text-black'>
								<li className='nav-item'>
									<a className='nav-link' aria-current='page' href='#'>
										Support
									</a>
								</li>
								<li className='nav-item'>
									<a className='nav-link' href='#'>
										<i className='bi bi-globe'></i> English
									</a>
								</li>
								<li className='nav-item'>
									<a className='nav-link' href='#'>
										USD <i className='bi bi-chevron-down'></i>
									</a>
								</li>
								<li
									className='nav-item dropdown p-0'
									style={{
										padding: '-1rem',
									}}>
									<span
										className='nav-link dropdown-toggle'
										data-bs-toggle='dropdown'>
										<img src='/Images/Avatar_1.png' alt='' />
									</span>
									<ul
										className='dropdown-menu pt-0'
										aria-labelledby='navbarScrollingDropdown'>
										<li>
											<span
												style={{
													backgroundColor: '#e8f0fe',
												}}
												className='dropdown-item fs-3'>
												My account
											</span>
										</li>
										<li>
											<a className='dropdown-item' href='#'>
												Profile
											</a>
										</li>
										<li>
											<a className='dropdown-item' href='#'>
												Booking
											</a>
										</li>
										<li>
											<a className='dropdown-item' href='#'>
												Payment method
											</a>
										</li>
										<li>
											<a className='dropdown-item' href='#'>
												Reviews
											</a>
										</li>
										<li>
											<span className='dropdown-item'>
												<span
													className='px-5 py-2'
													style={{
														border: '#04aa6d solid 1px',
													}}>
													Sign Out
												</span>
											</span>
										</li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
					{/* </div> */}
				</nav>
				<ul className='nav nav-tabs'>
					<li className='nav-item'>
						<a className='nav-link active' aria-current='page' href='#'>
							Hotel
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link' href='#'>
							Hostels
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link' href='#'>
							House
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link' href='#'>
							Office
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link' href='#'>
							Garage
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link' href='#'>
							Rooms
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link' href='#'>
							Kitchen
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link' href='#'>
							Storage
						</a>
					</li>
				</ul>
			</div>
		</>
	)
}

export default Navbar
