/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import { ProfileFooter, ProfileNavbar } from '../components'
import style from '../styles/faq.module.scss'

const FAQ: NextPage = () => {
	return (
		<>
			<ProfileNavbar />
			<section id='hero' className={`${style.hero} bg-light py-3`}>
				<div className='d-flex flex-row container'>
					<div className='col-3 pe-5'>
						<div className={style.card}>
							<ul className='p-0'>
								<li className='d-flex align-items-center'>
									<i className='bi bi-person fs-5 pe-2'></i>
									<strong>Most frequently question</strong>
								</li>
								<hr />
								<li className='d-flex align-items-center'>
									<i className='bi bi-calendar2-date fs-5 pe-2'></i>
									Booking
								</li>
								<hr />
								<li className='d-flex align-items-center'>
									<i className='bi bi-x-octagon fs-5 pe-2'></i>
									Cancellation
								</li>
								<hr />
								<li className='d-flex align-items-center'>
									<i className='bi bi-calendar2-date fs-5 pe-2'></i>
									Change booking
								</li>
							</ul>
						</div>
					</div>
					<div className='col-6'>
						<h2>Most frequently question</h2>
						<div className='accordion accordion-flush' id='faq'>
							<div className='py-2'>
								<div className={`accordion-item ${style.accordionItem}`}>
									<h2
										className='accordion-header'
										id='most_frequently_question_1_heading'>
										<button
											className='accordion-button collapsed'
											type='button'
											data-bs-toggle='collapse'
											data-bs-target='#most_frequently_question_1'
											aria-expanded='false'
											aria-controls='most_frequently_question_1'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										</button>
									</h2>
									<div
										id='most_frequently_question_1'
										className='accordion-collapse collapse'
										aria-labelledby='most_frequently_question_1_heading'
										data-bs-parent='#faq'>
										<div className='accordion-body'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore
											magna aliqua Egestas purus viverra accumsan in nisl nisi
											Arcu cursus vitae congue mauris rhoncus aenean vel elit
											scelerisque In egestas erat imperdiet sed euismod nisi
											porta lorem mollis Morbi tristique senectus et netus
											Mattis pellentesque id nibh tortor id aliquet lectus
											proin Sapien faucibus et molestie ac feugiat sed lectus
											vestibulum Ullamcorper velit sed ullamcorper morbi
											tincidunt ornare massa eget
											<div className='d-flex align-items-center'>
												<i className='bi bi-hand-thumbs-up-fill text-success'></i>
												<i className='bi bi-hand-thumbs-down-fill text-danger px-1'></i>
												<span>Did this help solve your issue?</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='py-2'>
								<div className={`accordion-item ${style.accordionItem}`}>
									<h2
										className='accordion-header'
										id='most_frequently_question_1_heading'>
										<button
											className='accordion-button collapsed'
											type='button'
											data-bs-toggle='collapse'
											data-bs-target='#most_frequently_question_2'
											aria-expanded='false'
											aria-controls='most_frequently_question_2'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										</button>
									</h2>
									<div
										id='most_frequently_question_2'
										className='accordion-collapse collapse'
										aria-labelledby='most_frequently_question_1_heading'
										data-bs-parent='#faq'>
										<div className='accordion-body'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore
											magna aliqua Egestas purus viverra accumsan in nisl nisi
											Arcu cursus vitae congue mauris rhoncus aenean vel elit
											scelerisque In egestas erat imperdiet sed euismod nisi
											porta lorem mollis Morbi tristique senectus et netus
											Mattis pellentesque id nibh tortor id aliquet lectus
											proin Sapien faucibus et molestie ac feugiat sed lectus
											vestibulum Ullamcorper velit sed ullamcorper morbi
											tincidunt ornare massa eget
											<div className='d-flex align-items-center'>
												<i className='bi bi-hand-thumbs-up-fill text-success'></i>
												<i className='bi bi-hand-thumbs-down-fill text-danger px-1'></i>
												<span>Did this help solve your issue?</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<br />
							<h2>Booking</h2>
							<div className='py-2'>
								<div className={`accordion-item ${style.accordionItem}`}>
									<h2 className='accordion-header' id='booking_1_heading'>
										<button
											className='accordion-button collapsed'
											type='button'
											data-bs-toggle='collapse'
											data-bs-target='#booking_1'
											aria-expanded='false'
											aria-controls='booking_1'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										</button>
									</h2>
									<div
										id='booking_1'
										className='accordion-collapse collapse'
										aria-labelledby='booking_1_heading'
										data-bs-parent='#faq'>
										<div className='accordion-body'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore
											magna aliqua Egestas purus viverra accumsan in nisl nisi
											Arcu cursus vitae congue mauris rhoncus aenean vel elit
											scelerisque In egestas erat imperdiet sed euismod nisi
											porta lorem mollis Morbi tristique senectus et netus
											Mattis pellentesque id nibh tortor id aliquet lectus
											proin Sapien faucibus et molestie ac feugiat sed lectus
											vestibulum Ullamcorper velit sed ullamcorper morbi
											tincidunt ornare massa eget
											<div className='d-flex align-items-center'>
												<i className='bi bi-hand-thumbs-up-fill text-success'></i>
												<i className='bi bi-hand-thumbs-down-fill text-danger px-1'></i>
												<span>Did this help solve your issue?</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='py-2'>
								<div className={`accordion-item ${style.accordionItem}`}>
									<h2 className='accordion-header' id='booking_2_heading'>
										<button
											className='accordion-button collapsed'
											type='button'
											data-bs-toggle='collapse'
											data-bs-target='#booking_2'
											aria-expanded='false'
											aria-controls='booking_2'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										</button>
									</h2>
									<div
										id='booking_2'
										className='accordion-collapse collapse'
										aria-labelledby='booking_2_heading'
										data-bs-parent='#faq'>
										<div className='accordion-body'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore
											magna aliqua Egestas purus viverra accumsan in nisl nisi
											Arcu cursus vitae congue mauris rhoncus aenean vel elit
											scelerisque In egestas erat imperdiet sed euismod nisi
											porta lorem mollis Morbi tristique senectus et netus
											Mattis pellentesque id nibh tortor id aliquet lectus
											proin Sapien faucibus et molestie ac feugiat sed lectus
											vestibulum Ullamcorper velit sed ullamcorper morbi
											tincidunt ornare massa eget
											<div className='d-flex align-items-center'>
												<i className='bi bi-hand-thumbs-up-fill text-success'></i>
												<i className='bi bi-hand-thumbs-down-fill text-danger px-1'></i>
												<span>Did this help solve your issue?</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='py-2'>
								<div className={`accordion-item ${style.accordionItem}`}>
									<h2 className='accordion-header' id='booking_3_heading'>
										<button
											className='accordion-button collapsed'
											type='button'
											data-bs-toggle='collapse'
											data-bs-target='#booking_3'
											aria-expanded='false'
											aria-controls='booking_3'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										</button>
									</h2>
									<div
										id='booking_3'
										className='accordion-collapse collapse'
										aria-labelledby='booking_3_heading'
										data-bs-parent='#faq'>
										<div className='accordion-body'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore
											magna aliqua Egestas purus viverra accumsan in nisl nisi
											Arcu cursus vitae congue mauris rhoncus aenean vel elit
											scelerisque In egestas erat imperdiet sed euismod nisi
											porta lorem mollis Morbi tristique senectus et netus
											Mattis pellentesque id nibh tortor id aliquet lectus
											proin Sapien faucibus et molestie ac feugiat sed lectus
											vestibulum Ullamcorper velit sed ullamcorper morbi
											tincidunt ornare massa eget
											<div className='d-flex align-items-center'>
												<i className='bi bi-hand-thumbs-up-fill text-success'></i>
												<i className='bi bi-hand-thumbs-down-fill text-danger px-1'></i>
												<span>Did this help solve your issue?</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='py-2'>
								<div className={`accordion-item ${style.accordionItem}`}>
									<h2 className='accordion-header' id='booking_4_heading'>
										<button
											className='accordion-button collapsed'
											type='button'
											data-bs-toggle='collapse'
											data-bs-target='#booking_4'
											aria-expanded='false'
											aria-controls='booking_4'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										</button>
									</h2>
									<div
										id='booking_4'
										className='accordion-collapse collapse'
										aria-labelledby='booking_4_heading'
										data-bs-parent='#faq'>
										<div className='accordion-body'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore
											magna aliqua Egestas purus viverra accumsan in nisl nisi
											Arcu cursus vitae congue mauris rhoncus aenean vel elit
											scelerisque In egestas erat imperdiet sed euismod nisi
											porta lorem mollis Morbi tristique senectus et netus
											Mattis pellentesque id nibh tortor id aliquet lectus
											proin Sapien faucibus et molestie ac feugiat sed lectus
											vestibulum Ullamcorper velit sed ullamcorper morbi
											tincidunt ornare massa eget
											<div className='d-flex align-items-center'>
												<i className='bi bi-hand-thumbs-up-fill text-success'></i>
												<i className='bi bi-hand-thumbs-down-fill text-danger px-1'></i>
												<span>Did this help solve your issue?</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='py-2'>
								<div className={`accordion-item ${style.accordionItem}`}>
									<h2 className='accordion-header' id='booking_5_heading'>
										<button
											className='accordion-button collapsed'
											type='button'
											data-bs-toggle='collapse'
											data-bs-target='#booking_5'
											aria-expanded='false'
											aria-controls='booking_5'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										</button>
									</h2>
									<div
										id='booking_5'
										className='accordion-collapse collapse'
										aria-labelledby='booking_5_heading'
										data-bs-parent='#faq'>
										<div className='accordion-body'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore
											magna aliqua Egestas purus viverra accumsan in nisl nisi
											Arcu cursus vitae congue mauris rhoncus aenean vel elit
											scelerisque In egestas erat imperdiet sed euismod nisi
											porta lorem mollis Morbi tristique senectus et netus
											Mattis pellentesque id nibh tortor id aliquet lectus
											proin Sapien faucibus et molestie ac feugiat sed lectus
											vestibulum Ullamcorper velit sed ullamcorper morbi
											tincidunt ornare massa eget
											<div className='d-flex align-items-center'>
												<i className='bi bi-hand-thumbs-up-fill text-success'></i>
												<i className='bi bi-hand-thumbs-down-fill text-danger px-1'></i>
												<span>Did this help solve your issue?</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<br />
							<h2>Cancellation</h2>
							<div className='py-2'>
								<div className={`accordion-item ${style.accordionItem}`}>
									<h2 className='accordion-header' id='cancellation_1_heading'>
										<button
											className='accordion-button collapsed'
											type='button'
											data-bs-toggle='collapse'
											data-bs-target='#cancellation_1'
											aria-expanded='false'
											aria-controls='cancellation_1'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										</button>
									</h2>
									<div
										id='cancellation_1'
										className='accordion-collapse collapse'
										aria-labelledby='cancellation_1_heading'
										data-bs-parent='#faq'>
										<div className='accordion-body'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore
											magna aliqua Egestas purus viverra accumsan in nisl nisi
											Arcu cursus vitae congue mauris rhoncus aenean vel elit
											scelerisque In egestas erat imperdiet sed euismod nisi
											porta lorem mollis Morbi tristique senectus et netus
											Mattis pellentesque id nibh tortor id aliquet lectus
											proin Sapien faucibus et molestie ac feugiat sed lectus
											vestibulum Ullamcorper velit sed ullamcorper morbi
											tincidunt ornare massa eget
											<div className='d-flex align-items-center'>
												<i className='bi bi-hand-thumbs-up-fill text-success'></i>
												<i className='bi bi-hand-thumbs-down-fill text-danger px-1'></i>
												<span>Did this help solve your issue?</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='py-2'>
								<div className={`accordion-item ${style.accordionItem}`}>
									<h2 className='accordion-header' id='cancellation_2_heading'>
										<button
											className='accordion-button collapsed'
											type='button'
											data-bs-toggle='collapse'
											data-bs-target='#cancellation_2'
											aria-expanded='false'
											aria-controls='cancellation_2'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										</button>
									</h2>
									<div
										id='cancellation_2'
										className='accordion-collapse collapse'
										aria-labelledby='cancellation_2_heading'
										data-bs-parent='#faq'>
										<div className='accordion-body'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore
											magna aliqua Egestas purus viverra accumsan in nisl nisi
											Arcu cursus vitae congue mauris rhoncus aenean vel elit
											scelerisque In egestas erat imperdiet sed euismod nisi
											porta lorem mollis Morbi tristique senectus et netus
											Mattis pellentesque id nibh tortor id aliquet lectus
											proin Sapien faucibus et molestie ac feugiat sed lectus
											vestibulum Ullamcorper velit sed ullamcorper morbi
											tincidunt ornare massa eget
											<div className='d-flex align-items-center'>
												<i className='bi bi-hand-thumbs-up-fill text-success'></i>
												<i className='bi bi-hand-thumbs-down-fill text-danger px-1'></i>
												<span>Did this help solve your issue?</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='py-2'>
								<div className={`accordion-item ${style.accordionItem}`}>
									<h2 className='accordion-header' id='cancellation_3_heading'>
										<button
											className='accordion-button collapsed'
											type='button'
											data-bs-toggle='collapse'
											data-bs-target='#cancellation_3'
											aria-expanded='false'
											aria-controls='cancellation_3'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										</button>
									</h2>
									<div
										id='cancellation_3'
										className='accordion-collapse collapse'
										aria-labelledby='cancellation_3_heading'
										data-bs-parent='#faq'>
										<div className='accordion-body'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore
											magna aliqua Egestas purus viverra accumsan in nisl nisi
											Arcu cursus vitae congue mauris rhoncus aenean vel elit
											scelerisque In egestas erat imperdiet sed euismod nisi
											porta lorem mollis Morbi tristique senectus et netus
											Mattis pellentesque id nibh tortor id aliquet lectus
											proin Sapien faucibus et molestie ac feugiat sed lectus
											vestibulum Ullamcorper velit sed ullamcorper morbi
											tincidunt ornare massa eget
											<div className='d-flex align-items-center'>
												<i className='bi bi-hand-thumbs-up-fill text-success'></i>
												<i className='bi bi-hand-thumbs-down-fill text-danger px-1'></i>
												<span>Did this help solve your issue?</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<br />
							<h2>Change booking</h2>
							<div className='py-2'>
								<div className={`accordion-item ${style.accordionItem}`}>
									<h2 className='accordion-header' id='change_booking_1_heading'>
										<button
											className='accordion-button collapsed'
											type='button'
											data-bs-toggle='collapse'
											data-bs-target='#change_booking_1'
											aria-expanded='false'
											aria-controls='change_booking_1'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										</button>
									</h2>
									<div
										id='change_booking_1'
										className='accordion-collapse collapse'
										aria-labelledby='change_booking_1_heading'
										data-bs-parent='#faq'>
										<div className='accordion-body'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore
											magna aliqua Egestas purus viverra accumsan in nisl nisi
											Arcu cursus vitae congue mauris rhoncus aenean vel elit
											scelerisque In egestas erat imperdiet sed euismod nisi
											porta lorem mollis Morbi tristique senectus et netus
											Mattis pellentesque id nibh tortor id aliquet lectus
											proin Sapien faucibus et molestie ac feugiat sed lectus
											vestibulum Ullamcorper velit sed ullamcorper morbi
											tincidunt ornare massa eget
											<div className='d-flex align-items-center'>
												<i className='bi bi-hand-thumbs-up-fill text-success'></i>
												<i className='bi bi-hand-thumbs-down-fill text-danger px-1'></i>
												<span>Did this help solve your issue?</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='py-2'>
								<div className={`accordion-item ${style.accordionItem}`}>
									<h2 className='accordion-header' id='change_booking_1_heading'>
										<button
											className='accordion-button collapsed'
											type='button'
											data-bs-toggle='collapse'
											data-bs-target='#change_booking_2'
											aria-expanded='false'
											aria-controls='change_booking_2'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										</button>
									</h2>
									<div
										id='change_booking_2'
										className='accordion-collapse collapse'
										aria-labelledby='change_booking_1_heading'
										data-bs-parent='#faq'>
										<div className='accordion-body'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore
											magna aliqua Egestas purus viverra accumsan in nisl nisi
											Arcu cursus vitae congue mauris rhoncus aenean vel elit
											scelerisque In egestas erat imperdiet sed euismod nisi
											porta lorem mollis Morbi tristique senectus et netus
											Mattis pellentesque id nibh tortor id aliquet lectus
											proin Sapien faucibus et molestie ac feugiat sed lectus
											vestibulum Ullamcorper velit sed ullamcorper morbi
											tincidunt ornare massa eget
											<div className='d-flex align-items-center'>
												<i className='bi bi-hand-thumbs-up-fill text-success'></i>
												<i className='bi bi-hand-thumbs-down-fill text-danger px-1'></i>
												<span>Did this help solve your issue?</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='col-3 ps-5'>
						<div className={style.promotion}>
							<span>Promotion</span>
						</div>
						<br />
						<div className={style.promotion}>
							<span>Promotion</span>
						</div>
					</div>
				</div>
			</section>
			<ProfileFooter />
		</>
	)
}

export default FAQ
