-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 24-11-2024 a las 03:39:13
-- Versión del servidor: 8.3.0
-- Versión de PHP: 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dnd_game`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clases`
--

DROP TABLE IF EXISTS `clases`;
CREATE TABLE IF NOT EXISTS `clases` (
  `id_clase` int NOT NULL AUTO_INCREMENT,
  `nombre_clase` varchar(50) NOT NULL,
  `descripcion` text,
  PRIMARY KEY (`id_clase`),
  UNIQUE KEY `nombre_clase` (`nombre_clase`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `habilidades`
--

DROP TABLE IF EXISTS `habilidades`;
CREATE TABLE IF NOT EXISTS `habilidades` (
  `id_habilidad` int NOT NULL AUTO_INCREMENT,
  `nombre_habilidad` varchar(50) NOT NULL,
  `descripcion` text,
  `nivel_requerido` int DEFAULT NULL,
  PRIMARY KEY (`id_habilidad`),
  UNIQUE KEY `nombre_habilidad` (`nombre_habilidad`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int NOT NULL,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personajes`
--

DROP TABLE IF EXISTS `personajes`;
CREATE TABLE IF NOT EXISTS `personajes` (
  `id_personaje` int NOT NULL AUTO_INCREMENT,
  `id_usuario` int DEFAULT NULL,
  `nombre` varchar(50) NOT NULL,
  `raza` varchar(50) DEFAULT NULL,
  `clase_id` int DEFAULT NULL,
  `nivel` int DEFAULT '1',
  `fuerza` int DEFAULT NULL,
  `destreza` int DEFAULT NULL,
  `constitucion` int DEFAULT NULL,
  `inteligencia` int DEFAULT NULL,
  `sabiduria` int DEFAULT NULL,
  `carisma` int DEFAULT NULL,
  `experiencia` int DEFAULT '0',
  PRIMARY KEY (`id_personaje`),
  KEY `id_usuario` (`id_usuario`),
  KEY `clase_id` (`clase_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `personajes`
--

INSERT INTO `personajes` (`id_personaje`, `id_usuario`, `nombre`, `raza`, `clase_id`, `nivel`, `fuerza`, `destreza`, `constitucion`, `inteligencia`, `sabiduria`, `carisma`, `experiencia`) VALUES
(1, 1, 'Dohko', 'Caballero_Templario', 1, 1, 20, 11, 18, 10, 16, 15, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personaje_habilidades`
--

DROP TABLE IF EXISTS `personaje_habilidades`;
CREATE TABLE IF NOT EXISTS `personaje_habilidades` (
  `id_personaje` int NOT NULL,
  `id_habilidad` int NOT NULL,
  PRIMARY KEY (`id_personaje`,`id_habilidad`),
  KEY `id_habilidad` (`id_habilidad`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `personaje_habilidades`
--

INSERT INTO `personaje_habilidades` (`id_personaje`, `id_habilidad`) VALUES
(1, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id_usuario` int NOT NULL,
  `username` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `username`, `email`, `password`) VALUES
(0, 'Dohko', 'lucasrivero93@gmail.com', 'dohko123');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
