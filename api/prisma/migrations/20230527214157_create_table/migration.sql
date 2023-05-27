-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "price_in_cents" INTEGER NOT NULL,
    "sales" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL
);
