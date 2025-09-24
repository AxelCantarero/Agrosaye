/*
  Warnings:

  - You are about to drop the column `apellido` on the `Informacion_finca` table. All the data in the column will be lost.
  - You are about to drop the column `contrasena` on the `Informacion_finca` table. All the data in the column will be lost.
  - You are about to drop the column `nombreResponsable` on the `Informacion_finca` table. All the data in the column will be lost.
  - You are about to drop the column `nombreUsuario` on the `Informacion_finca` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Informacion_finca` DROP COLUMN `apellido`,
    DROP COLUMN `contrasena`,
    DROP COLUMN `nombreResponsable`,
    DROP COLUMN `nombreUsuario`,
    ADD COLUMN `direccion` VARCHAR(191) NULL,
    ADD COLUMN `nombreFinca` VARCHAR(191) NULL;
