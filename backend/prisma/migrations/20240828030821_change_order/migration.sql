-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Order" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "time_purchased" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "customer_name" TEXT NOT NULL,
    "drink_id" INTEGER NOT NULL,
    "fulfilled" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Order" ("customer_name", "drink_id", "id", "time_purchased") SELECT "customer_name", "drink_id", "id", "time_purchased" FROM "Order";
DROP TABLE "Order";
ALTER TABLE "new_Order" RENAME TO "Order";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
