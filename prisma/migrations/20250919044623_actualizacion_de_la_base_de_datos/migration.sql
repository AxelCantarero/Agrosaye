/*
  Warnings:

  - You are about to drop the column `idCultivo` on the `Ingreso` table. All the data in the column will be lost.
  - You are about to drop the column `idUnidadMedida` on the `Ingreso` table. All the data in the column will be lost.
  - You are about to alter the column `monto` on the `Ingreso` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Double`.
  - You are about to drop the column `nombre` on the `InventarioCultivo` table. All the data in the column will be lost.
  - You are about to drop the column `descripcion` on the `InventarioProducto` table. All the data in the column will be lost.
  - You are about to drop the column `nombre` on the `InventarioProducto` table. All the data in the column will be lost.
  - The primary key for the `Usuario` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the `Egreso` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[cultivoId]` on the table `InventarioCultivo` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[idProducto]` on the table `InventarioProducto` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `idTipo` to the `Actividad` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Actividad` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Aplicacion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Informacion_finca` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fincaId` to the `Ingreso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuarioId` to the `Ingreso` table without a default value. This is not possible if the table is not empty.
  - Made the column `descripcion` on table `Ingreso` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `cultivoId` to the `InventarioCultivo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `InventarioCultivo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idProducto` to the `InventarioProducto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `InventarioProducto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Recordatorio` table without a default value. This is not possible if the table is not empty.
  - Made the column `nombre` on table `UnidadMedida` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `idUsuario` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Egreso` DROP FOREIGN KEY `Egreso_idCultivo_fkey`;

-- DropForeignKey
ALTER TABLE `Egreso` DROP FOREIGN KEY `Egreso_idUnidadMedida_fkey`;

-- DropForeignKey
ALTER TABLE `Ingreso` DROP FOREIGN KEY `Ingreso_idCultivo_fkey`;

-- DropForeignKey
ALTER TABLE `Ingreso` DROP FOREIGN KEY `Ingreso_idUnidadMedida_fkey`;

-- DropIndex
DROP INDEX `Ingreso_idCultivo_fkey` ON `Ingreso`;

-- DropIndex
DROP INDEX `Ingreso_idUnidadMedida_fkey` ON `Ingreso`;

-- AlterTable
ALTER TABLE `Actividad` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `idTipo` INTEGER NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Aplicacion` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Informacion_finca` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Ingreso` DROP COLUMN `idCultivo`,
    DROP COLUMN `idUnidadMedida`,
    ADD COLUMN `fincaId` INTEGER NOT NULL,
    ADD COLUMN `idInventarioCultivo` INTEGER NULL,
    ADD COLUMN `idInventarioProducto` INTEGER NULL,
    ADD COLUMN `usuarioId` INTEGER NOT NULL,
    MODIFY `monto` DOUBLE NOT NULL,
    MODIFY `descripcion` VARCHAR(191) NOT NULL,
    MODIFY `fecha` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `InventarioCultivo` DROP COLUMN `nombre`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `cultivoId` INTEGER NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `InventarioProducto` DROP COLUMN `descripcion`,
    DROP COLUMN `nombre`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `idFinca` INTEGER NULL,
    ADD COLUMN `idProducto` INTEGER NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Recordatorio` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `UnidadMedida` MODIFY `nombre` VARCHAR(45) NOT NULL;

-- AlterTable
ALTER TABLE `Usuario` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `idUsuario` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD PRIMARY KEY (`idUsuario`);

-- DropTable
DROP TABLE `Egreso`;

-- CreateTable
CREATE TABLE `Cultivo` (
    `idCultivo` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `tipo` VARCHAR(191) NOT NULL,
    `produccion` DECIMAL(10, 2) NOT NULL,
    `fechaInicio` DATETIME(3) NOT NULL,
    `fechaFin` DATETIME(3) NULL,
    `idEstado` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`idCultivo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Producto` (
    `idProducto` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `descripcion` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`idProducto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Estado` (
    `idEstado` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idEstado`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Gasto` (
    `idGasto` INTEGER NOT NULL AUTO_INCREMENT,
    `descripcion` VARCHAR(191) NOT NULL,
    `monto` DOUBLE NOT NULL,
    `fecha` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `usuarioId` INTEGER NOT NULL,
    `idInventarioCultivo` INTEGER NULL,
    `idInventarioProducto` INTEGER NULL,
    `fincaId` INTEGER NOT NULL,

    PRIMARY KEY (`idGasto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `InventarioCultivo_cultivoId_key` ON `InventarioCultivo`(`cultivoId`);

-- CreateIndex
CREATE UNIQUE INDEX `InventarioProducto_idProducto_key` ON `InventarioProducto`(`idProducto`);

-- AddForeignKey
ALTER TABLE `Cultivo` ADD CONSTRAINT `Cultivo_idEstado_fkey` FOREIGN KEY (`idEstado`) REFERENCES `Estado`(`idEstado`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InventarioCultivo` ADD CONSTRAINT `InventarioCultivo_cultivoId_fkey` FOREIGN KEY (`cultivoId`) REFERENCES `Cultivo`(`idCultivo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InventarioProducto` ADD CONSTRAINT `InventarioProducto_idProducto_fkey` FOREIGN KEY (`idProducto`) REFERENCES `Producto`(`idProducto`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InventarioProducto` ADD CONSTRAINT `InventarioProducto_idFinca_fkey` FOREIGN KEY (`idFinca`) REFERENCES `Informacion_finca`(`idFinca`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Actividad` ADD CONSTRAINT `Actividad_idTipo_fkey` FOREIGN KEY (`idTipo`) REFERENCES `Estado`(`idEstado`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ingreso` ADD CONSTRAINT `Ingreso_fincaId_fkey` FOREIGN KEY (`fincaId`) REFERENCES `Informacion_finca`(`idFinca`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ingreso` ADD CONSTRAINT `Ingreso_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`idUsuario`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ingreso` ADD CONSTRAINT `Ingreso_idInventarioCultivo_fkey` FOREIGN KEY (`idInventarioCultivo`) REFERENCES `InventarioCultivo`(`idInventarioCultivo`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ingreso` ADD CONSTRAINT `Ingreso_idInventarioProducto_fkey` FOREIGN KEY (`idInventarioProducto`) REFERENCES `InventarioProducto`(`idInventarioProducto`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Gasto` ADD CONSTRAINT `Gasto_fincaId_fkey` FOREIGN KEY (`fincaId`) REFERENCES `Informacion_finca`(`idFinca`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Gasto` ADD CONSTRAINT `Gasto_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`idUsuario`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Gasto` ADD CONSTRAINT `Gasto_idInventarioCultivo_fkey` FOREIGN KEY (`idInventarioCultivo`) REFERENCES `InventarioCultivo`(`idInventarioCultivo`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Gasto` ADD CONSTRAINT `Gasto_idInventarioProducto_fkey` FOREIGN KEY (`idInventarioProducto`) REFERENCES `InventarioProducto`(`idInventarioProducto`) ON DELETE SET NULL ON UPDATE CASCADE;
