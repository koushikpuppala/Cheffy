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
							<ul className='navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll px-5 justify-content-between fw-semibold text-black'>
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
								{/* <li className='nav-item dropdown'>
										<a
											className='nav-link dropdown-toggle'
											href='#'
											id='navbarScrollingDropdown'
											role='button'
											data-bs-toggle='dropdown'
											aria-expanded='false'>
											Link
										</a>
										<ul
											className='dropdown-menu'
											aria-labelledby='navbarScrollingDropdown'>
											<li>
												<a className='dropdown-item' href='#'>
													Action
												</a>
											</li>
											<li>
												<a className='dropdown-item' href='#'>
													Another action
												</a>
											</li>
											<li>
												<hr className='dropdown-divider' />
											</li>
											<li>
												<a className='dropdown-item' href='#'>
													Something else here
												</a>
											</li>
										</ul>
									</li> */}
								<li className='nav-item'>
									<button className='nav-link btn btn-outline-secondary px-3'>
										SIGN IN
									</button>
								</li>
							</ul>
						</div>
					</div>
					{/* </div> */}
				</nav>
				<ul className='nav nav-tabs'>
					<li className='nav-item'>
						<a className='nav-link' aria-current='page' href='#'>
							Destination
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link' href='#'>
							Tours
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link' href='#'>
							Rooms
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link' href='#'>
							Hostels
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link active' href='#'>
							Blog
						</a>
					</li>
				</ul>
			</div>
		</>
	)
}

export default Navbar
