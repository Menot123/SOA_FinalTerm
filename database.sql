-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 22, 2023 at 09:38 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `motel_room`
--

-- --------------------------------------------------------

--
-- Table structure for table `chutro`
--

CREATE TABLE `chutro` (
  `cccdChutro` char(12) NOT NULL,
  `sodienthoai` char(12) NOT NULL,
  `hoten` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `email` char(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `chutro`
--

INSERT INTO `chutro` (`cccdChutro`, `sodienthoai`, `hoten`, `email`) VALUES
('08022245526', '0368219833', 'Nguyễn Văn Tùng', 'vantung66@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `dondangkytamtru`
--

CREATE TABLE `dondangkytamtru` (
  `madondangky` int(30) NOT NULL,
  `diachitamtru` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `hoten` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `ngaysinh` date DEFAULT NULL,
  `gioitinh` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `cccd` char(12) NOT NULL,
  `cccdchutro` char(12) NOT NULL DEFAULT '08022245526',
  `noidungdenghi` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `tenchutro` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `sodienthoai` char(12) DEFAULT NULL,
  `noithuongtru` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `noiohientai` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `email` char(50) DEFAULT NULL,
  `nghenghiep` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `relationship` varchar(10) DEFAULT NULL,
  `nguoithan` text DEFAULT NULL,
  `trangthai` varchar(10) NOT NULL DEFAULT 'chưa gửi'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dondangkytamtru`
--

INSERT INTO `dondangkytamtru` (`madondangky`, `diachitamtru`, `hoten`, `ngaysinh`, `gioitinh`, `cccd`, `cccdchutro`, `noidungdenghi`, `tenchutro`, `sodienthoai`, `noithuongtru`, `noiohientai`, `email`, `nghenghiep`, `relationship`, `nguoithan`, `trangthai`) VALUES
(2, '19 Nguyễn Hữu Thọ', 'Huỳnh Khánh Duy', '2023-04-22', 'Nam', '3017680111', '08022245526', 'Đăng ký tạm trú tại địa chỉ 19 Nguyễn Hữu Thọ', 'Nguyễn Văn Tùng', '0368219834', 'Ấp 8 xã Hiệp Thạnh huyện Ba Tri tỉnh Bến Tre', '19 Nguyễn Hữu Thọ', 'khanhduy8768@gmail.com', 'Sinh viên đại học Tôn Đức Thắn', 'Khách thuê', '[{\"stt\":\"1\",\"name1\":\"Nguyễn Việt Tiến\",\"birth1\":\"19/03/2009\",\"gender1\":\"Nam\",\"code1\":\"3017655555\",\"work1\":\"Học sinh\",\"rel1\":\"Con trai\",\"relb1\":\"Khách thuê trọ\"},{\"stt\":\"2\",\"name1\":\"Trần Tiến Đạt\",\"birth1\":\"17/03/2003\",\"gender1\":\"Nam\",\"code1\":\"3017454122\",\"work1\":\"Học Sinh\",\"rel1\":\"Con\",\"relb1\":\"Khách Thuê Trọ\"}]', 'chưa gửi');

-- --------------------------------------------------------

--
-- Table structure for table `hoadon`
--

CREATE TABLE `hoadon` (
  `mahoadon` char(30) NOT NULL,
  `maphong` char(3) NOT NULL,
  `cccd` char(12) NOT NULL,
  `sodien` int(11) DEFAULT NULL,
  `sonuoc` int(11) DEFAULT NULL,
  `sotiendien` float DEFAULT NULL,
  `sotiennuoc` float DEFAULT NULL,
  `sotieninternet` float DEFAULT NULL,
  `ngaylaphoadon` char(30) DEFAULT NULL,
  `thoigianthanhtoan` datetime DEFAULT NULL,
  `tongtienthanhtoan` float DEFAULT NULL,
  `ghichu` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `hopdongthuetro`
--

CREATE TABLE `hopdongthuetro` (
  `mahopdong` char(30) NOT NULL,
  `maphong` char(3) NOT NULL,
  `cccd` char(12) NOT NULL,
  `cccdChuTro` char(12) NOT NULL,
  `ngaybatdauvangayketthuc` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `ngaytaohopdong` date DEFAULT NULL,
  `thoihanhopdong` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `giathue` float DEFAULT NULL,
  `tiencoc` float DEFAULT NULL,
  `tenchutro` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `giatiendien` float DEFAULT NULL,
  `giatiennuoc` float DEFAULT NULL,
  `giatieninternet` float DEFAULT NULL,
  `soluongnguoi` int(11) DEFAULT NULL,
  `tinhtrangphong` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `khachthuetro`
--

CREATE TABLE `khachthuetro` (
  `cccd` char(12) NOT NULL,
  `maphong` char(3) DEFAULT NULL,
  `hoten` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `ngaysinh` date DEFAULT NULL,
  `sodienthoai` char(12) DEFAULT NULL,
  `diachi` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `email` char(50) DEFAULT NULL,
  `ghichu` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `khachthuetro`
--

INSERT INTO `khachthuetro` (`cccd`, `maphong`, `hoten`, `ngaysinh`, `sodienthoai`, `diachi`, `email`, `ghichu`) VALUES
('098202013930', 'A01', 'Nguyễn Văn Bành', '2002-05-09', '0334353660', '19/3 Phường Tân Phong Q7 TP Hồ Chí Minh', 'ngjyentiendat9a3@gmail.com	', 'Còn nợ tiền phòng 04/2022'),
('100000000001', 'A02', NULL, NULL, NULL, NULL, NULL, NULL),
('100000000002', 'A03', NULL, NULL, NULL, NULL, NULL, NULL),
('100000000003', 'A05', NULL, NULL, NULL, NULL, NULL, NULL),
('100000000004', 'B01', NULL, NULL, NULL, NULL, NULL, NULL),
('100000000005', 'B04', NULL, NULL, NULL, NULL, NULL, NULL),
('100000000006', 'D01', NULL, NULL, NULL, NULL, NULL, NULL),
('100000000007', 'E01', NULL, NULL, NULL, NULL, NULL, NULL),
('100000000008', 'B02', NULL, NULL, NULL, NULL, NULL, NULL),
('100000000009', 'C01', NULL, NULL, NULL, NULL, NULL, NULL),
('100000000010', 'B05', NULL, NULL, NULL, NULL, NULL, NULL),
('100000000011', 'E04', NULL, NULL, NULL, NULL, NULL, NULL),
('100000000012', 'D04', NULL, NULL, NULL, NULL, NULL, NULL),
('100000000013', 'E02', NULL, NULL, NULL, NULL, NULL, NULL),
('100000000014', 'C05', NULL, NULL, NULL, NULL, NULL, NULL),
('100000000015', 'C03', NULL, NULL, NULL, NULL, NULL, NULL),
('100000000016', 'A04', NULL, NULL, NULL, NULL, NULL, NULL),
('100000000017', 'E03', NULL, NULL, NULL, NULL, NULL, NULL),
('100000000018', 'D03', NULL, NULL, NULL, NULL, NULL, NULL),
('100000000019', 'E05', NULL, NULL, NULL, NULL, NULL, NULL),
('3017680111', 'P01', 'Huỳnh khánh Duy', '2023-04-15', '0368219834', 'Ấp 8 xã Hiệp Thạnh huyện Ba Tri tỉnh Bến Tre', 'khanhduy8768@gmail.com', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `phong`
--

CREATE TABLE `phong` (
  `maphong` char(3) NOT NULL,
  `sophong` int(11) DEFAULT NULL,
  `giathue` float DEFAULT NULL,
  `trangthai` varchar(30) NOT NULL DEFAULT 'Đã thuê'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `phong`
--

INSERT INTO `phong` (`maphong`, `sophong`, `giathue`, `trangthai`) VALUES
('A01', 1, 1500000, 'Chưa thuê'),
('A02', 1, 1500000, 'Chưa thuê'),
('A03', 3, 1500000, 'Đã thuê'),
('A04', 4, 1500000, 'Chưa thuê'),
('A05', 5, 1500000, 'Đã thuê'),
('B01', 1, 1500000, 'Chưa thuê'),
('B02', 1, 1500000, 'Chưa thuê'),
('B03', 3, 1500000, 'Đã thuê'),
('B04', 4, 1500000, 'Chưa thuê'),
('B05', 5, 1500000, 'Đã thuê'),
('C01', 1, 1500000, 'Chưa thuê'),
('C02', 1, 1500000, 'Chưa thuê'),
('C03', 3, 1500000, 'Đã thuê'),
('C04', 4, 1500000, 'Chưa thuê'),
('C05', 5, 1500000, 'Đã thuê'),
('D01', 1, 1500000, 'Chưa thuê'),
('D02', 1, 1500000, 'Chưa thuê'),
('D03', 3, 1500000, 'Đã thuê'),
('D04', 4, 1500000, 'Chưa thuê'),
('D05', 5, 1500000, 'Đã thuê'),
('E01', 1, 1500000, 'Chưa thuê'),
('E02', 1, 1500000, 'Chưa thuê'),
('E03', 3, 1500000, 'Đã thuê'),
('E04', 4, 1500000, 'Chưa thuê'),
('E05', 5, 1500000, 'Đã thuê'),
('P01', 1, 2000000, 'Đã thuê');

-- --------------------------------------------------------

--
-- Table structure for table `quanly`
--

CREATE TABLE `quanly` (
  `cccdQuanLy` char(12) NOT NULL,
  `sodienthoai` char(12) NOT NULL,
  `hoten` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `email` char(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `taikhoan`
--

CREATE TABLE `taikhoan` (
  `sodienthoai` char(12) NOT NULL,
  `matkhau` char(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `taikhoan`
--

INSERT INTO `taikhoan` (`sodienthoai`, `matkhau`) VALUES
('0368219833', '123465');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chutro`
--
ALTER TABLE `chutro`
  ADD PRIMARY KEY (`cccdChutro`),
  ADD KEY `sodienthoai` (`sodienthoai`);

--
-- Indexes for table `dondangkytamtru`
--
ALTER TABLE `dondangkytamtru`
  ADD PRIMARY KEY (`madondangky`),
  ADD KEY `cccd` (`cccd`),
  ADD KEY `cccdchutro` (`cccdchutro`);

--
-- Indexes for table `hoadon`
--
ALTER TABLE `hoadon`
  ADD PRIMARY KEY (`mahoadon`),
  ADD KEY `maphong` (`maphong`),
  ADD KEY `cccd` (`cccd`);

--
-- Indexes for table `hopdongthuetro`
--
ALTER TABLE `hopdongthuetro`
  ADD PRIMARY KEY (`mahopdong`),
  ADD KEY `maphong` (`maphong`),
  ADD KEY `cccd` (`cccd`),
  ADD KEY `cccdChuTro` (`cccdChuTro`);

--
-- Indexes for table `khachthuetro`
--
ALTER TABLE `khachthuetro`
  ADD PRIMARY KEY (`cccd`),
  ADD KEY `maphong` (`maphong`);

--
-- Indexes for table `phong`
--
ALTER TABLE `phong`
  ADD PRIMARY KEY (`maphong`);

--
-- Indexes for table `quanly`
--
ALTER TABLE `quanly`
  ADD PRIMARY KEY (`cccdQuanLy`),
  ADD KEY `sodienthoai` (`sodienthoai`);

--
-- Indexes for table `taikhoan`
--
ALTER TABLE `taikhoan`
  ADD PRIMARY KEY (`sodienthoai`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dondangkytamtru`
--
ALTER TABLE `dondangkytamtru`
  MODIFY `madondangky` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `chutro`
--
ALTER TABLE `chutro`
  ADD CONSTRAINT `chutro_ibfk_1` FOREIGN KEY (`sodienthoai`) REFERENCES `taikhoan` (`sodienthoai`);

--
-- Constraints for table `dondangkytamtru`
--
ALTER TABLE `dondangkytamtru`
  ADD CONSTRAINT `dondangkytamtru_ibfk_1` FOREIGN KEY (`cccd`) REFERENCES `khachthuetro` (`cccd`),
  ADD CONSTRAINT `dondangkytamtru_ibfk_2` FOREIGN KEY (`cccdchutro`) REFERENCES `chutro` (`cccdChutro`);

--
-- Constraints for table `hoadon`
--
ALTER TABLE `hoadon`
  ADD CONSTRAINT `hoadon_ibfk_1` FOREIGN KEY (`maphong`) REFERENCES `phong` (`maphong`),
  ADD CONSTRAINT `hoadon_ibfk_2` FOREIGN KEY (`cccd`) REFERENCES `khachthuetro` (`cccd`);

--
-- Constraints for table `hopdongthuetro`
--
ALTER TABLE `hopdongthuetro`
  ADD CONSTRAINT `hopdongthuetro_ibfk_1` FOREIGN KEY (`maphong`) REFERENCES `phong` (`maphong`),
  ADD CONSTRAINT `hopdongthuetro_ibfk_2` FOREIGN KEY (`cccd`) REFERENCES `khachthuetro` (`cccd`),
  ADD CONSTRAINT `hopdongthuetro_ibfk_3` FOREIGN KEY (`cccdChuTro`) REFERENCES `chutro` (`cccdChutro`);

--
-- Constraints for table `khachthuetro`
--
ALTER TABLE `khachthuetro`
  ADD CONSTRAINT `khachthuetro_ibfk_1` FOREIGN KEY (`maphong`) REFERENCES `phong` (`maphong`);

--
-- Constraints for table `quanly`
--
ALTER TABLE `quanly`
  ADD CONSTRAINT `quanly_ibfk_1` FOREIGN KEY (`sodienthoai`) REFERENCES `taikhoan` (`sodienthoai`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
