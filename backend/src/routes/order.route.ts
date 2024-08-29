import { Router } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
let app = Router();

app.get("/:id", async (req, res) => {
	await prisma.drink
		.findUnique({
			where: {
				id: Number(req.params.id),
			},
		})
		.then((drink) => {
			res.status(200).send(drink);
		});
});

//this route returns all drinks
app.get("/", async (req, res) => {
	await prisma.drink.findMany().then((drinks) => {
		res.status(200).send(drinks);
	});
});

//this route posts a drink. Only to be used for inserting data for the app to function.
app.post("/", async (req, res) => {
	await prisma.drink
		.create({
			data: {
				name: req.body.name,
				price: req.body.price,
				description: req.body.description,
			},
		})
		.then((drink) => {
			res.status(201).send(drink);
		});
});

app.delete("/", async (req, res) => {
	await prisma.drink.deleteMany({});
	res.status(200).send("Ok");
});
export { app };
