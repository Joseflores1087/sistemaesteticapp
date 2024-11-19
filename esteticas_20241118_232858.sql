-- Valentina Studio --
-- MySQL dump --
-- ---------------------------------------------------------


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
-- ---------------------------------------------------------


-- CREATE TABLE "Caja" -----------------------------------------
CREATE TABLE `Caja`( 
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`importe` Decimal( 10, 2 ) NOT NULL,
	`id_item` Int( 11 ) NULL DEFAULT NULL,
	`id_encargado` Int( 11 ) NULL DEFAULT NULL,
	`estado` Enum( 'activo', 'inactivo' ) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT 'activo',
	`fecha_creacion` DateTime NULL DEFAULT CURRENT_TIMESTAMP,
	`fecha_modificacion` DateTime NULL ON UPDATE CURRENT_TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY ( `id` ) )
CHARACTER SET = utf8mb4
COLLATE = utf8mb4_general_ci
ENGINE = InnoDB
AUTO_INCREMENT = 1;
-- -------------------------------------------------------------


-- CREATE TABLE "Categorias" -----------------------------------
CREATE TABLE `Categorias`( 
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`descripcion` VarChar( 255 ) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
	`estado` Enum( 'activo', 'inactivo' ) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT 'activo',
	`fecha_creacion` DateTime NULL DEFAULT CURRENT_TIMESTAMP,
	`fecha_modificacion` DateTime NULL ON UPDATE CURRENT_TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY ( `id` ) )
CHARACTER SET = utf8mb4
COLLATE = utf8mb4_general_ci
ENGINE = InnoDB
AUTO_INCREMENT = 1;
-- -------------------------------------------------------------


-- CREATE TABLE "Clientes" -------------------------------------
CREATE TABLE `Clientes`( 
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`nombre_apellido` VarChar( 255 ) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
	`dni` VarChar( 20 ) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
	`celular` VarChar( 15 ) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
	`email` VarChar( 100 ) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
	`direccion` VarChar( 255 ) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
	`fecha_nacimiento` Date NULL DEFAULT NULL,
	`estado` Enum( 'activo', 'inactivo' ) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT 'activo',
	`fecha_creacion` DateTime NULL DEFAULT CURRENT_TIMESTAMP,
	`fecha_modificacion` DateTime NULL ON UPDATE CURRENT_TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY ( `id` ) )
CHARACTER SET = utf8mb4
COLLATE = utf8mb4_general_ci
ENGINE = InnoDB
AUTO_INCREMENT = 1;
-- -------------------------------------------------------------


-- CREATE TABLE "Encargados" -----------------------------------
CREATE TABLE `Encargados`( 
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`nombre_apellido` VarChar( 255 ) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
	`dni` VarChar( 20 ) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
	`fecha_nacimiento` Date NULL DEFAULT NULL,
	`fecha_alta` Date NOT NULL,
	`estado` Enum( 'activo', 'inactivo' ) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT 'activo',
	`fecha_creacion` DateTime NULL DEFAULT CURRENT_TIMESTAMP,
	`fecha_modificacion` DateTime NULL ON UPDATE CURRENT_TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY ( `id` ) )
CHARACTER SET = utf8mb4
COLLATE = utf8mb4_general_ci
ENGINE = InnoDB
AUTO_INCREMENT = 1;
-- -------------------------------------------------------------


-- CREATE TABLE "Estetica" -------------------------------------
CREATE TABLE `Estetica`( 
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`nombre` VarChar( 255 ) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
	`descripcion` Text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
	`id_user` Int( 11 ) NULL DEFAULT NULL,
	`logo` VarChar( 255 ) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
	`fecha_alta` Date NOT NULL,
	`estado` Enum( 'activo', 'inactivo' ) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT 'activo',
	`fecha_creacion` DateTime NULL DEFAULT CURRENT_TIMESTAMP,
	`fecha_modificacion` DateTime NULL ON UPDATE CURRENT_TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY ( `id` ) )
CHARACTER SET = utf8mb4
COLLATE = utf8mb4_general_ci
ENGINE = InnoDB
AUTO_INCREMENT = 1;
-- -------------------------------------------------------------


-- CREATE TABLE "Productos" ------------------------------------
CREATE TABLE `Productos`( 
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`nombre` VarChar( 255 ) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
	`descripcion` VarChar( 255 ) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
	`id_categoria` Int( 11 ) NULL DEFAULT NULL,
	`cantidad` Int( 11 ) NULL DEFAULT NULL,
	`estado` Enum( 'activo', 'inactivo' ) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT 'activo',
	`fecha_creacion` DateTime NULL DEFAULT CURRENT_TIMESTAMP,
	`fecha_modificacion` DateTime NULL ON UPDATE CURRENT_TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY ( `id` ) )
CHARACTER SET = utf8mb4
COLLATE = utf8mb4_general_ci
ENGINE = InnoDB
AUTO_INCREMENT = 1;
-- -------------------------------------------------------------


-- CREATE TABLE "Tratamientos" ---------------------------------
CREATE TABLE `Tratamientos`( 
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`descripcion` VarChar( 255 ) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
	`id_encargado` Int( 11 ) NULL DEFAULT NULL,
	`estado` Enum( 'activo', 'inactivo' ) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT 'activo',
	`fecha_creacion` DateTime NULL DEFAULT CURRENT_TIMESTAMP,
	`fecha_modificacion` DateTime NULL ON UPDATE CURRENT_TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY ( `id` ) )
CHARACTER SET = utf8mb4
COLLATE = utf8mb4_general_ci
ENGINE = InnoDB
AUTO_INCREMENT = 1;
-- -------------------------------------------------------------


