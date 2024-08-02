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
        <div className="btn-sort-container">
					<div className="btn-sort" id="goodToBad">
						Top <i class="fa-solid fa-arrow-up"></i>
					</div>
					<div className="btn-sort" id="badToGood">
						Flop <i class="fa-solid fa-arrow-down"></i>
					</div>
				</div>
			</div>
			<div className="result">Résultat</div>
		</div>
	);
};

export default Form;
