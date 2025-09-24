/*
  Warnings:

  - You are about to drop the column `idTipo` on the `Actividad` table. All the data in the column will be lost.
  - Added the required column `importancia` to the `Actividad` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Actividad` DROP COLUMN `idTipo`,
    ADD COLUMN `importancia` VARCHAR(191) NOT NULL;
