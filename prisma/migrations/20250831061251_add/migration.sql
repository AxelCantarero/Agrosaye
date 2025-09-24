/*
  Warnings:

  - You are about to drop the column `Apellido` on the `InformacionFinca` table. All the data in the column will be lost.
  - You are about to drop the column `contrasena` on the `InformacionFinca` table. All the data in the column will be lost.
  - You are about to drop the column `nombreUsuario` on the `InformacionFinca` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `InformacionFinca_nombreUsuario_key` ON `InformacionFinca`;

-- AlterTable
ALTER TABLE `InformacionFinca` DROP COLUMN `Apellido`,
    DROP COLUMN `contrasena`,
    DROP COLUMN `nombreUsuario`,
    ADD COLUMN `fechaCreacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `latitud` VARCHAR(191) NULL,
    MODIFY `longitud` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `Usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombreUsuario` VARCHAR(191) NOT NULL,
    `contrasena` VARCHAR(191) NOT NULL,
    `fincaId` INTEGER NULL,

    UNIQUE INDEX `Usuario_nombreUsuario_key`(`nombreUsuario`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_fincaId_fkey` FOREIGN KEY (`fincaId`) REFERENCES `InformacionFinca`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
