import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<header className="header">
			<nav className="navigation">
				<ul>
					<li>
						<NavLink to="/" className={nav => nav.isActive ? "nav-active" : ""}>Accueil</NavLink>
					</li>
					<li>
						<NavLink to="/favoris" className={nav => nav.isActive ? "nav-active" : ""}>Favoris</NavLink>
					</li>
				</ul>
			</nav>
			<h1>Ciné React</h1>
		</header>
	);
};

export default Header;
