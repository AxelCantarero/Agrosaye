/*
  Warnings:

  - You are about to drop the `Gasto` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Gasto` DROP FOREIGN KEY `Gasto_fincaId_fkey`;

-- DropForeignKey
ALTER TABLE `Gasto` DROP FOREIGN KEY `Gasto_idInventarioCultivo_fkey`;

-- DropForeignKey
ALTER TABLE `Gasto` DROP FOREIGN KEY `Gasto_idInventarioProducto_fkey`;

-- DropForeignKey
ALTER TABLE `Gasto` DROP FOREIGN KEY `Gasto_usuarioId_fkey`;

-- DropTable
DROP TABLE `Gasto`;

-- CreateTable
CREATE TABLE `Egreso` (
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

-- AddForeignKey
ALTER TABLE `Egreso` ADD CONSTRAINT `Egreso_fincaId_fkey` FOREIGN KEY (`fincaId`) REFERENCES `Informacion_finca`(`idFinca`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Egreso` ADD CONSTRAINT `Egreso_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`idUsuario`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Egreso` ADD CONSTRAINT `Egreso_idInventarioCultivo_fkey` FOREIGN KEY (`idInventarioCultivo`) REFERENCES `InventarioCultivo`(`idInventarioCultivo`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Egreso` ADD CONSTRAINT `Egreso_idInventarioProducto_fkey` FOREIGN KEY (`idInventarioProducto`) REFERENCES `InventarioProducto`(`idInventarioProducto`) ON DELETE SET NULL ON UPDATE CASCADE;
