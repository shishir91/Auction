-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 24, 2023 at 08:43 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fotheby`
--

-- --------------------------------------------------------

--
-- Table structure for table `bids`
--

CREATE TABLE `bids` (
  `id` int(11) NOT NULL,
  `item` int(11) NOT NULL,
  `user` int(11) NOT NULL,
  `bid` decimal(10,2) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `id` int(11) NOT NULL,
  `lotNumber` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `artist` varchar(255) NOT NULL,
  `producedYear` varchar(255) NOT NULL,
  `subjectClassification` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `mediumUsed` varchar(255) DEFAULT NULL,
  `materialUsed` varchar(255) DEFAULT NULL,
  `dimension` varchar(255) DEFAULT NULL,
  `auctionDate` date NOT NULL,
  `auctionTime` time NOT NULL,
  `auctionDuration` varchar(255) NOT NULL,
  `basePrice` varchar(255) NOT NULL,
  `currentPrice` varchar(255) DEFAULT NULL,
  `soldPrice` varchar(255) DEFAULT NULL,
  `soldTo` varchar(255) DEFAULT NULL,
  `uploadedBy` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`id`, `lotNumber`, `name`, `artist`, `producedYear`, `subjectClassification`, `image`, `description`, `category`, `mediumUsed`, `materialUsed`, `dimension`, `auctionDate`, `auctionTime`, `auctionDuration`, `basePrice`, `currentPrice`, `soldPrice`, `soldTo`, `uploadedBy`, `status`, `createdAt`, `updatedAt`) VALUES
(9, '11732077', 'Jungle Wood Carving', 'Usoop', '2020', 'Animal', 'image-1695536720530.jpg', 'This is the Greatest Wood Carving in the World', 'Carvings', '', 'Wood', '20x30', '2023-09-26', '12:10:00', '1', '125', NULL, NULL, NULL, 'bishal@gmail.com', 'listed', '2023-09-24 06:25:20', '2023-09-24 06:25:20'),
(10, '80298162', 'Illabi Sculpture in White Raku', 'Igname Terrace', '2019', 'Abstract', 'image-1695536839477.jpg', 'This is the Greatest Sculpture in the World', 'Sculptures', '', 'Ceramics', '10x30', '2023-09-26', '12:12:00', '1', '30', NULL, NULL, NULL, 'bishal@gmail.com', 'listed', '2023-09-24 06:27:19', '2023-09-24 06:27:19'),
(11, '11281352', 'Asheville Portrait', 'Luxe House Photographics', '2023', 'Portrait', 'image-1695536950307.jpg', 'This is one of the Greatest Photograph in the World', 'Photographic', '', 'Camera', '625x500', '2023-09-26', '12:14:00', '1', '25', NULL, NULL, NULL, 'bishal@gmail.com', 'listed', '2023-09-24 06:29:10', '2023-09-24 06:29:10'),
(12, '58774322', 'Let Me Fly High- Abstract Painting ', 'JUBER GAZI', '2022', 'Figure', 'image-1695537053548.jpg', 'This is one of the Greatest Painting in the World', 'Painting', '', 'Colors', '35x15', '2023-09-26', '12:15:00', '1', '45', NULL, NULL, NULL, 'bishal@gmail.com', 'listed', '2023-09-24 06:30:53', '2023-09-24 06:30:53'),
(13, '87053860', 'Freedom Drawing', 'Harrison Razzaq', '2022', 'Other', 'image-1695537150294.jpg', 'This is one of the Greatest Drawing in the World', 'Drawing', '', 'Charcoal', '25x35', '2023-09-26', '12:17:00', '1', '50', NULL, NULL, NULL, 'bishal@gmail.com', 'listed', '2023-09-24 06:32:30', '2023-09-24 06:32:30'),
(14, '94002910', 'Bee Drawing', 'Art Base', '2023', 'Figure', 'image-1695537313221.jpeg', 'Beautiful Bee Drawing.', 'Drawing', '', 'Pencil', '30x50', '2023-09-24', '12:20:00', '10', '30', NULL, NULL, NULL, 'suyog@gmail.com', 'bidding', '2023-09-24 06:35:13', '2023-09-24 06:40:19'),
(15, '82833443', 'Sea Oil Painting', 'Suyog', '2022', 'Seascape', 'image-1695537581475.png', 'Beautiful Sea Waves Oil Painting', 'Painting', '', 'Oil', '36x48', '2023-09-24', '12:24:00', '10', '80', NULL, NULL, NULL, 'suyog@gmail.com', 'bidding', '2023-09-24 06:39:41', '2023-09-24 06:40:14');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `identity` varchar(255) DEFAULT NULL,
  `type` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `verified` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fullname`, `email`, `phone`, `password`, `identity`, `type`, `status`, `verified`, `createdAt`, `updatedAt`) VALUES
(1, 'Bishal', 'bishal@gmail.com', '9898989898', '$2b$10$5X.jlTggwUOQ32HmHiZxqeytlE2H2nBeO84hFIaf01vBpCu7dz87S', NULL, 'seller', 'active', 1, '2023-09-19 10:23:00', '2023-09-24 06:16:57'),
(2, 'Shishir', 'shresthashishir91@gmail.com', '9813215178', '$2b$10$iH7k4A/C1cVOpi3ON8foge/zUuiBqsJkTDg7rLmxOXcyWtwpsEVx.', NULL, 'user', 'active', 1, '2023-09-21 02:51:56', '2023-09-24 06:14:32'),
(3, 'Suyog', 'suyog@gmail.com', '9823212351', '$2b$10$2FUym7cpkBcAXVURB3JBZ.SCOnUa/9cbW/JPJcYbqK7fDHRDwGalO', NULL, 'seller', 'active', 0, '2023-09-22 12:48:07', '2023-09-23 18:31:20'),
(13, 'Admin', 'admin@gmail.com', '9898989898', '$2b$10$CtV1C6lBNhTJ0Wq.WBGgq.ZUD3rBLmfmbQxrHU6Rs/5kU5JIEVrX.', NULL, 'admin', 'active', 1, '2023-09-24 05:52:27', '2023-09-24 05:52:38');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bids`
--
ALTER TABLE `bids`
  ADD PRIMARY KEY (`id`),
  ADD KEY `item` (`item`),
  ADD KEY `user` (`user`);

--
-- Indexes for table `items`
--
ALTER TABLE `items`
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
-- AUTO_INCREMENT for table `bids`
--
ALTER TABLE `bids`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=123;

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bids`
--
ALTER TABLE `bids`
  ADD CONSTRAINT `bids_ibfk_1` FOREIGN KEY (`item`) REFERENCES `items` (`id`),
  ADD CONSTRAINT `bids_ibfk_2` FOREIGN KEY (`user`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
