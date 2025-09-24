-- DropForeignKey
ALTER TABLE `Actividad` DROP FOREIGN KEY `Actividad_idTipo_fkey`;

-- DropIndex
DROP INDEX `Actividad_idTipo_fkey` ON `Actividad`;
