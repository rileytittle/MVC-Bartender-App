export class Order {
	orderId: number;
	drinkId: number;
	timePurchased: Date;
	customerName: string;
	constructor(
		orderId: number,
		drinkId: number,
		timePurchased: Date,
		customerName: string
	) {
		this.orderId = orderId;
		this.drinkId = drinkId;
		this.timePurchased = timePurchased;
		this.customerName = customerName;
	}
}
