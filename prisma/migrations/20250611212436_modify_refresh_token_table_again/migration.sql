/*
  Warnings:

  - You are about to drop the column `user_id` on the `RefreshToken` table. All the data in the column will be lost.
  - Added the required column `lookup_prefix` to the `RefreshToken` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RefreshToken" DROP COLUMN "user_id",
ADD COLUMN     "lookup_prefix" TEXT NOT NULL;
