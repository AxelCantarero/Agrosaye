-- CreateTable
CREATE TABLE `InformacionFinca` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre_responsable` VARCHAR(191) NOT NULL,
    `Apellido` VARCHAR(191) NOT NULL,
    `nombreUsuario` VARCHAR(191) NOT NULL,
    `contrasena` VARCHAR(191) NOT NULL,
    `latitud` VARCHAR(191) NOT NULL,
    `longitud` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `InformacionFinca_nombreUsuario_key`(`nombreUsuario`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
