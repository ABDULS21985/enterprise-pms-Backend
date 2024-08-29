/*
  Warnings:

  - Added the required column `office` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `division` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "office" TEXT NOT NULL,
ALTER COLUMN "division" SET NOT NULL;
