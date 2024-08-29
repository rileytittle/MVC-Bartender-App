import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const OrderCard = ({ id, timePurchased, customerName, drinkId }) => {
	const [drink, setDrink] = useState(null);
	const [refresh, setRefresh] = useState(false);
	const completeOrder = () => {
		axios
			.patch(`http://localhost:3000/queue/${parseInt(id)}`)
			.then((res) => {
				setDrink(null);
			});
	};
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
	}, [drinkId, refresh]);
	if (drink === null) {
		return <></>;
	}
	return (
		<div className="card" style={{ width: 18 + "rem" }}>
			<div className="card-body">
				<h5 className="card-title">Customer: {customerName}</h5>
				<h6 className="card-subtitle mb-2 text-body-secondary">
					{timePurchased}
				</h6>
				<p className="card-text">Drink: {drink.name}</p>
				<button
					type="button"
					className="btn btn-success"
					onClick={completeOrder}
				>
					Complete Order
				</button>
			</div>
		</div>
	);
};

export default OrderCard;
