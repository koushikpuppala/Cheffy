/* eslint-disable jsx-a11y/anchor-is-valid */
import type { NextComponentType } from 'next'
import style from '../../styles/components/books/footer.module.scss'

const Footer: NextComponentType = () => {
	return (
		<>
			<footer className={style.footer}>
				<div className='container'>
					<div className='d-flex flex-row justify-content-evenly'>
						<div className='d-flex col-3 flex-column p-1'>
							<div className='d-flex row'>
								<p className='fs-3 fw-bold'>Help</p>
								<ul
									style={{
										listStyle: 'none',
									}}>
									<li>
										<a href='#'>Help center</a>
									</li>
									<li>
										<a href='#'>FAQs</a>
									</li>
									<li>
										<a href='#'>Privacy policy</a>
									</li>
									<li>
										<a href='#'>Cookie policy</a>
									</li>
									<li>
										<a href='#'>Terms of use</a>
									</li>
									<li>
										<a href='#'>Advertise with us</a>
									</li>
								</ul>
							</div>
						</div>
						<div className='d-flex col-3 flex-column p-1'>
							<div className='d-flex row'>
								<p className='fs-3 fw-bold'>About us</p>
								<ul
									style={{
										listStyle: 'none',
									}}>
									<li>
										<a href='#'>About</a>
									</li>
									<li>
										<a href='#'>Blog</a>
									</li>
									<li>
										<a href='#'>How we work?</a>
									</li>
									<li>
										<a href='#'>Jobs</a>
									</li>
								</ul>
							</div>
						</div>
						<div className='d-flex col-3 flex-column p-1'>
							<div className='d-flex row'>
								<p className='fs-3 fw-bold'>Destinations</p>
								<ul
									style={{
										listStyle: 'none',
									}}>
									<li>
										<a href='#'>Countries</a>
									</li>
									<li>
										<a href='#'>Cities</a>
									</li>
								</ul>
							</div>
						</div>
						<div className='d-flex col-3 flex-column p-1'>
							<div className='d-flex row'>
								<p className='fs-3 fw-bold'>Get the app</p>
								<ul
									style={{
										listStyle: 'none',
									}}>
									<li>
										<a href='#'>IOS app</a>
									</li>
									<li>
										<a href='#'>Android app</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className={`${style.credits}`}>
					<div className='container d-flex flex-row justify-content-between align-items-center'>
						<span>
							© 2022 Metoospace.com is a Cheffy Group company. All rights reserved.
						</span>
						<div className='d-flex flex-row justify-content-evenly align-items-center'>
							<span className='px-3'>
								<i className='bi bi-globe'></i> English
							</span>
							<span className='px-3'>
								USD <i className='bi bi-chevron-down'></i>
							</span>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer
