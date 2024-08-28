-- CreateTable
CREATE TABLE "Drink" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "Order" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "time_purchased" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "customer_name" TEXT NOT NULL,
    "drink_id" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Drink_name_key" ON "Drink"("name");
