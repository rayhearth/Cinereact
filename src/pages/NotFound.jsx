import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="pageError-404">
			<img src="./img-404.png" alt="" />
			<h1>404</h1>
			<p>La page que vous demandez n'existe pas.</p>
			<Link className="btn-return" to="/"><i className="fas fa-home"></i> Retour à l'accueil </Link>
		</div>
	);
};

export default NotFound;
