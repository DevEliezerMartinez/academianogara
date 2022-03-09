-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-08-2019 a las 02:04:24
-- Versión del servidor: 10.1.29-MariaDB
-- Versión de PHP: 7.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `estudiantes_ago_dic19`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudiantes`
--

CREATE TABLE `estudiantes` (
  `ncontrol` varchar(10) COLLATE utf8_spanish_ci DEFAULT NULL,
  `nombre` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `apaterno` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `amaterno` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `genero` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(30) COLLATE utf8_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `estudiantes`
--

INSERT INTO `estudiantes` (`ncontrol`, `nombre`, `apaterno`, `amaterno`, `genero`, `email`) VALUES
('1212300507', 'Antonio', 'Rodríguez', 'Vázquez', 'Masculino', 'antoniorv.itsm@gmail.com'),
('', 'Carolina', 'López', 'Martínez', 'Femenino', 'carolm@hotmail.com'),
('00320507', 'Jesús Antonio', 'Rodríguez', 'López', 'Masculino', 'tony@lopez.com'),
('0', 'Denisse', 'Rodríguez', 'López', 'Femenino', 'Denisse@gmail.com'),
('12345625', 'Nubia Jocelyn', 'López', 'Rea', 'Femenino', 'rea@hotmail.com'),
('1245251525', 'Modesto', 'Valdez', 'Arce', 'Masculino', 'arce@gmail.com'),
('00251541', 'José Leonardo', 'Hernández', 'Valle', 'Masculino', 'jlhv@gmail.com'),
('', 'Adolfo', 'Moreno', 'Díaz', 'Masculino', 'moreno@adolfo.com'),
('1234567891', 'Anahi', 'Alvarez', 'Gomez', 'Femenino', ''),
('0653895', 'Marina', 'Martinez', 'Casimiro', 'Femenino', ''),
('12300507', 'Raúl', 'Gallardo', 'Flores', 'Masculino', '');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
