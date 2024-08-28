import { Router } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
let app = Router();

//this route returns all drinks
app.get("/", (req, res) => {
	prisma.drink.findMany().then((drinks) => {
		res.status(200).send(drinks);
	});
});

//this route posts a drink. Only to be used for inserting data for the app to function.
app.post("/", (req, res) => {
	prisma.drink
		.create({
			data: {
				name: req.body.name,
				price: req.body.price,
			},
		})
		.then((drink) => {
			res.status(201).send(drink);
		});
});
export { app };
