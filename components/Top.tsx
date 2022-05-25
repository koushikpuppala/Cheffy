import type { NextComponentType } from 'next'
import style from '../styles/components/top.module.scss'
import Link from 'next/link'
import { useEffect } from 'react'

const Top: NextComponentType = () => {
	useEffect(() => {
		const selectHeader = document.querySelector(`#${style.topbar}`)
		if (selectHeader !== null) {
			const headerScrolled = () => {
				if (window.scrollY > 100) selectHeader.classList.add(style.topbar_scrolled)
				else selectHeader.classList.remove(style.topbar_scrolled)
			}
			window.addEventListener('load', headerScrolled)
			window.addEventListener('scroll', headerScrolled)
		}
	})
	return (
		<>
			{/* <!-- ======= Top Bar ======= --> */}
			<div id={style.topbar} className='d-flex align-items-center fixed-top'>
				<div className='container d-flex justify-content-center justify-content-md-between'>
					<div className={`${style.contact_info} d-flex align-items-center`}>
						<i className='bi bi-phone d-flex align-items-center'>
							<span>+1 5589 55488 55</span>
						</i>
						<i className='bi bi-clock d-flex align-items-center ms-4'>
							<span> Mon-Sat: 11AM - 23PM</span>
						</i>
					</div>

					<div className={`${style.languages} d-none d-md-flex align-items-center`}>
						<ul>
							<li>En</li>
							<li>
								<Link href='/'>De</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}

export default Top
