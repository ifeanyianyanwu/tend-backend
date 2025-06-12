/*
  Warnings:

  - A unique constraint covering the columns `[lookup_prefix]` on the table `RefreshToken` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "RefreshToken_lookup_prefix_key" ON "RefreshToken"("lookup_prefix");
