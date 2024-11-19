-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 18-11-2024 a las 23:59:48
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 7.4.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

-- Agregar campos a las tablas

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Caja`
--
ALTER TABLE `Caja`
  ADD COLUMN `estado` ENUM('activo', 'inactivo') DEFAULT 'activo',
  ADD COLUMN `fecha_creacion` DATETIME DEFAULT CURRENT_TIMESTAMP,
  ADD COLUMN `fecha_modificacion` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Categorias`
--
ALTER TABLE `Categorias`
  ADD COLUMN `estado` ENUM('activo', 'inactivo') DEFAULT 'activo',
  ADD COLUMN `fecha_creacion` DATETIME DEFAULT CURRENT_TIMESTAMP,
  ADD COLUMN `fecha_modificacion` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Clientes`
--
ALTER TABLE `Clientes`
  ADD COLUMN `estado` ENUM('activo', 'inactivo') DEFAULT 'activo',
  ADD COLUMN `fecha_creacion` DATETIME DEFAULT CURRENT_TIMESTAMP,
  ADD COLUMN `fecha_modificacion` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Encargados`
--
ALTER TABLE `Encargados`
  ADD COLUMN `estado` ENUM('activo', 'inactivo') DEFAULT 'activo',
  ADD COLUMN `fecha_creacion` DATETIME DEFAULT CURRENT_TIMESTAMP,
  ADD COLUMN `fecha_modificacion` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Estetica`
--
ALTER TABLE `Estetica`
  ADD COLUMN `estado` ENUM('activo', 'inactivo') DEFAULT 'activo',
  ADD COLUMN `fecha_creacion` DATETIME DEFAULT CURRENT_TIMESTAMP,
  ADD COLUMN `fecha_modificacion` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Productos`
--
ALTER TABLE `Productos`
  ADD COLUMN `estado` ENUM('activo', 'inactivo') DEFAULT 'activo',
  ADD COLUMN `fecha_creacion` DATETIME DEFAULT CURRENT_TIMESTAMP,
  ADD COLUMN `fecha_modificacion` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Tratamientos`
--
ALTER TABLE `Tratamientos`
  ADD COLUMN `estado` ENUM('activo', 'inactivo') DEFAULT 'activo',
  ADD COLUMN `fecha_creacion` DATETIME DEFAULT CURRENT_TIMESTAMP,
  ADD COLUMN `fecha_modificacion` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Turnos`
--
ALTER TABLE `Turnos`
  ADD COLUMN `estado` ENUM('activo', 'inactivo') DEFAULT 'activo',
  ADD COLUMN `fecha_creacion` DATETIME DEFAULT CURRENT_TIMESTAMP,
  ADD COLUMN `fecha_modificacion` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Usuarios`
--
ALTER TABLE `Usuarios`
  ADD COLUMN `estado` ENUM('activo', 'inactivo') DEFAULT 'activo',
  ADD COLUMN `fecha_creacion` DATETIME DEFAULT CURRENT_TIMESTAMP,
  ADD COLUMN `fecha_modificacion` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

-- --------------------------------------------------------

-- Índices para tablas volcadas

-- Indices de la tabla `Caja`
ALTER TABLE `Caja`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_encargado` (`id_encargado`);

-- Indices de la tabla `Categorias`
ALTER TABLE `Categorias`
  ADD PRIMARY KEY (`id`);

-- Indices de la tabla `Clientes`
ALTER TABLE `Clientes`
  ADD PRIMARY KEY (`id`);

-- Indices de la tabla `Encargados`
ALTER TABLE `Encargados`
  ADD PRIMARY KEY (`id`);

-- Indices de la tabla `Estetica`
ALTER TABLE `Estetica`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`);

-- Indices de la tabla `Productos`
ALTER TABLE `Productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_categoria` (`id_categoria`);

-- Indices de la tabla `Tratamientos`
ALTER TABLE `Tratamientos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_encargado` (`id_encargado`);

-- Indices de la tabla `Turnos`
ALTER TABLE `Turnos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_cliente` (`id_cliente`),
  ADD KEY `id_responsable` (`id_responsable`);

-- Indices de la tabla `Usuarios`
ALTER TABLE `Usuarios`
  ADD PRIMARY KEY (`id`);

-- AUTO_INCREMENT de las tablas volcadas

-- AUTO_INCREMENT de la tabla `Caja`
ALTER TABLE `Caja`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

-- AUTO_INCREMENT de la tabla `Categorias`
ALTER TABLE `Categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

-- AUTO_INCREMENT de la tabla `Clientes`
ALTER TABLE `Clientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

-- AUTO_INCREMENT de la tabla `Encargados`
ALTER TABLE `Encargados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

-- AUTO_INCREMENT de la tabla `Estetica`
ALTER TABLE `Estetica`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

-- AUTO_INCREMENT de la tabla `Productos`
ALTER TABLE `Productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

-- AUTO_INCREMENT de la tabla `Tratamientos`
ALTER TABLE `Tratamientos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

-- AUTO_INCREMENT de la tabla `Turnos`
ALTER TABLE `Turnos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

-- AUTO_INCREMENT de la tabla `Usuarios`
ALTER TABLE `Usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

-- Restricciones para tablas volcadas

-- Filtros para la tabla `Caja`
ALTER TABLE `Caja`
  ADD CONSTRAINT `caja_ibfk_1` FOREIGN KEY (`id_encargado`) REFERENCES `Encargados` (`id`) ON DELETE SET NULL;

-- Filtros para la tabla `Estetica`
ALTER TABLE `Estetica`
  ADD CONSTRAINT `estetica_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `Usuarios` (`id`) ON DELETE SET NULL;

-- Filtros para la tabla `Productos`
ALTER TABLE `Productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `Categorias` (`id`) ON DELETE SET NULL;

-- Filtros para la tabla `Tratamientos`
ALTER TABLE `Tratamientos`
  ADD CONSTRAINT `tratamientos_ibfk_1` FOREIGN KEY (`id_encargado`) REFERENCES `Encargados` (`id`) ON DELETE SET NULL;

-- Filtros para la tabla `Turnos`
ALTER TABLE `Turnos`
  ADD CONSTRAINT `turnos_ibfk_1` FOREIGN KEY (`id_cliente`) REFERENCES `Clientes` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `turnos_ibfk_2` FOREIGN KEY (`id_responsable`) REFERENCES `Encargados` (`id`) ON DELETE SET NULL;

COMMIT;
