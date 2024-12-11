-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: mysql
-- Tiempo de generación: 11-12-2024 a las 11:57:42
-- Versión del servidor: 9.1.0
-- Versión de PHP: 8.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_apuestatotal`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `accepts`
--

CREATE TABLE `accepts` (
  `id` int NOT NULL,
  `id_username` int NOT NULL,
  `medal` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` int NOT NULL,
  `total_pokemons` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `accepts`
--

INSERT INTO `accepts` (`id`, `id_username`, `medal`, `status`, `total_pokemons`) VALUES
(44, 1, 'HIERRO', 0, 20),
(45, 1, 'HIERRO', 0, 20),
(46, 1, 'HIERRO', 0, 20);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `username` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rol` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `rol`, `token`, `password`) VALUES
(1, 'test-user@gmail.com', 'User', '', '$2a$12$tLDHF38QX6pMz9X1gHv8luHQvPPyTKT.kjzM3ZZaIK2P4NqI9quem'),
(2, 'test-admin@gmail.com', 'Admin', '', '$2a$12$tLDHF38QX6pMz9X1gHv8luHQvPPyTKT.kjzM3ZZaIK2P4NqI9quem');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `accepts`
--
ALTER TABLE `accepts`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `accepts`
--
ALTER TABLE `accepts`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
