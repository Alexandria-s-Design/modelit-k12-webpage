import React from "react";
import { pageData } from "../../services/PageData";
import "./LearningHubMysterySection.css";

export default function LearningHubMysterySection() {
	const [hubData] = React.useState(pageData.hub[5]);

	return <React.Fragment>
		<section className="learninghub-mystery">
			<div className="container">
				<div className="mystery-content">
					<div className="mystery-icon">
						<i className="fas fa-magnifying-glass"></i>
					</div>
					<h2 className="learning-hub-title">{hubData.title}</h2>
					<p className="learning-hub-content">{hubData.content}</p>
					<a
						href={hubData.link}
						target="_blank"
						rel="noopener noreferrer"
						className="mystery-button"
					>
						Play Now
						<i className="fas fa-play"></i>
					</a>
				</div>
			</div>
		</section>
	</React.Fragment>
}