-- CREATE TABLE "Turnos" ---------------------------------------
CREATE TABLE `Turnos`( 
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`fecha_hora` DateTime NOT NULL,
	`id_cliente` Int( 11 ) NULL DEFAULT NULL,
	`id_responsable` Int( 11 ) NULL DEFAULT NULL,
	`estado` Enum( 'activo', 'inactivo' ) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT 'activo',
	`fecha_creacion` DateTime NULL DEFAULT CURRENT_TIMESTAMP,
	`fecha_modificacion` DateTime NULL ON UPDATE CURRENT_TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY ( `id` ) )
CHARACTER SET = utf8mb4
COLLATE = utf8mb4_general_ci
ENGINE = InnoDB
AUTO_INCREMENT = 1;
-- -------------------------------------------------------------


-- CREATE TABLE "Usuarios" -------------------------------------
CREATE TABLE `Usuarios`( 
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`nombre_apellido` VarChar( 255 ) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
	`perfil` VarChar( 50 ) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
	`password` VarChar( 255 ) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
	`estado` Enum( 'activo', 'inactivo' ) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT 'activo',
	`fecha_creacion` DateTime NULL DEFAULT CURRENT_TIMESTAMP,
	`fecha_modificacion` DateTime NULL ON UPDATE CURRENT_TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY ( `id` ) )
CHARACTER SET = utf8mb4
COLLATE = utf8mb4_general_ci
ENGINE = InnoDB
AUTO_INCREMENT = 1;
-- -------------------------------------------------------------


-- Dump data of "Caja" -------------------------------------
-- ---------------------------------------------------------


-- Dump data of "Categorias" -------------------------------
-- ---------------------------------------------------------


-- Dump data of "Clientes" ---------------------------------
-- ---------------------------------------------------------


-- Dump data of "Encargados" -------------------------------
-- ---------------------------------------------------------


-- Dump data of "Estetica" ---------------------------------
-- ---------------------------------------------------------


-- Dump data of "Productos" --------------------------------
-- ---------------------------------------------------------


-- Dump data of "Tratamientos" -----------------------------
-- ---------------------------------------------------------


-- Dump data of "Turnos" -----------------------------------
-- ---------------------------------------------------------


-- Dump data of "Usuarios" ---------------------------------
-- ---------------------------------------------------------


-- CREATE INDEX "id_encargado" ---------------------------------
CREATE INDEX `id_encargado` USING BTREE ON `Caja`( `id_encargado` );
-- -------------------------------------------------------------


-- CREATE INDEX "id_user" --------------------------------------
CREATE INDEX `id_user` USING BTREE ON `Estetica`( `id_user` );
-- -------------------------------------------------------------


-- CREATE INDEX "id_categoria" ---------------------------------
CREATE INDEX `id_categoria` USING BTREE ON `Productos`( `id_categoria` );
-- -------------------------------------------------------------


-- CREATE INDEX "id_encargado" ---------------------------------
CREATE INDEX `id_encargado` USING BTREE ON `Tratamientos`( `id_encargado` );
-- -------------------------------------------------------------


-- CREATE INDEX "id_cliente" -----------------------------------
CREATE INDEX `id_cliente` USING BTREE ON `Turnos`( `id_cliente` );
-- -------------------------------------------------------------


-- CREATE INDEX "id_responsable" -------------------------------
CREATE INDEX `id_responsable` USING BTREE ON `Turnos`( `id_responsable` );
-- -------------------------------------------------------------


-- CREATE LINK "caja_ibfk_1" -----------------------------------
ALTER TABLE `Caja`
	ADD CONSTRAINT `caja_ibfk_1` FOREIGN KEY ( `id_encargado` )
	REFERENCES `Encargados`( `id` )
	ON DELETE Set NULL
	ON UPDATE Restrict;
-- -------------------------------------------------------------


-- CREATE LINK "estetica_ibfk_1" -------------------------------
ALTER TABLE `Estetica`
	ADD CONSTRAINT `estetica_ibfk_1` FOREIGN KEY ( `id_user` )
	REFERENCES `Usuarios`( `id` )
	ON DELETE Set NULL
	ON UPDATE Restrict;
-- -------------------------------------------------------------


-- CREATE LINK "productos_ibfk_1" ------------------------------
ALTER TABLE `Productos`
	ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY ( `id_categoria` )
	REFERENCES `Categorias`( `id` )
	ON DELETE Set NULL
	ON UPDATE Restrict;
-- -------------------------------------------------------------


-- CREATE LINK "tratamientos_ibfk_1" ---------------------------
ALTER TABLE `Tratamientos`
	ADD CONSTRAINT `tratamientos_ibfk_1` FOREIGN KEY ( `id_encargado` )
	REFERENCES `Encargados`( `id` )
	ON DELETE Set NULL
	ON UPDATE Restrict;
-- -------------------------------------------------------------


-- CREATE LINK "turnos_ibfk_1" ---------------------------------
ALTER TABLE `Turnos`
	ADD CONSTRAINT `turnos_ibfk_1` FOREIGN KEY ( `id_cliente` )
	REFERENCES `Clientes`( `id` )
	ON DELETE Set NULL
	ON UPDATE Restrict;
-- -------------------------------------------------------------


-- CREATE LINK "turnos_ibfk_2" ---------------------------------
ALTER TABLE `Turnos`
	ADD CONSTRAINT `turnos_ibfk_2` FOREIGN KEY ( `id_responsable` )
	REFERENCES `Encargados`( `id` )
	ON DELETE Set NULL
	ON UPDATE Restrict;
-- -------------------------------------------------------------


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
-- ---------------------------------------------------------


