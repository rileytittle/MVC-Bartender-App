import { useState } from "react";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import OrderDrink from "./pages/OrderDrink";
import ViewQueue from "./pages/ViewQueue";
import MainLayout from "./layouts/MainLayout";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<MainLayout />}>
			<Route index element={<Home />}></Route>
			<Route path="/order" element={<OrderDrink />}></Route>
			<Route path="/queue" element={<ViewQueue />}></Route>
		</Route>
	)
);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
