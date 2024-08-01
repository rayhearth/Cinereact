import React from "react";

const Form = () => {
	return (
		<div className="form-component">
			<div className="form-container">
				<form>
					<input
						type="text"
						placeholder="Entrez le titre d'un film"
						id="search-input"
					/>
					<input type="submit" value="Recherchez" />
				</form>
        <div className="btn-sort-container"></div>
			</div>
		</div>
	);
};

export default Form;
