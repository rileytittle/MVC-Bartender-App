import React from "react";
import DrinkCard from "../components/DrinkCard";
import axios from "axios";
import { useState, useEffect } from "react";

function OrderDrink() {
	const [drinkList, setDrinkList] = useState([]);
	useEffect(() => {
		axios
			.get("http://localhost:3000/order")
			.then((res) => {
				setDrinkList(res.data);
				console.log(res.data);
			})
			.catch((error) => {
				console.error("Error fetching drinks:", error);
			});
	}, []);

	return (
		<>
			{drinkList.map((drink) => (
				<DrinkCard
					key={drink.id}
					id={drink.id}
					price={drink.price}
					name={drink.name}
					description={drink.description}
				/>
			))}
		</>
	);
}

export default OrderDrink;
