import React from 'react';

export default function Footer(){
	return(
			<footer>
				<div className="contact-info">
					<p> Explore Your Options </p>
					<div className="icon">
						<a href="https://www.linkedin.com/in/riley-pelosi-974548102" target="_blank">
							<i className="fab fa-linkedin fa-lg"></i>
						</a>
					</div>
		            <div className="icon">
		            	<a href="https://github.com/pelosirm" target="_blank">
		            		<i className="fab fa-github-square fa-lg"></i>
		            	</a>
		            </div>
		            <div className="icon">
		            	<a href="https://angel.co/riley-pelosi?public_profile=1" target="_blank">
		            		<i className="fab fa-angellist fa-lg"></i>
		            	</a>
		            </div>
				</div>
			</footer>
		)
}