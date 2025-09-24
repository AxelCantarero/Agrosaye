/*
  Warnings:

  - You are about to drop the `InformacionFinca` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Usuario` DROP FOREIGN KEY `Usuario_fincaId_fkey`;

-- DropIndex
DROP INDEX `Usuario_fincaId_fkey` ON `Usuario`;

-- DropTable
DROP TABLE `InformacionFinca`;

-- CreateTable
CREATE TABLE `Informacion_finca` (
    `idFinca` INTEGER NOT NULL AUTO_INCREMENT,
    `nombreResponsable` VARCHAR(191) NULL,
    `apellido` VARCHAR(191) NULL,
    `nombreUsuario` VARCHAR(191) NULL,
    `contrasena` VARCHAR(191) NULL,
    `latitud` VARCHAR(191) NULL,
    `longitud` VARCHAR(191) NULL,

    PRIMARY KEY (`idFinca`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UnidadMedida` (
    `idUnidadMedida` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(45) NULL,

    PRIMARY KEY (`idUnidadMedida`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InventarioCultivo` (
    `idInventarioCultivo` INTEGER NOT NULL AUTO_INCREMENT,
    `idFinca` INTEGER NOT NULL,
    `fechaSiembra` DATETIME(3) NULL,
    `fechaCosecha` DATETIME(3) NULL,
    `produccion` DECIMAL(10, 2) NULL,
    `estado` VARCHAR(45) NULL,
    `nombre` VARCHAR(45) NULL,
    `descripcion` VARCHAR(191) NULL,
    `areaSembrada` DECIMAL(10, 2) NULL,
    `idUnidadMedida` INTEGER NULL,

    PRIMARY KEY (`idInventarioCultivo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Ingreso` (
    `idIngreso` INTEGER NOT NULL AUTO_INCREMENT,
    `idCultivo` INTEGER NOT NULL,
    `monto` DECIMAL(10, 2) NOT NULL,
    `descripcion` VARCHAR(100) NULL,
    `fecha` DATETIME(3) NOT NULL,
    `idUnidadMedida` INTEGER NULL,

    PRIMARY KEY (`idIngreso`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Egreso` (
    `idEgreso` INTEGER NOT NULL AUTO_INCREMENT,
    `idCultivo` INTEGER NOT NULL,
    `monto` DECIMAL(10, 2) NOT NULL,
    `descripcion` VARCHAR(100) NULL,
    `fecha` DATETIME(3) NOT NULL,
    `precioUnitario` DECIMAL(10, 2) NULL,
    `cantidad` DECIMAL(10, 2) NULL,
    `idUnidadMedida` INTEGER NULL,

    PRIMARY KEY (`idEgreso`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InventarioProducto` (
    `idInventarioProducto` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(45) NOT NULL,
    `descripcion` VARCHAR(100) NULL,
    `cantidad` DECIMAL(10, 2) NOT NULL,
    `idUnidadMedida` INTEGER NULL,

    PRIMARY KEY (`idInventarioProducto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Actividad` (
    `idActividad` INTEGER NOT NULL AUTO_INCREMENT,
    `idCultivo` INTEGER NOT NULL,
    `nombre` VARCHAR(45) NOT NULL,
    `descripcion` VARCHAR(191) NULL,
    `costo` DECIMAL(10, 2) NULL,
    `idUnidadMedida` INTEGER NULL,

    PRIMARY KEY (`idActividad`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Aplicacion` (
    `idAplicacion` INTEGER NOT NULL AUTO_INCREMENT,
    `idCultivo` INTEGER NOT NULL,
    `idInventarioProducto` INTEGER NOT NULL,
    `cantidad` DECIMAL(10, 2) NOT NULL,
    `fecha` DATETIME(3) NOT NULL,

    PRIMARY KEY (`idAplicacion`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Recordatorio` (
    `idRecordatorio` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(100) NOT NULL,
    `descripcion` VARCHAR(191) NULL,
    `fecha` DATETIME(3) NOT NULL,
    `estado` VARCHAR(20) NOT NULL DEFAULT 'pendiente',
    `idCultivo` INTEGER NOT NULL,
    `idAplicacion` INTEGER NULL,

    PRIMARY KEY (`idRecordatorio`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_fincaId_fkey` FOREIGN KEY (`fincaId`) REFERENCES `Informacion_finca`(`idFinca`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InventarioCultivo` ADD CONSTRAINT `InventarioCultivo_idFinca_fkey` FOREIGN KEY (`idFinca`) REFERENCES `Informacion_finca`(`idFinca`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InventarioCultivo` ADD CONSTRAINT `InventarioCultivo_idUnidadMedida_fkey` FOREIGN KEY (`idUnidadMedida`) REFERENCES `UnidadMedida`(`idUnidadMedida`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ingreso` ADD CONSTRAINT `Ingreso_idCultivo_fkey` FOREIGN KEY (`idCultivo`) REFERENCES `InventarioCultivo`(`idInventarioCultivo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Ingreso` ADD CONSTRAINT `Ingreso_idUnidadMedida_fkey` FOREIGN KEY (`idUnidadMedida`) REFERENCES `UnidadMedida`(`idUnidadMedida`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Egreso` ADD CONSTRAINT `Egreso_idCultivo_fkey` FOREIGN KEY (`idCultivo`) REFERENCES `InventarioCultivo`(`idInventarioCultivo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Egreso` ADD CONSTRAINT `Egreso_idUnidadMedida_fkey` FOREIGN KEY (`idUnidadMedida`) REFERENCES `UnidadMedida`(`idUnidadMedida`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `InventarioProducto` ADD CONSTRAINT `InventarioProducto_idUnidadMedida_fkey` FOREIGN KEY (`idUnidadMedida`) REFERENCES `UnidadMedida`(`idUnidadMedida`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Actividad` ADD CONSTRAINT `Actividad_idCultivo_fkey` FOREIGN KEY (`idCultivo`) REFERENCES `InventarioCultivo`(`idInventarioCultivo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Actividad` ADD CONSTRAINT `Actividad_idUnidadMedida_fkey` FOREIGN KEY (`idUnidadMedida`) REFERENCES `UnidadMedida`(`idUnidadMedida`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Aplicacion` ADD CONSTRAINT `Aplicacion_idCultivo_fkey` FOREIGN KEY (`idCultivo`) REFERENCES `InventarioCultivo`(`idInventarioCultivo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Aplicacion` ADD CONSTRAINT `Aplicacion_idInventarioProducto_fkey` FOREIGN KEY (`idInventarioProducto`) REFERENCES `InventarioProducto`(`idInventarioProducto`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Recordatorio` ADD CONSTRAINT `Recordatorio_idCultivo_fkey` FOREIGN KEY (`idCultivo`) REFERENCES `InventarioCultivo`(`idInventarioCultivo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Recordatorio` ADD CONSTRAINT `Recordatorio_idAplicacion_fkey` FOREIGN KEY (`idAplicacion`) REFERENCES `Aplicacion`(`idAplicacion`) ON DELETE SET NULL ON UPDATE CASCADE;
