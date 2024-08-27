import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
	return (
		<nav class="navbar navbar-expand-lg bg-body-tertiary">
			<div class="container-fluid">
				<Link to="/" class="navbar-brand">
					Bartender App
				</Link>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div class="navbar-nav">
						<Link to="/order" class="nav-link">
							Order Drink
						</Link>
						<Link to="/queue" class="nav-link">
							View Drink Queue
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
