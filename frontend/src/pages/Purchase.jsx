import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import DrinkCard from "../components/DrinkCard";

const Purchase = () => {
	const { id } = useParams();
	const [drink, setDrink] = useState(null);
	const [inputValue, setInputValue] = useState("");
	const navigate = useNavigate();

	const changeInputValue = (event) => {
		setInputValue(event.target.value);
	};
	const handleSubmit = (event) => {
		event.preventDefault(); // Prevent page reload
		axios
			.post("http://localhost:3000/queue", {
				customerName: inputValue,
				drinkId: id,
			})
			.then((res) => {
				navigate("/");
			});
	};

	console.log(id);
	useEffect(() => {
		if (id) {
			axios
				.get(`http://localhost:3000/order/${parseInt(id)}`)
				.then((res) => {
					setDrink(res.data);
				})
				.catch((error) => {
					console.error("Error fetching drinks:", error);
				});
		}
	}, [id]);
	if (drink === null) {
		return <div>Loading...</div>;
	}
	return (
		<div>
			<h2>Cart</h2>
			<DrinkCard
				id={drink.id}
				price={drink.price}
				name={drink.name}
				description={drink.description}
			/>
			<form className="row g-3" onSubmit={handleSubmit}>
				<div className="mb-3">
					<label htmlFor="customerName" className="form-label">
						Your name
					</label>
					<input
						type="text"
						value={inputValue}
						onChange={changeInputValue}
						className="form-control"
						id="customerName"
						required
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Purchase
				</button>
			</form>
		</div>
	);
};

export default Purchase;
