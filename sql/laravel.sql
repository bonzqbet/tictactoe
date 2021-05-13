-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 13, 2021 at 11:46 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laravel`
--

-- --------------------------------------------------------

--
-- Table structure for table `gametable`
--

CREATE TABLE `gametable` (
  `id` int(11) NOT NULL,
  `history` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `status` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `size` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `gametable`
--

INSERT INTO `gametable` (`id`, `history`, `status`, `size`, `created_at`, `updated_at`) VALUES
(26, 'a:1:{i:0;s:14:\"0,1,4,5,8,9,12\";}', 'x', '4', '2021-05-13 07:40:03', '2021-05-13 07:40:03'),
(27, 'a:1:{i:0;s:17:\"0,1,3,4,7,6,8,5,2\";}', 'Tie', '3', '2021-05-13 07:40:03', '2021-05-13 07:40:03'),
(28, 'a:1:{i:0;s:7:\"0,0,1,2\";}', 'o', '2', '2021-05-13 07:40:47', '2021-05-13 07:40:47'),
(29, 'a:1:{i:0;s:9:\"0,1,4,5,8\";}', 'x', '3', '2021-05-13 07:44:49', '2021-05-13 07:44:49'),
(35, 'a:1:{i:0;s:83:\"0,1,3,4,6,0,1,3,4,6,0,1,3,4,6,0,1,3,4,7,6,8,5,2,0,1,3,4,7,6,5,2,0,1,3,4,6,0,1,4,5,8\";}', 'x', '3', '2021-05-13 09:11:02', '2021-05-13 09:11:02'),
(36, 'a:1:{i:0;s:9:\"0,1,4,5,8\";}', 'x', '3', '2021-05-13 09:14:56', '2021-05-13 09:14:56'),
(37, 'a:1:{i:0;s:17:\"1,0,4,3,6,7,8,5,2\";}', 'x', '3', '2021-05-13 09:31:41', '2021-05-13 09:31:41'),
(38, 'a:1:{i:0;s:17:\"0,1,3,4,7,6,5,8,2\";}', 'Tie', '3', '2021-05-13 09:37:10', '2021-05-13 09:37:10'),
(39, 'a:1:{i:0;s:15:\"0,1,3,4,7,6,5,2\";}', 'o', '3', '2021-05-13 09:44:31', '2021-05-13 09:44:31');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(2, '2020_11_15_095035_create_users_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `fname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `gametable`
--
ALTER TABLE `gametable`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `gametable`
--
ALTER TABLE `gametable`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
