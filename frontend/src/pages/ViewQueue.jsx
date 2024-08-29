import React from "react";
import OrderCard from "../components/OrderCard";
import axios from "axios";
import { useState, useEffect } from "react";

function ViewQueue() {
	const [orderList, setOrderList] = useState([]);
	useEffect(() => {
		axios
			.get("http://localhost:3000/queue")
			.then((res) => {
				setOrderList(res.data);
				console.log(res.data);
			})
			.catch((error) => {
				console.error("Error fetching orders:", error);
			});
	}, []);

	return (
		<>
			{orderList.map((order) => (
				<OrderCard
					key={order.id}
					timePurchased={order.time_purchased}
					customerName={order.customer_name}
					drinkId={order.drink_id}
				/>
			))}
		</>
	);
}

export default ViewQueue;
