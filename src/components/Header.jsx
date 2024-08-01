import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<header className="header">
			<nav className="navigation">
				<ul>
					<NavLink to="/">
						<li>Accueil</li>
					</NavLink>
					<NavLink to="/favoris">
						<li>Favoris</li>
					</NavLink>
				</ul>
			</nav>
			<h1>Ciné React</h1>
		</header>
	);
};

export default Header;
