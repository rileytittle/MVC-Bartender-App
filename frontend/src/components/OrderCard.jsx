import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const OrderCard = ({ id, timePurchased, customerName, drinkId }) => {
	const [drink, setDrink] = useState(null);
	useEffect(() => {
		if (drinkId) {
			axios
				.get(`http://localhost:3000/order/${parseInt(drinkId)}`)
				.then((res) => {
					setDrink(res.data);
				})
				.catch((error) => {
					console.error("Error fetching drinks:", error);
				});
		}
	}, [drinkId]);
	if (drink === null) {
		return <div>Loading...</div>;
	}
	return (
		<div className="card" style={{ width: 18 + "rem" }}>
			<div className="card-body">
				<h5 className="card-title">{customerName}</h5>
				<h6 className="card-subtitle mb-2 text-body-secondary">
					{timePurchased}
				</h6>
				<p className="card-text">{drink.name}</p>
				<Link to={`/purchase/${id}`} className="card-link">
					Complete Order
				</Link>
			</div>
		</div>
	);
};

export default OrderCard;
