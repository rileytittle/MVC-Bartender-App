import express from "express";
import { app as OrderRouter } from "./routes/order.route";
import { app as QueueRouter } from "./routes/queue.route";

let app = express();
app.use(express.json());

app.use("/order", OrderRouter);
app.use("/queue", QueueRouter);

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
