import React from "react";
import OrderCard from "../components/OrderCard";
import axios from "axios";
import { useState, useEffect } from "react";

function formatDate(dateString) {
	const date = new Date(dateString);

	const options = { month: "short", day: "numeric", year: "2-digit" };
	const formattedDate = date.toLocaleDateString("en-US", options);
	const formattedTime = date.toLocaleTimeString("en-US", { hour12: false });

	return `${formattedTime} (${formattedDate})`;
}

function ViewQueue() {
	const [orderList, setOrderList] = useState([]);
	useEffect(() => {
		axios
			.get("http://localhost:3000/queue")
			.then((res) => {
				const sortedOrders = res.data.sort(
					(a, b) =>
						new Date(a.time_purchased) - new Date(b.time_purchased)
				);
				setOrderList(sortedOrders);
				console.log(res.data);
			})
			.catch((error) => {
				console.error("Error fetching orders:", error);
			});
	}, []);
	if (orderList.length === 0) {
		return (
			<div>
				<h3>No current orders</h3>
			</div>
		);
	}
	return (
		<>
			{orderList.map((order) => (
				<OrderCard
					key={order.id}
					id={order.id}
					timePurchased={formatDate(order.time_purchased)}
					customerName={order.customer_name}
					drinkId={order.drink_id}
				/>
			))}
		</>
	);
}

export default ViewQueue;
