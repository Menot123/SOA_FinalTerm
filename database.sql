DROP DATABASE IF EXISTS motel_room;

CREATE DATABASE motel_room;

USE motel_room;

DROP TABLE IF EXISTS PHONG;

CREATE TABLE PHONG (
maphong char(3) PRIMARY KEY,
sophong int,
giathue float
);

DROP TABLE IF EXISTS KHACHTHUETRO;

CREATE TABLE KHACHTHUETRO (
cccd char(12) PRIMARY KEY,
maphong char(3),
hoten nvarchar(50),
ngaysinh date,
sodienthoai char(12),
diachi nvarchar(100),
email char(50),
ghichu nvarchar(50),
FOREIGN KEY (maphong) REFERENCES PHONG(maphong)
);

DROP TABLE IF EXISTS TAIKHOAN;

CREATE TABLE TAIKHOAN (
sodienthoai char(12) PRIMARY KEY,
matkhau char(30)
);

DROP TABLE IF EXISTS CHUTRO;

CREATE TABLE CHUTRO (
cccdChutro char(12) PRIMARY KEY,
sodienthoai char(12) NOT NULL,
hoten nvarchar(50),
email char(50),
FOREIGN KEY (sodienthoai) REFERENCES TAIKHOAN(sodienthoai)
);

DROP TABLE IF EXISTS QUANLY;

CREATE TABLE QUANLY (
cccdQuanLy char(12) PRIMARY KEY,
sodienthoai char(12) NOT NULL,
hoten nvarchar(50),
email char(50),
FOREIGN KEY (sodienthoai) REFERENCES TAIKHOAN(sodienthoai)
);

DROP TABLE IF EXISTS HOPDONGTHUETRO;

CREATE TABLE HOPDONGTHUETRO (
mahopdong char(30) PRIMARY KEY,
maphong char(3) NOT NULL,
cccd char(12) NOT NULL,
cccdChuTro char(12) NOT NULL,
ngaybatdauvangayketthuc nvarchar(30),
ngaytaohopdong date,
thoihanhopdong nvarchar(30),
giathue float,
tiencoc float,
tenchutro nvarchar(50),
giatiendien float,
giatiennuoc float,
giatieninternet float,
soluongnguoi int,
tinhtrangphong nvarchar(30),
FOREIGN KEY (maphong) REFERENCES PHONG(maphong),
FOREIGN KEY (cccd) REFERENCES KHACHTHUETRO(cccd),
FOREIGN KEY (cccdChuTro) REFERENCES CHUTRO(cccdChuTro)
);

DROP TABLE IF EXISTS HOADON;

CREATE TABLE HOADON (
mahoadon char(30) PRIMARY KEY,
maphong char(3) NOT NULL,
cccd char(12) NOT NULL,
sodien int,
sonuoc int,
sotiendien float,
sotiennuoc float,
sotieninternet float,
ngaylaphoadon char(30),
thoigianthanhtoan datetime,
tongtienthanhtoan float,
ghichu nvarchar(30),
FOREIGN KEY (maphong) REFERENCES PHONG(maphong),
FOREIGN KEY (cccd) REFERENCES KHACHTHUETRO(cccd)
);

DROP TABLE IF EXISTS DONDANGKYTAMTRU;

CREATE TABLE DONDANGKYTAMTRU (
madondangky char(30) PRIMARY KEY,
diachitamtru nvarchar(100),
hoten nvarchar(50),
ngaysinh date,
gioitinh nvarchar(5),
cccd char(12) NOT NULL,
cccdchutro char(12) NOT NULL,
noidungdenghi nvarchar(50),
tenchutro nvarchar(50),
sodienthoai char(12),
noithuongtru nvarchar(100),
noiohientai nvarchar(100),
email char(50),
nghenghiep nvarchar(30),
FOREIGN KEY (cccd) REFERENCES KHACHTHUETRO(cccd),
FOREIGN KEY (cccdChuTro) REFERENCES CHUTRO(cccdChuTro)
);