import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="pageError-404">
			<h1>404</h1>
			<p>La page que vous demandez n'existe pas.</p>
			<Link to="/">Retour à l'accueil<i className="fas fa-home"></i></Link>
		</div>
	);
};

export default NotFound;
