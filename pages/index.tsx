import type { NextPage } from 'next'
import { Top, Header, About, Contact, Navbar, Footer } from '../components'
import style from '../styles/Home.module.scss'

const Home: NextPage = () => {
	return (
		<>
			<Header title='Cheffy | Home' description='' />
			<Top />
			<Navbar />

			{/* <!-- ======= Hero Section ======= --> */}
			<section id='hero' className={`${style.hero} d-flex align-items-center`}>
				<div
					className='container position-relative text-center text-lg-start'
					data-aos='zoom-in'
					data-aos-delay='100'>
					<div className='row'>
						<div className='col-lg-8'>
							<h1>
								Welcome to <span>Cheffy</span>
							</h1>
							<h2>Delivering great food for more than 18 years!</h2>

							<div className={style.btns}>
								<a
									href='#menu'
									className={`${style.btn_menu} animated fadeInUp scrollto`}>
									Our Menu
								</a>
								<a
									href='#book-a-table'
									className={`${style.btn_book} animated fadeInUp scrollto`}>
									Book a Table
								</a>
							</div>
						</div>
						<div
							className='col-lg-4 d-flex align-items-center justify-content-center position-relative'
							data-aos='zoom-in'
							data-aos-delay='200'>
							<a
								href='https://youtu.be/G3ncpfG-HG4'
								className={`glightbox ${style.play_btn}`}></a>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- End Hero --> */}
			<main id='main'>
				<About />
				<Contact />
				<Footer />
			</main>
		</>
	)
}

export default Home
