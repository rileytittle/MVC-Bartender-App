const express = require("express");
import { app as OrderRouter } from "./routes/order.route";
import { app as QueueRouter } from "./routes/queue.route";

const cors = require("cors");
const app = express();

app.use(express.json());

app.use(
	cors({
		origin: "http://localhost:5173", // Allow only this origin
	})
);

app.use("/order", OrderRouter);
app.use("/queue", QueueRouter);

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
