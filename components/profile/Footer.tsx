/* eslint-disable jsx-a11y/anchor-is-valid */
import type { NextComponentType } from 'next'
import style from '../../styles/components/blog/footer.module.scss'

const Footer: NextComponentType = () => {
	return (
		<>
			<footer className={style.footer}>
				<div className='container-fluid px-5'>
					<div className='d-flex flex-row justify-content-evenly py-4'>
						<div className='d-flex col-3 flex-column p-1'>
							<div className='d-flex row'>
								<h3 className='text-black fw-bold'>Help</h3>
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
								<h3 className='text-black fw-bold'>About us</h3>
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
						<div className='d-flex col-3 flex-column px-5 p-1'>
							<div className='d-flex row'>
								<h3 className='text-black fw-bold'>Destinations</h3>
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
								<h3 className='text-black fw-bold'>Get the app</h3>
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
				<div className={`${style.credits} px-5`}>
					<div className='container-fluid d-flex flex-row justify-content-between align-items-center'>
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
