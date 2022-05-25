/* eslint-disable jsx-a11y/anchor-is-valid */
import type { NextComponentType } from 'next'
import { useEffect } from 'react'
import style from '../styles/components/footer.module.scss'

const Footer: NextComponentType = () => {
	useEffect(() => {
		const preloader = document.querySelector('#preloader')
		if (preloader) {
			window.addEventListener('load', () => {
				preloader.remove()
			})
		}

		const backtotop = document.querySelector('.back-to-top') as HTMLElement
		if (backtotop) {
			const toggleBacktotop = () => {
				if (window.scrollY > 100) {
					backtotop.classList.add('active')
				} else {
					backtotop.classList.remove('active')
				}
			}
			window.addEventListener('load', toggleBacktotop)
			window.addEventListener('scroll', toggleBacktotop)
			// onscroll(document, toggleBacktotop)
		}
	})
	return (
		<>
			{/* <!-- ======= Footer ======= --> */}
			<footer id={style.footer}>
				<div className={style.footer_top}>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-3 col-md-6'>
								<div className={style.footer_info}>
									<h3>Cheffy</h3>
									<p>
										A108 Adam Street <br />
										NY 535022, USA
										<br />
										<br />
										<strong>Phone:</strong> +1 5589 55488 55
										<br />
										<strong>Email:</strong> info@example.com
										<br />
									</p>
									<div className={`${style.social_links} mt-3`}>
										<a href='#' className='twitter'>
											<i className='bx bxl-twitter'></i>
										</a>
										<a href='#' className='facebook'>
											<i className='bx bxl-facebook'></i>
										</a>
										<a href='#' className='instagram'>
											<i className='bx bxl-instagram'></i>
										</a>
										<a href='#' className='google-plus'>
											<i className='bx bxl-skype'></i>
										</a>
										<a href='#' className='linkedin'>
											<i className='bx bxl-linkedin'></i>
										</a>
									</div>
								</div>
							</div>

							<div className={`col-lg-2 col-md-6 ${style.footer_links}`}>
								<h4>Useful Links</h4>
								<ul>
									<li>
										<i className='bx bx-chevron-right'></i>{' '}
										<a href='#hero' className='scrollto'>
											Home
										</a>
									</li>
									<li>
										<i className='bx bx-chevron-right'></i>{' '}
										<a href='#about' className='scrollto'>
											About us
										</a>
									</li>
									<li>
										<i className='bx bx-chevron-right'></i>{' '}
										<a href='#'>Services</a>
									</li>
									<li>
										<i className='bx bx-chevron-right'></i>{' '}
										<a href='#'>Terms of service</a>
									</li>
									<li>
										<i className='bx bx-chevron-right'></i>{' '}
										<a href='#'>Privacy policy</a>
									</li>
								</ul>
							</div>

							<div className={`col-lg-2 col-md-6 ${style.footer_links}`}>
								<h4>Our Services</h4>
								<ul>
									<li>
										<i className='bx bx-chevron-right'></i>{' '}
										<a href='#'>Web Design</a>
									</li>
									<li>
										<i className='bx bx-chevron-right'></i>{' '}
										<a href='#'>Web Development</a>
									</li>
									<li>
										<i className='bx bx-chevron-right'></i>{' '}
										<a href='#'>Product Management</a>
									</li>
									<li>
										<i className='bx bx-chevron-right'></i>{' '}
										<a href='#'>Marketing</a>
									</li>
									<li>
										<i className='bx bx-chevron-right'></i>{' '}
										<a href='#'>Graphic Design</a>
									</li>
								</ul>
							</div>

							<div className={`col-lg-4 col-md-6 ${style.footer_newsletter}`}>
								<h4>Our Newsletter</h4>
								<p>
									Tamen quem nulla quae legam multos aute sint culpa legam noster
									magna
								</p>
								<form action='' method='post'>
									<input type='email' name='email' />
									<input type='submit' value='Subscribe' />
								</form>
							</div>
						</div>
					</div>
				</div>

				<div className='container'>
					<div className={style.copyright}>
						&copy; Copyright{' '}
						<strong>
							<span>Restaurantly</span>
						</strong>
						. All Rights Reserved
					</div>
					<div className={style.credits}>
						{/* <!-- All the links in the footer should remain intact. -->
		  <!-- You can delete the links only if you purchased the pro version. -->
		  <!-- Licensing information: https://bootstrapmade.com/license/ -->
		  <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/restaurantly-restaurant-template/ --> */}
						Designed by <a href='https://koushikpuppala.vercel.app/'>Koushikpuppala</a>
					</div>
				</div>
			</footer>
			{/* <!-- End Footer --> */}

			<div id='preloader'></div>
			<a
				href='#hero'
				className='back-to-top d-flex align-items-center justify-content-center scrollto'>
				<i className='bi bi-arrow-up-short'></i>
			</a>
		</>
	)
}

export default Footer
