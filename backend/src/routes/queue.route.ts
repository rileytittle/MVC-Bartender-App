import { Router } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
let app = Router();

//gets all the orders currently in the database
app.get("/", (req, res) => {
	prisma.order.findMany().then((orders) => {
		res.status(200).send(orders);
	});
});

//creates an order
app.post("/", (req, res) => {
	prisma.order
		.create({
			data: {
				time_purchased: req.body.timePurchased,
				customer_name: req.body.customerName,
				drink_id: req.body.drinkId,
			},
		})
		.then((order) => {
			res.status(201).send(order);
		});
});

//marks an order as fulfilled
app.patch("/:id", (req, res) => {
	prisma.order
		.update({
			where: {
				id: Number(req.params.id),
			},
			data: {
				customer_name: req.body.customerName,
				drink_id: req.body.drinkId,
				fulfilled: true,
			},
		})
		.then((order) => {
			res.status(200).send(order);
		});
});
export { app };
