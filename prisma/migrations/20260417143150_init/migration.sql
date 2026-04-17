/*
  Warnings:

  - You are about to drop the column `mannualEarnings` on the `ContentItem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ContentItem" DROP COLUMN "mannualEarnings",
ADD COLUMN     "manualEarnings" DOUBLE PRECISION;
