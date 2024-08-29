import { Router } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
let app = Router();

//gets all the orders currently in the database
app.get("/", async (req, res) => {
	await prisma.order.findMany().then((orders) => {
		res.status(200).send(orders);
	});
});

//creates an order
app.post("/", async (req, res) => {
	await prisma.order
		.create({
			data: {
				customer_name: req.body.customerName,
				drink_id: Number(req.body.drinkId),
			},
		})
		.then((order) => {
			res.status(201).send(order);
		});
});
// This is just for development

// app.delete("/:id", (req, res) => {
// 	prisma.order
// 		.delete({
// 			where: {
// 				id: Number(req.params.id),
// 			},
// 		})
// 		.then(() => {
// 			res.status(200).send("Record deleted");
// 		});
// });

//marks an order as fulfilled
app.patch("/:id", async (req, res) => {
	await prisma.order
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
