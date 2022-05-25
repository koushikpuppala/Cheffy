/* eslint-disable jsx-a11y/anchor-is-valid */
import { GetStaticProps, NextComponentType } from 'next'
import Link from 'next/link'
import { useEffect } from 'react'
import style from '../styles/components/navbar.module.scss'

const Navbar: NextComponentType = () => {
	useEffect(() => {
		const selectHeader = document.getElementById(style.header) as HTMLElement

		const headerScrolled = () => {
			if (window.scrollY > 100) selectHeader.classList.add(style.header_scrolled)
			else selectHeader.classList.remove(style.header_scrolled)
		}
		window.addEventListener('load', headerScrolled)
		window.addEventListener('scroll', headerScrolled)

		const mobile_nav_toggle = document.querySelector(
			`.${style.mobile_nav_toggle}`
		) as HTMLElement

		const navbar = document.getElementById('navbar') as HTMLElement

		mobile_nav_toggle.addEventListener('click', () => {
			if (navbar !== null) {
				navbar.classList.toggle(style.navbar)
				navbar.classList.toggle(style.navbar_mobile)
			}

			mobile_nav_toggle.classList.toggle('bi-list')
			mobile_nav_toggle.classList.toggle('bi-x')
		})

		const navbar_dropdown = document.querySelectorAll(
			`.${style.navbar} .${style.dropdown} > a`
		) as NodeListOf<HTMLElement>

		navbar_dropdown.forEach((link) => {
			link.addEventListener('click', (e) => {
				e.preventDefault()
				const dropdown = link.nextElementSibling as HTMLElement
				if (dropdown.classList.contains(style.dropdown_active)) {
					dropdown.classList.remove(style.dropdown_active)
				} else {
					dropdown.classList.add(style.dropdown_active)
				}
			})
		})

		const navbarlinks = document.querySelectorAll(
			'#navbar .scrollto'
		) as NodeListOf<HTMLElement>

		const navbarlinksActive = () => {
			navbarlinks.forEach((link) => {
				const position = window.scrollY + 200
				const section = document.querySelector(
					`#${link.getAttribute('href')?.substring(1)}`
				) as HTMLElement

				if (
					section.offsetTop <= position &&
					section.offsetTop + section.offsetHeight > position
				) {
					link.classList.add(style.active)
				} else {
					link.classList.remove(style.active)
				}
			})
		}

		const header = document.querySelector(`#${style.header}`) as HTMLElement
		const offset = header.offsetHeight

		const scrollto = (el: string) => {
			const section = document.querySelector(el) as HTMLElement

			const elementPos = section.offsetTop
			window.scrollTo({
				top: elementPos - offset,
				behavior: 'smooth',
			})
		}

		const navbarlinksClick = document.querySelectorAll('.scrollto') as NodeListOf<HTMLElement>

		navbarlinksClick.forEach((link) => {
			link.addEventListener('click', (e) => {
				e.preventDefault()
				if (navbar.classList.contains(style.navbar_mobile)) {
					navbar.classList.add(style.navbar)
					navbar.classList.remove(style.navbar_mobile)
					mobile_nav_toggle.classList.toggle('bi-list')
					mobile_nav_toggle.classList.toggle('bi-x')
				}

				scrollto(`#${link.getAttribute('href')?.substring(1)}`)
			})
		})

		window.addEventListener('load', navbarlinksActive)
		window.addEventListener('scroll', navbarlinksActive)

		window.addEventListener('load', () => {
			if (window.location.hash) {
				if (document.querySelector(window.location.hash)) {
					scrollto(window.location.hash)
				}
			}
		})
	})

	return (
		<>
			{/* <!-- ======= Header ======= --> */}
			<header id={style.header} className='fixed-top d-flex align-items-center'>
				<div className='container-fluid container-xl d-flex align-items-center justify-content-lg-between'>
					<h1 className={`${style.logo} me-auto me-lg-0`}>
						<Link href='/'>Cheffy</Link>
					</h1>
					{/* <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html" class="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>--> */}

					<nav id='navbar' className={`${style.navbar} order-last order-lg-0`}>
						<ul>
							<li>
								<a className={`nav-link scrollto ${style.active}`} href='#hero'>
									Home
								</a>
							</li>
							<li>
								<a className='nav-link scrollto' href='#about'>
									About
								</a>
							</li>
							{/* <li>
								<a className='nav-link scrollto' href='#menu'>
									Menu
								</a>
							</li>
							<li>
								<a className='nav-link scrollto' href='#specials'>
									Specials
								</a>
							</li>
							<li>
								<a className='nav-link scrollto' href='#events'>
									Events
								</a>
							</li>
							<li>
								<a className='nav-link scrollto' href='#chefs'>
									Chefs
								</a>
							</li>
							<li>
								<a className='nav-link scrollto' href='#gallery'>
									Gallery
								</a>
							</li> */}
							<li className={style.dropdown}>
								<a href='#'>
									<span>Drop Down</span> <i className='bi bi-chevron-down'></i>
								</a>
								<ul>
									<li>
										<a href='#'>Drop Down 1</a>
									</li>
									<li className={style.dropdown}>
										<a href='#'>
											<span>Deep Drop Down</span>{' '}
											<i className='bi bi-chevron-right'></i>
										</a>
										<ul>
											<li>
												<a href='#'>Deep Drop Down 1</a>
											</li>
											<li>
												<a href='#'>Deep Drop Down 2</a>
											</li>
											<li>
												<a href='#'>Deep Drop Down 3</a>
											</li>
											<li>
												<a href='#'>Deep Drop Down 4</a>
											</li>
											<li>
												<a href='#'>Deep Drop Down 5</a>
											</li>
										</ul>
									</li>
									<li>
										<a href='#'>Drop Down 2</a>
									</li>
									<li>
										<a href='#'>Drop Down 3</a>
									</li>
									<li>
										<a href='#'>Drop Down 4</a>
									</li>
								</ul>
							</li>
							<li>
								<a className='nav-link scrollto' href='#contact'>
									Contact
								</a>
							</li>
						</ul>
						<i className={`bi bi-list ${style.mobile_nav_toggle}`}></i>
					</nav>
					{/* <!-- .navbar --> */}
					<a
						href='#book-a-table'
						className={`${style.book_a_table_btn} scrollto d-none d-lg-flex`}>
						Book a table
					</a>
				</div>
			</header>
			{/* <!-- End Header --></> */}
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const data = 'await getData()'
	return {
		props: {
			data,
		},
	}
}

export default Navbar
