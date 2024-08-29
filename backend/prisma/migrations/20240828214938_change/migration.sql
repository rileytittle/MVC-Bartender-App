/*
  Warnings:

  - Added the required column `description` to the `Drink` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Drink" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "description" TEXT NOT NULL
);
INSERT INTO "new_Drink" ("id", "name", "price") SELECT "id", "name", "price" FROM "Drink";
DROP TABLE "Drink";
ALTER TABLE "new_Drink" RENAME TO "Drink";
CREATE UNIQUE INDEX "Drink_name_key" ON "Drink"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
