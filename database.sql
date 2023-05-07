-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 23, 2023 at 08:44 PM
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
  `trangthai` varchar(20) NOT NULL DEFAULT 'chưa gửi',
  `maphong` char(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dondangkytamtru`
--

INSERT INTO `dondangkytamtru` (`madondangky`, `diachitamtru`, `hoten`, `ngaysinh`, `gioitinh`, `cccd`, `cccdchutro`, `noidungdenghi`, `tenchutro`, `sodienthoai`, `noithuongtru`, `noiohientai`, `email`, `nghenghiep`, `relationship`, `nguoithan`, `trangthai`, `maphong`) VALUES
(1, '19 Nguyễn Hữu Thọ', 'Huỳnh Khánh Duy', '2023-04-22', 'Nam', '3017680111', '08022245526', 'Đăng ký tạm trú', 'Nguyễn Văn Tùng', '0368219834', 'Ấp 8 xã Hiệp Thạnh huyện Ba Tri tỉnh Bến Tre', '19 Nguyễn Hữu Thọ', 'khanhduy8768@gmail.com', 'Sinh viên đại học Tôn Đức Thắn', 'Khách thuê', '[{\"stt\":\"1\",\"name1\":\"Nguyễn Việt Tiến\",\"birth1\":\"19/03/2009\",\"gender1\":\"Nam\",\"code1\":\"3017655555\",\"work1\":\"Học sinh\",\"rel1\":\"Con\",\"relb1\":\"Khách thuê trọ\"},{\"stt\":\"2\",\"name1\":\"Trần Tiến Đạt\",\"birth1\":\"19/07/2004\",\"gender1\":\"Nam\",\"code1\":\"0802254587\",\"work1\":\"Học Sinh\",\"rel1\":\"Con\",\"relb1\":\"Khách Thuê Trọ\"}]', 'Chưa tải xuống', 'A01'),
(2, '190 Nguyễn Thị Thập , Quận 7, TP HCM', 'Trần Thái Bảo', '1994-01-22', 'Nam', '08020251455', '08022245526', 'Đăng ký tạm trú tại 190 Nguyễn Thị Thập , Quận 7, ', 'Nguyễn Văn Tùng', '0723879452', '193/8 An Nhơn, Bình Định', '190 Nguyễn Thị Thập , Quận 7, TP HCM', 'thaibao94@gmail.com', 'Lập trình viên công ty Grap', 'Khách thuê', '[{\"stt\":\"1\",\"name1\":\"Nguyễn Thế Mạnh\",\"birth1\":\"19/07/2003\",\"gender1\":\"Nam\",\"work1\":\"Sinh Viên đại học Văn Lang\",\"rel1\":\"\",\"relb1\":\"\"}]', 'Chưa tải xuống', NULL),
(3, '19 Nguyễn Hữu Thọ, Quận 7, Hồ Chí Minh', 'Nguyễn Khắc Ngọc', '2000-01-26', 'Nam', '3017680112', '08022245526', 'Đăng ký tạm trú tại 19 Nguyễn Hữu Thọ, Quận 7, Hồ ', 'Nguyễn Văn Tùng', '0368219835', '186/2 Quận Đóng Đa, Hà Nội', '19 Nguyễn Hữu Thọ, Quận 7, Hồ Chí Minh', 'khacngocnguyen1@gmail.com', 'Sinh viên đại học Y Dược TPHCM', 'Khách thuê', '[{\"stt\":\"1\",\"name1\":\"\",\"birth1\":\"\",\"gender1\":\"\",\"code1\":\"\",\"work1\":\"\",\"rel1\":\"\",\"relb1\":\"\"},{}]', 'Chưa tải xuống', NULL),
(4, '19 Nguyễn Hữu Thọ, Quận 7, Hồ Chí Minh', 'Lê Văn Xuân', '1990-04-02', 'Nam', '3017680113', '08022245526', 'Đăng ký tạm trú', 'Nguyễn Văn Tùng', '0368219836', 'Ấp Mỹ Lợi huyện Châu Thành, Tiềng Giang', '19 Nguyễn Hữu Thọ, Quận 7, Hồ Chí Minh', 'xuanlevan22@gmail.com', 'Công nhân điện lực Quận 7', 'Khách thuê', '[{\"stt\":\"1\",\"name1\":\"\",\"birth1\":\"\",\"gender1\":\"\",\"code1\":\"\",\"work1\":\"\",\"rel1\":\"\",\"relb1\":\"\"},{}]', 'Chưa tải xuống', 'A03'),
(5, '19 Nguyễn Hữu Thọ', 'Huỳnh Khánh Duy', '2023-04-22', 'Nam', '3017680111', '08022245526', 'Gia hạn tạm trú ', 'Nguyễn Văn Tùng', '0368219834', 'Ấp 8 xã Hiệp Thạnh huyện Ba Tri tỉnh Bến Tre', '19 Nguyễn Hữu Thọ', 'khanhduy8768@gmail.com', 'Sinh viên đại học Tôn Đức Thắn', 'Khách thuê', '[{\"stt\":\"1\",\"name1\":\"Nguyễn Việt Tiến\",\"birth1\":\"19/03/2009\",\"gender1\":\"Nam\",\"code1\":\"3017655555\",\"work1\":\"Học sinh\",\"rel1\":\"Con\",\"relb1\":\"Khách thuê trọ\"},{\"stt\":\"2\",\"name1\":\"Trần Tiến Đạt\",\"birth1\":\"19/07/2004\",\"gender1\":\"Nam\",\"code1\":\"0802254587\",\"work1\":\"Học Sinh\",\"rel1\":\"Con\",\"relb1\":\"Khách Thuê Trọ\"}]', 'Đã tải xuống', 'A01');

-- --------------------------------------------------------

--
-- Table structure for table `hoadon`
--

CREATE TABLE `hoadon` (
  `mahoadon` char(30) NOT NULL,
  `maphong` char(3) NOT NULL,
  `cccd` char(12) NOT NULL,
  `chisodiendau` int(11) NOT NULL,
  `chisodiencuoi` int(11) NOT NULL,
  `chisonuocdau` int(11) NOT NULL,
  `chisonuoccuoi` int(11) NOT NULL,
  `sotiendien` float DEFAULT NULL,
  `sotiennuoc` float DEFAULT NULL,
  `sotieninternet` float DEFAULT NULL,
  `ngaylaphoadon` date DEFAULT NULL,
  `thoigianthanhtoan` datetime DEFAULT NULL,
  `tongtienthanhtoan` float DEFAULT NULL,
  `ghichu` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `hoadon`
--

INSERT INTO `hoadon` (`mahoadon`, `maphong`, `cccd`, `chisodiendau`, `chisodiencuoi`, `chisonuocdau`, `chisonuoccuoi`, `sotiendien`, `sotiennuoc`, `sotieninternet`, `ngaylaphoadon`, `thoigianthanhtoan`, `tongtienthanhtoan`, `ghichu`) VALUES
('HD30A010423', 'A01', '3017680111', 14, 30, 12, 22, 5000, 15000, 0, '2023-04-23', NULL, 4230000, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `hopdongthuetro`
--

CREATE TABLE `hopdongthuetro` (
  `mahopdong` int(11) NOT NULL,
  `maphong` char(3) NOT NULL,
  `cccd` char(12) NOT NULL,
  `cccdChuTro` char(12) NOT NULL DEFAULT '08022245526',
  `ngaybatdauvangayketthuc` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `ngaytaohopdong` date DEFAULT NULL,
  `thoihanhopdong` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `giathue` float DEFAULT NULL,
  `tiencoc` float DEFAULT NULL,
  `tenchutro` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT 'Nguyễn Văn Tùng',
  `giatiendien` float DEFAULT NULL,
  `giatiennuoc` float DEFAULT NULL,
  `giatieninternet` float NOT NULL DEFAULT 0,
  `soluongnguoi` int(11) DEFAULT NULL,
  `tinhtrangphong` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `trangthai` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `hopdongthuetro`
--

INSERT INTO `hopdongthuetro` (`mahopdong`, `maphong`, `cccd`, `cccdChuTro`, `ngaybatdauvangayketthuc`, `ngaytaohopdong`, `thoihanhopdong`, `giathue`, `tiencoc`, `tenchutro`, `giatiendien`, `giatiennuoc`, `giatieninternet`, `soluongnguoi`, `tinhtrangphong`, `trangthai`) VALUES
(1, 'A01', '3017680111', '08022245526', '22-04-2024 đến 22-04-2025', '2023-04-22', '1 năm', 4000000, 8000000, 'Nguyễn Văn Tùng', 5000, 15000, NULL, 3, 'Ổn', 'Đã ẩn'),
(2, 'A03', '3017680112', '08022245526', '22-04-2024 đến 22-10-2025', '2023-04-22', '1,5 năm', 4000000, 8000000, 'Nguyễn Văn Tùng', 5000, 15000, 180000, 1, 'Ổn', NULL),
(3, 'P01', '3017680111', '08022245526', '19/03/2023 đến 19/03/2024', '2020-01-24', '1 năm', 4000000, 8000000, 'Nguyễn Văn Tùng', 5000, 15000, NULL, 1, NULL, NULL);

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
  `ghichu` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `trangthai` varchar(30) DEFAULT NULL,
  `ngaycap` date DEFAULT NULL,
  `noicap` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `khachthuetro`
--

INSERT INTO `khachthuetro` (`cccd`, `maphong`, `hoten`, `ngaysinh`, `sodienthoai`, `diachi`, `email`, `ghichu`, `trangthai`, `ngaycap`, `noicap`) VALUES
('08020251455', 'A02', 'Trần Thái Bảo', '1994-01-22', '0723879452', '193/8 An Nhơn, Bình Định', 'thaibao94@gmail.com', NULL, NULL, '2004-02-20', 'Công An Bình Định'),
('098202013930', 'A01', 'Nguyễn Văn Bành', '2002-05-09', '0334353660', '19/3 Phường Tân Phong Q7 TP Hồ Chí Minh', 'ngjyentiendat9a3@gmail.com	', 'Còn nợ tiền phòng 04/2022', NULL, '2004-02-20', NULL),
('100000000001', 'A02', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('100000000002', 'A03', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('100000000003', 'A05', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('100000000004', 'B01', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('100000000005', 'B04', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('100000000006', 'D01', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('100000000007', 'E01', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('100000000008', 'B02', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('100000000009', 'C01', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('100000000010', 'B05', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('100000000011', 'E04', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('100000000012', 'D04', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('100000000013', 'E02', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('100000000014', 'C05', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('100000000015', 'C03', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('100000000016', 'A04', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('100000000017', 'E03', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('100000000018', 'D03', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('100000000019', 'E05', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('3017680111', 'P01', 'Huỳnh khánh Duy', '2002-04-15', '0368219834', 'Ấp 8 xã Hiệp Thạnh huyện Ba Tri tỉnh Bến Tre', 'khanhduy8768@gmail.com', NULL, NULL, '2018-07-20', 'Giám Đốc CA Bến Tre'),
('3017680112', 'A03', 'Nguyễn Khắc Ngọc', '2000-01-26', '0368219835', '186/2 Quận Đóng Đa, Hà Nội', 'khacngocnguyen1@gmail.com', NULL, NULL, '2004-02-20', 'Công An quận Đống Đa'),
('3017680113', 'A03', 'Lê Văn Xuân', '1990-04-02', '0368219836', 'Ấp Mỹ Lợi huyện Châu Thành, Tiềng Giang', 'xuanlevan22@gmail.com', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `phanhoi`
--

CREATE TABLE `phanhoi` (
  `id` int(11) NOT NULL,
  `nguoigui` varchar(30) DEFAULT NULL,
  `maphong` char(3) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `chude` varchar(30) DEFAULT NULL,
  `trangthai` varchar(20) NOT NULL DEFAULT 'Chưa phản hồi'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `phanhoi`
--

INSERT INTO `phanhoi` (`id`, `nguoigui`, `maphong`, `email`, `content`, `chude`, `trangthai`) VALUES
(5, 'Huỳnh Khánh Duy', 'A01', 'khanhduy8768@gmail.com', 'Sau khi nhận được thông báo số điện của phòng tôi là 132, nhưng hiện tại tôi kiểm tra trên đồng hồ là 123. Vui lòng kiểm tra lại giúp tôi.', 'Phản hồi tiền điện', 'Chưa phản hồi'),
(6, 'Trần Bảo Tuấn', 'A02', 'tranbt@gmail.com', 'Hiện tại tôi vừa xem số nước trên đồng hồ là 332 nhưng tôi lại nhận được thông báo là 442. Hãy kiểm tra lại giúp tôi.', 'Phản hồi về số nước được ghi', 'Chưa phản hồi');

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
  `matkhau` char(30) DEFAULT NULL,
  `role` int(11) NOT NULL DEFAULT 0,
  `email` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `taikhoan`
--

INSERT INTO `taikhoan` (`sodienthoai`, `matkhau`, `role`, `email`) VALUES
('0368219833', '321321', 1, 'khanhduy8768@gmail.com'),
('0368219835', '123123', 0, NULL);

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
-- Indexes for table `phanhoi`
--
ALTER TABLE `phanhoi`
  ADD PRIMARY KEY (`id`);

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
  MODIFY `madondangky` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `hopdongthuetro`
--
ALTER TABLE `hopdongthuetro`
  MODIFY `mahopdong` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `phanhoi`
--
ALTER TABLE `phanhoi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

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
