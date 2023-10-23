-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Počítač: 127.0.0.1
-- Vytvořeno: Pon 23. říj 2023, 21:19
-- Verze serveru: 10.4.28-MariaDB
-- Verze PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databáze: `pojistenidb`
--
CREATE DATABASE IF NOT EXISTS `pojistenidb` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `pojistenidb`;

-- --------------------------------------------------------

--
-- Struktura tabulky `pojistenci`
--

CREATE TABLE `pojistenci` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `jmeno` varchar(255) NOT NULL,
  `mesto` varchar(255) NOT NULL,
  `prijmeni` varchar(255) NOT NULL,
  `psc` varchar(255) NOT NULL,
  `telefon` varchar(255) NOT NULL,
  `ulice` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Vypisuji data pro tabulku `pojistenci`
--

INSERT INTO `pojistenci` (`id`, `email`, `jmeno`, `mesto`, `prijmeni`, `psc`, `telefon`, `ulice`) VALUES
(2, 'jd@post.cz', 'Jan', 'Nepomuk', 'Dvořák', '486 12', '730 888 999', 'K Elektrárně 1'),
(3, 'ambro@seznam.cz', 'Ambrož', 'Příbram', 'Brož', '765 44', '666 321 123', 'Hlavní 66'),
(4, 'kh@gmx.de', 'Karel', 'Vodňany', 'Hašiš', '386 33', '888 777 222', 'Ústavní 16'),
(5, 'juj@zoznam.sk', 'János', 'Lanžhot', 'Új', '561 02', '606 734 248', 'Dolní 51'),
(6, 'lenkaw123@post.cz', 'Lenka', 'Kynšperk nad Ohří', 'Wu', '788 01', '788 345 251', 'Údolní 15'),
(8, 'pavelst@jhs.net', 'Pavel', 'Strakonice', 'Pavel', '386 01', '345 567 443', 'Čelakovského 65'),
(9, 'inescs@mei.edu', 'Ingeborg', 'Praha 5', 'Žádná', '150 00', '731 665 452', 'Na Hřebenkách 66'),
(10, 'mar6ab@quick.cz', 'Marie', 'Lenora', 'Aschenbrennerová', '456 07', '768 547 251', 'Houžná 15'),
(11, 'prema.bastyr@post.cz', 'Přemysl', 'Praha 9', 'Baštýř', '199 00', '888 999 000', 'Strašnická 8'),
(12, 'zzmz@mcz', 'Zdeněk', 'Praha 8', 'Zdeněk', '180 00', '787 565 900', 'Přístavní 66'),
(16, 'hnath@edu.cz', 'Anton', 'Moravany', 'Hnáth', '879 01', '888 777 666', 'Kostelní 57');

-- --------------------------------------------------------

--
-- Struktura tabulky `pojisteni`
--

CREATE TABLE `pojisteni` (
  `id` bigint(20) NOT NULL,
  `castka` int(11) NOT NULL,
  `platne_do` datetime NOT NULL,
  `platne_od` datetime NOT NULL,
  `predmet` varchar(255) NOT NULL,
  `typ` varchar(255) NOT NULL,
  `osoba_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Vypisuji data pro tabulku `pojisteni`
--

INSERT INTO `pojisteni` (`id`, `castka`, `platne_do`, `platne_od`, `predmet`, `typ`, `osoba_id`) VALUES
(1, 20000, '2020-06-06 00:00:00', '2000-03-31 00:00:00', 'byt', 'Pojištění majetku', 2),
(2, 200, '2020-06-06 00:00:00', '2000-03-31 00:00:00', 'chata', 'Pojištění majetku', 2),
(3, 500, '1980-01-01 00:00:00', '1971-01-01 00:00:00', 'úrazové', 'Pojištění osob', 11),
(4, 2999, '2200-02-02 00:00:00', '2000-01-01 00:00:00', 'auto', 'Pojištění majetku', 3),
(5, 10000, '1999-03-02 00:00:00', '1999-01-01 00:00:00', 'zdravotní', 'Pojištění osob', 11),
(6, 10000, '2020-01-01 00:00:00', '2000-01-01 00:00:00', 'dům', 'Pojištění majetku', 6),
(7, 1000, '2000-07-07 00:00:00', '1999-03-03 00:00:00', 'židle', 'Pojištění majetku', 8),
(8, 1000, '2000-07-07 00:00:00', '1999-03-03 00:00:00', 'židle', 'Pojištění majetku', 12),
(9, 1000, '2000-07-07 00:00:00', '1999-03-03 00:00:00', 'židle', 'Pojištění majetku', 5),
(13, 20000, '2020-05-05 00:00:00', '2000-04-04 00:00:00', 'chata', 'Pojištění majetku', 6),
(14, 880000, '2020-05-05 00:00:00', '2000-04-04 00:00:00', 'chata', 'Pojištění majetku', 6),
(15, 900000, '2007-07-07 00:00:00', '1999-08-08 00:00:00', 'úrazové', 'Pojištění osob', 9),
(16, 5000, '2022-07-07 00:00:00', '2000-08-08 00:00:00', 'penzijní', 'Pojištění osob', 8),
(17, 33333, '2020-09-09 00:00:00', '2000-08-08 00:00:00', 'penzijní', 'Pojištění osob', 12),
(18, 80000, '2600-09-09 00:00:00', '2000-08-08 00:00:00', 'pes', 'Pojištění majetku', 16);

--
-- Indexy pro exportované tabulky
--

--
-- Indexy pro tabulku `pojistenci`
--
ALTER TABLE `pojistenci`
  ADD PRIMARY KEY (`id`);

--
-- Indexy pro tabulku `pojisteni`
--
ALTER TABLE `pojisteni`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKfidpgd5sd2oqp8njgg2vglid` (`osoba_id`);

--
-- AUTO_INCREMENT pro tabulky
--

--
-- AUTO_INCREMENT pro tabulku `pojistenci`
--
ALTER TABLE `pojistenci`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT pro tabulku `pojisteni`
--
ALTER TABLE `pojisteni`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Omezení pro exportované tabulky
--

--
-- Omezení pro tabulku `pojisteni`
--
ALTER TABLE `pojisteni`
  ADD CONSTRAINT `FKfidpgd5sd2oqp8njgg2vglid` FOREIGN KEY (`osoba_id`) REFERENCES `pojistenci` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
