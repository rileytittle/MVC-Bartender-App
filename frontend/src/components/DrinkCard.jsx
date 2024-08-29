import React from "react";
import { Link } from "react-router-dom";

const DrinkCard = ({ id, name, price, description }) => {
	return (
		<div className="card" style={{ width: 18 + "rem" }}>
			<div className="card-body">
				<h5 className="card-title">{name}</h5>
				<h6 className="card-subtitle mb-2 text-body-secondary">
					{price}
				</h6>
				<p className="card-text">{description}</p>
				<Link to={`/purchase/${id}`} className="card-link">
					Order
				</Link>
			</div>
		</div>
	);
};

export default DrinkCard;
