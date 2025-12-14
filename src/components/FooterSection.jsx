import React from "react";
import { Link } from "react-router-dom";
import { pageData } from "../services/PageData";
import logo from "./../assets/logo.png";
import Modal from "./Modal";


export default function FooterSection() {

	const [socials] = React.useState(pageData.socials);
	const [contacts] = React.useState(pageData.contacts);
	const [roadmaps] = React.useState(pageData.roadmaps);
	const [modalContent, setModalContent] = React.useState({ isOpen: false, title: '', content: '' });


	const handleOpenSocial = (link, e) => {
		e.preventDefault();
		location.href = link;
	}

	const handleOpenModal = (title, content, e) => {
		e.preventDefault();
		setModalContent({ isOpen: true, title, content });
	}

	const handleCloseModal = () => {
		setModalContent({ isOpen: false, title: '', content: '' });
	}

	const policyContent = {
		'Blog': (
			<div style={{ textAlign: 'center', padding: '20px 0' }}>
				<i className="fa-solid fa-seedling" style={{
					fontSize: '3em',
					color: '#0F6ACE',
					marginBottom: '20px',
					display: 'block'
				}}></i>
				<h3 style={{
					color: '#0F6ACE',
					fontSize: '1.8em',
					marginBottom: '15px',
					marginTop: '0'
				}}>Growing Something Great</h3>
				<p style={{
					color: '#555',
					fontSize: '1.1em',
					lineHeight: '1.6',
					maxWidth: '400px',
					margin: '0 auto 20px'
				}}>
					Our blog is taking root! Soon you'll find insights on
					systems thinking, classroom success stories, and teaching resources.
				</p>
				<p style={{
					color: '#888',
					fontSize: '0.95em',
					fontStyle: 'italic',
					marginBottom: '0'
				}}>
					Check back soon!
				</p>
			</div>
		),
		'Terms of Use': (
			<>
				<p>ModelIt! provides educational tools and materials for K-12 classrooms. By using our site, you agree to use all resources responsibly and only for learning or teaching purposes.</p>
				<p>All content is owned by ModelIt! and may not be redistributed without permission.</p>
			</>
		),
		'Privacy Policy': (
			<>
				<p>ModelIt! collects limited information necessary for improving our platform experience. We never sell or share personal data and comply with applicable privacy standards.</p>
				<p>For any questions, contact <a href="mailto:info@discoverycollective.com">info@discoverycollective.com</a>.</p>
			</>
		),
		'Cookie Preferences': (
			<>
				<p>ModelIt! uses cookies to enhance site performance and personalize learning experiences.</p>
				<p>You may adjust or disable non-essential cookies anytime in your browser settings.</p>
			</>
		)
	}


	return <section className="footer color-bg-blue-0002 ">
			<div className="container">
				<div className="company">
					<div className="footer-logo">
						<img src={logo} alt="ModelIt Logo"/>
					</div>
					<div className="footer-social">
						{socials.map((social) =>
							<span title={social.title} onClick={handleOpenSocial.bind(this, social.link)} className="fa-icon" key={social.id}>
								<i className={social.icon}></i>
							</span>
						)}
					</div>
					<div className="footer-contact">
						{contacts.map((contact) =>
								<div key={contact.id}>
									<span>{contact.content}</span>
								</div>
							)}
					</div>
				</div>
				<div className="roadmap">
					<div className="grid">
							{roadmaps.map((roadmap) =>
								<div key={roadmap.id} className="grid-column">
									<h3>{roadmap.title}</h3>
									<ul>
										{roadmap.list.map((roadlist) => {
											// Check if it's a policy link that should open a modal
											const isPolicy = policyContent[roadlist.title];
											// Check if it's an internal link (starts with /)
											const isInternalLink = roadlist.link && roadlist.link.startsWith('/');
											// Check if it's an external link
											const isExternalLink = roadlist.link && roadlist.link.startsWith('http');

											return (
												<li key={roadlist.id}>
													{isPolicy ? (
														<a
															title={roadlist.title}
															href="#"
															onClick={handleOpenModal.bind(this, roadlist.title, policyContent[roadlist.title])}
														>
															{roadlist.title}
														</a>
													) : isInternalLink ? (
														<Link to={roadlist.link} title={roadlist.title}>
															{roadlist.title}
														</Link>
													) : isExternalLink ? (
														<a
															title={roadlist.title}
															href={roadlist.link}
															target="_blank"
															rel="noopener noreferrer"
														>
															{roadlist.title}
														</a>
													) : (
														<span>{roadlist.title}</span>
													)}
												</li>
											);
										})}
									</ul>
								</div>
							)}

					</div>
				</div>
			</div>
			<Modal
				isOpen={modalContent.isOpen}
				onClose={handleCloseModal}
				title={modalContent.title}
			>
				{modalContent.content}
			</Modal>
			{/* <div className="container">
				<div className="subscribe">
						<form>
							<input type="text" placeholder="Email"/>
							<button type="button">Subscribe</button>
						</form>
				</div>
				<span className="copyright">Copyright © {(new Date()).getFullYear()}</span>
			</div> */}
	</section>
}
