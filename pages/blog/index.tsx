import { NextPage } from 'next'
import Image from 'next/image'
import { BlogFooter, BlogNavbar } from '../../components'
import style from '../../styles/blog/index.module.scss'

const BlogPage: NextPage = () => {
	return (
		<>
			<BlogNavbar />
			<section id='hero' className={`${style.hero} bg-light flex-column py-3`}>
				<div className='container d-flex flex-row justify-content-center px-5'>
					<div className='d-flex col-7 justify-content-evenly flex-column py-3'>
						<span className='fw-light fst-italic'>April 12, 2021</span>
						<h1 className='fw-bold'>Vietnamese Food Guide Top Hawker Restaurants</h1>
						<p>
							Vietnamese food rates right up there with some of the best in the world.
							To have a full foodie experience, though, you need to visit each region.
							While most areas serve cuisine known by the same name
						</p>
						<div className='d-flex justify-content-start'>
							<div className='d-flex align-items-center pe-5'>
								<img src='/Images/Avatar.png' className='img-fluid rounded' />
								<span className='px-2 fs-6 fw-bold'>John Doe</span>
							</div>
							<div className='d-flex align-items-center px-5'>
								<i className='bi bi-clock fs-4'></i>
								<span className='ps-2 fs-6 fw-bold pe-5'>6 min to read</span>
							</div>
						</div>
					</div>
					<div className='col-5'>
						<Image
							width={500}
							height={350}
							layout='responsive'
							src='/Images/blog_page.png'
							alt='Blog Page'
						/>
					</div>
				</div>
			</section>
			<main className={`d-flex bg-light ${style.main} flex-column justify-content-between`}>
				<div className='container d-flex py-4 px-5'>
					<div className='col-9 pe-4'>
						<h2>Recent Articles</h2>
						<div className='py-2'>
							<div className='card d-flex flex-row'>
								<img
									src='/Images/blog_page.png'
									width='300px'
									className='img-fluid rounded'
									alt='...'
								/>
								<div className='card-body'>
									<span className={style.badge}>Attractions</span>
									<h2 className='card-title pt-2 fw-bold'>
										Wine Tasting Tours: Regions & Vineyards with Toast-Worthy
										Wineries
									</h2>
									<div className='d-flex justify-content-between pt-2'>
										<div className='d-flex align-items-center pe-5'>
											<img
												src='/Images/Avatar.png'
												className='img-fluid rounded'
											/>
											<div className='px-2 d-flex flex-column'>
												<span className='fs-6 fw-bold'>John Doe</span>
												<span>January 7, 2021</span>
											</div>
										</div>
										<div className='d-flex align-items-center fs-4 justify-content-end'>
											<i className='bi bi-heart pe-1'></i>
											<i className='bi bi-share ps-1'></i>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='py-2'>
							<div className='card d-flex flex-row'>
								<img
									src='/Images/blog_page.png'
									width='300px'
									className='img-fluid rounded'
									alt='...'
								/>
								<div className='card-body'>
									<span className={style.badge}>Attractions</span>
									<h2 className='card-title pt-2 fw-bold'>
										Wine Tasting Tours: Regions & Vineyards with Toast-Worthy
										Wineries
									</h2>
									<div className='d-flex justify-content-between pt-2'>
										<div className='d-flex align-items-center pe-5'>
											<img
												src='/Images/Avatar.png'
												className='img-fluid rounded'
											/>
											<div className='px-2 d-flex flex-column'>
												<span className='fs-6 fw-bold'>John Doe</span>
												<span>January 7, 2021</span>
											</div>
										</div>
										<div className='d-flex align-items-center fs-4 justify-content-end'>
											<i className='bi bi-heart pe-1'></i>
											<i className='bi bi-share ps-1'></i>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='py-2'>
							<div className='card d-flex flex-row'>
								<img
									src='/Images/blog_page.png'
									width='300px'
									className='img-fluid rounded'
									alt='...'
								/>
								<div className='card-body'>
									<span className={style.badge}>Attractions</span>
									<h2 className='card-title pt-2 fw-bold'>
										Wine Tasting Tours: Regions & Vineyards with Toast-Worthy
										Wineries
									</h2>
									<div className='d-flex justify-content-between pt-2'>
										<div className='d-flex align-items-center pe-5'>
											<img
												src='/Images/Avatar.png'
												className='img-fluid rounded'
											/>
											<div className='px-2 d-flex flex-column'>
												<span className='fs-6 fw-bold'>John Doe</span>
												<span>January 7, 2021</span>
											</div>
										</div>
										<div className='d-flex align-items-center fs-4 justify-content-end'>
											<i className='bi bi-heart pe-1'></i>
											<i className='bi bi-share ps-1'></i>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='py-2'>
							<div className='card d-flex flex-row'>
								<img
									src='/Images/blog_page.png'
									width='300px'
									className='img-fluid rounded'
									alt='...'
								/>
								<div className='card-body'>
									<span className={style.badge}>Attractions</span>
									<h2 className='card-title pt-2 fw-bold'>
										Wine Tasting Tours: Regions & Vineyards with Toast-Worthy
										Wineries
									</h2>
									<div className='d-flex justify-content-between pt-2'>
										<div className='d-flex align-items-center pe-5'>
											<img
												src='/Images/Avatar.png'
												className='img-fluid rounded'
											/>
											<div className='px-2 d-flex flex-column'>
												<span className='fs-6 fw-bold'>John Doe</span>
												<span>January 7, 2021</span>
											</div>
										</div>
										<div className='d-flex align-items-center fs-4 justify-content-end'>
											<i className='bi bi-heart pe-1'></i>
											<i className='bi bi-share ps-1'></i>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='py-4'>
							<span className={style.btn_load}>LOAD MORE POSTS</span>
						</div>
					</div>
					<div className='col-3'>
						<h3
							className='pb-2'
							style={{
								borderBottom: '1px #0f0f0f solid',
							}}>
							Treading topics
						</h3>
						<div className='d-flex py-1'>
							<div className='d-flex flex-column col-6 justify-content-center align-items-end pe-2'>
								<div className='d-flex align-items-end justify-content-center pb-2'>
									<span className='position-absolute pb-2 text-white'>
										Food & Drink
									</span>
									<img
										src='/Images/food_and_drink.png'
										className='img-fluid'
										alt='Food and Drink'
									/>
								</div>
								<div className='d-flex align-items-end justify-content-center pt-2'>
									<span className='position-absolute pb-2 text-white'>
										Hotels
									</span>
									<img
										src='/Images/hotels.png'
										className='img-fluid'
										alt='Hotels'
									/>
								</div>
							</div>
							<div className='d-flex flex-column col-6 justify-content-center align-items-start ps-2'>
								<div className='d-flex align-items-end justify-content-center pb-2'>
									<span className='position-absolute pb-2 text-white'>
										Atractions
									</span>
									<img
										src='/Images/atractions.png'
										className='img-fluid'
										alt='Atractions'
									/>
								</div>
								<div className='d-flex align-items-end justify-content-center pt-2'>
									<span className='position-absolute pb-2 text-white'>
										Restaurants
									</span>
									<img
										src='/Images/restaurants.png'
										className='img-fluid'
										alt='Restaurants'
									/>
								</div>
							</div>
						</div>
						<h3
							className='pt-4 pb-2'
							style={{
								borderBottom: '1px #0f0f0f solid',
							}}>
							Popular posts
						</h3>
					</div>
				</div>
				<div className='container d-flex py-4 px-5 justify-content-center align-items-center'>
					<div className='col-4 pe-2'>
						<div className='card'>
							<img src='/Images/image_1.png' className='card-img-top' alt='...' />
							<div className='card-body'>
								<span className='text-black-50'>June 22, 2018</span>
								<h4 className='card-title fw-bold'>
									10 Award-Winning & Affordable Michelin Star Restaurants in...
								</h4>
							</div>
						</div>
					</div>
					<div className='col-4 px-2'>
						<div className='card'>
							<img src='/Images/image_2.png' className='card-img-top' alt='...' />
							<div className='card-body'>
								<span className='text-black-50'>June 22, 2018</span>
								<h4 className='card-title fw-bold'>
									Secret Escapes: 12 Honeymoon Destinations & Best Places to...
								</h4>
							</div>
						</div>
					</div>
					<div className='col-4 ps-2'>
						<div className='card'>
							<img src='/Images/image_3.png' className='card-img-top' alt='...' />
							<div className='card-body'>
								<span className='text-black-50'>June 22, 2018</span>
								<h4 className='card-title fw-bold'>
									Rounding Up the Hottest Hotel Openings of 2017 for Your...
								</h4>
							</div>
						</div>
					</div>
				</div>
				<div className='container d-flex py-4 px-5 justify-content-center align-items-center'>
					<div className='col-4 pe-2'>
						<div className='card'>
							<img src='/Images/image_4.png' className='card-img-top' alt='...' />
							<div className='card-body'>
								<span className='text-black-50'>January 15, 2018</span>
								<h4 className='card-title fw-bold'>
									Suffering from &apos;Nomophobia&apos;? Get Off the Grid with
									these...
								</h4>
							</div>
						</div>
					</div>
					<div className='col-4 px-2'>
						<div className='card'>
							<img src='/Images/image_5.png' className='card-img-top' alt='...' />
							<div className='card-body'>
								<span className='text-black-50'>December 26, 2017</span>
								<h4 className='card-title fw-bold'>
									5 Indonesian Hot Spots That Will Make a Splash in 2018
								</h4>
							</div>
						</div>
					</div>
					<div className='col-4 ps-2'>
						<div className='card'>
							<img src='/Images/image_6.png' className='card-img-top' alt='...' />
							<div className='card-body'>
								<span className='text-black-50'>December 19, 2017</span>
								<h4 className='card-title fw-bold'>
									6 Eco-Hotels Leading the Way to Greener Travel...
								</h4>
							</div>
						</div>
					</div>
				</div>
				<div className='container d-flex py-4 px-5 justify-content-center align-items-center'>
					<nav className='px-5' aria-label='Page navigation example'>
						<ul className='pagination justify-content-between p-3 align-items-center'>
							<div className='d-flex'>
								<li className={style.page_number}>
									<a className={style.active} href='#'>
										1
									</a>
								</li>
								<li className={style.page_number}>
									<a href='#'>2</a>
								</li>
								<li className={style.page_number}>
									<a href='#'>3</a>
								</li>
								<li className={style.page_number}>
									<a href='#'>4</a>
								</li>
							</div>
						</ul>
					</nav>
				</div>
				<BlogFooter />
			</main>
		</>
	)
}

export default BlogPage
