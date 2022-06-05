/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next'
import Image from 'next/image'
import { BlogFooter, BlogNavbar } from '../../components'
import style from '../../styles/blog/detail.module.scss'

const BlogPage: NextPage = () => {
	return (
		<>
			<BlogNavbar />
			<section id='hero' className={`${style.hero} bg-light flex-column py-3`}>
				<div className='container-fluid d-flex flex-column justify-content-center'>
					<div
						className='d-flex justify-content-evenly flex-column py-3'
						style={{
							padding: '20rem',
						}}>
						<span className='fw-light fst-italic'>April 12, 2021</span>
						<h1 className='fw-bold'>Vietnamese Food Guide Top Hawker Restaurants</h1>
						<div className='d-flex justify-content-between fs-6'>
							<span className='text-black-50'>April 12, 2021</span>
							<div
								className='d-flex align-items-center'
								style={{
									padding: '0 10rem 0 0',
								}}>
								<i className='bi bi-share px-2'></i>
								<i className='bi bi-heart px-2'></i>
							</div>
						</div>
					</div>

					<Image
						width={'1280px'}
						height={'480px'}
						layout='responsive'
						className='px-4'
						src='/Images/blog_detail.png'
						alt='Blog Page'
					/>
				</div>
			</section>
			<main className={`d-flex bg-light ${style.main} flex-column justify-content-between`}>
				<div
					className='container-fluid d-flex flex-column py-4'
					style={{
						padding: '20rem',
					}}>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra
						accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel
						elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem
						mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh
						tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed
						lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare
						massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit
						tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra
						suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est
						sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque
						fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus
						sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a
						diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id
						aliquet.
					</p>
					<br />
					<h2>Lorem ipsum dolor sit amet</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra
						accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel
						elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem
						mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh
						tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed
						lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare
						massa eget. Dictum varius duis at consectetur lorem.
					</p>
					<br />
					<div
						className='p-4'
						style={{
							display: 'flex',
							borderRadius: '1rem',
							background: '#f6f9ff',
						}}>
						<span className='fst-italic fw-light'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Egestas purus
							viverra accumsan in nisl nisi.
						</span>
					</div>
					<br />
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra
						accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel
						elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem
						mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh
						tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed
						lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare
						massa eget. Dictum varius duis at consectetur lorem.
					</p>
					<Image
						src='/Images/blog_image.png'
						layout='responsive'
						width={'720px'}
						height={'504px'}
						className='py-3'
					/>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra
						accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel
						elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem
						mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh
						tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed
						lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare
						massa eget. Dictum varius duis at consectetur lorem.
					</p>
					<hr />
					<div className='d-flex flex-column'>
						<div className='d-flex flex-column'>
							<span className='fs-3 fw-bold pb-3'>Tags:</span>
							<div
								className='d-flex flex-row justify-content-between'
								style={{
									paddingRight: '32.5rem',
								}}>
								<span className={style.tags}>Food & Drink</span>
								<span className={style.tags}>Attraction</span>
								<span className={style.tags}>Vietnam</span>
								<span className={style.tags}>Hotels</span>
							</div>
						</div>
						<div className='d-flex py-4 flex-row justify-content-center align-items-center'>
							<div className='col-3 pe-3'>
								<Image
									src='/Images/blog_avatar.png'
									layout='responsive'
									width={100}
									height={100}
									className='img-fluid rounded'
								/>
							</div>
							<div className='d-flex flex-column col-9 '>
								<h3 className='fw-bold'>Jhon Doe</h3>
								<span>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
									eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</span>
								<span className='text-primary fs-6'>Social Media</span>
								<div
									className='d-flex flex-row justify-content-between '
									style={{
										paddingRight: '32rem',
									}}>
									<span className={style.social}>
										<i className='bx bxl-facebook'></i>
									</span>
									<span className={style.social}>
										<i className='bx bxl-linkedin'></i>
									</span>
									<span className={style.social}>
										<i className='bx bxl-google'></i>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='container-fluid'>
					<div className='px-5'>
						<hr />
					</div>
					<div
						className='d-flex flex-column py-4'
						style={{
							padding: '20rem',
						}}>
						<h2 className='fw-bold'>Comments</h2>
						<div>
							<div className='p-3'>
								<div className='d-flex align-items-center'>
									<img src='/Images/Avatar_2.png' alt='' />
									<span className='px-2 fw-bold fs-4'>Siti</span>
								</div>
								<h3 className='py-3'>Lorem ipsum dolor sit amet, consectetur</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
									eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
									congue mauris rhoncus aenean vel elit scelerisque. In egestas
									erat imperdiet sed euismod nisi porta lorem mollis. Morbi
									tristique senectus et netus. Mattis pellentesque id nibh tortor
									id aliquet lectus proin. Sapien faucibus et molestie ac feugiat
									sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi
									tincidunt ornare massa eget. Dictum varius duis at consectetur
									lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed
									enim. Velit ut tortor pretium viverra suspendisse potenti
									nullam.
								</p>
							</div>
							<div
								className='p-3 bg-info bg-opacity-10'
								style={{
									borderRadius: '0.5rem',
								}}>
								<div className='d-flex align-items-center'>
									<img src='/Images/Avatar_1.png' alt='' />
									<span className='px-2 fw-bold fs-4'>Zhen</span>
								</div>
								<h3 className='py-3'>Lorem ipsum dolor sit amet, consectetur</h3>
								<p>
									Breakfast, nice staff and view to burj khalifa <br /> Lorem
									ipsum dolor sit amet, consectetur adipiscing elit, sed do
									eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
									congue mauris rhoncus aenean
								</p>
							</div>
							<div className='p-3'>
								<div className='d-flex align-items-center'>
									<img src='/Images/Avatar.png' alt='' />
									<span className='px-2 fw-bold fs-4'>Jason </span>
								</div>
								<h3 className='py-3'>Lorem ipsum dolor sit amet</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
									eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
									congue mauris rhoncus aenean vel elit scelerisque. In egestas
									erat imperdiet sed euismod nisi porta lorem mollis.
								</p>
							</div>
						</div>
					</div>
					<div className='px-5'>
						<hr />
					</div>
					<div
						className='d-flex flex-column py-4'
						style={{
							padding: '20rem',
						}}>
						<h3 className='fw-bold pb-4'>Leave a Reply</h3>
						<div className='d-flex flex-row justify-content-between'>
							<div className='col-6 pe-1'>
								<div className='input-group'>
									<div
										className='input-group-text col-1'
										style={{
											backgroundColor: '#fff',
										}}>
										<i className='bi bi-person col-12'></i>
									</div>
									<div className='form-floating col-11'>
										<input
											type='text'
											className='form-control'
											id='username'
											placeholder='Cheffy'
											style={{
												borderRadius: '0 0.375rem 0.375rem 0',
												borderLeft: 'none',
											}}
										/>
										<label htmlFor='username'>Enter Your Full Name</label>
									</div>
								</div>
							</div>
							<div className='col-6 ps-1'>
								<div className='input-group'>
									<div
										className='input-group-text col-1'
										style={{
											backgroundColor: '#fff',
										}}>
										<i className='bi bi-envelope col-12'></i>
									</div>
									<div className='form-floating col-11'>
										<input
											type='email'
											className='form-control'
											id='email'
											placeholder='help@cheffy.us'
											style={{
												borderRadius: '0 0.375rem 0.375rem 0',
												borderLeft: 'none',
											}}
										/>
										<label htmlFor='email'>Enter Email Address</label>
									</div>
								</div>
							</div>
						</div>
						<div className='py-3'>
							<div className='form-floating'>
								<textarea
									className='form-control'
									id='description'
									placeholder='Cheffy@123'
									style={{
										height: '150px',
									}}></textarea>
								<label htmlFor='description' className='py-3'>
									Your Message
								</label>
							</div>
						</div>
						<button className={style.btn}>POST COMMENTS</button>
					</div>
					<div className='px-5'>
						<hr />
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
				<BlogFooter />
			</main>
		</>
	)
}

export default BlogPage
