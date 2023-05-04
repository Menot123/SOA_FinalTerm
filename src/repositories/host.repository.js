const dbClient = require('./db_client');

async function getTRRF() {
    const record = await dbClient.query(
        `select * from dondangkytamtru where trangthai != 'chưa gửi' && trangthai != 'Đã ẩn' && noidungdenghi NOT LIKE '%gia hạn tạm trú%'
        ORDER BY (trangthai = 'chưa tải xuống') DESC`
    )
    return record
};

async function getDetailById(id) {
    const record = await dbClient.query(
        `select * from dondangkytamtru where madondangky = ?`, [id]
    )
    return record
};

async function cofirmed(id) {
    const record = await dbClient.query(
        `UPDATE dondangkytamtru set trangthai = ? WHERE cccd = ?`, ["Đã tải xuống", id]
    );
    return record.changedRows
};

async function hide(id) {
    const record = await dbClient.query(
        `UPDATE dondangkytamtru set trangthai = ? WHERE madondangky = ?`, ["Đã ẩn", id]
    );
    return record.changedRows
};

async function getRoom(cccd) {
    const record = await dbClient.query(
        `select maphong from hopdongthuetro WHERE cccd = ?`, [cccd]
    );
    return record[0].maphong
};

async function getInfo(id) {
    const record = await dbClient.query(
        `select * from khachthuetro WHERE cccd = ?`, [id]
    );
    return record
};

async function getTRRF() {
    const record = await dbClient.query(
        `select * from dondangkytamtru where trangthai != 'chưa gửi' && trangthai != 'Đã ẩn' ORDER BY (trangthai = 'chưa tải xuống') DESC`
    )
    return record
};

async function getDetailById(id) {
    const record = await dbClient.query(
        `select * from dondangkytamtru where madondangky = ?`, [id]
    )
    return record
};

async function cofirmed(id) {
    const record = await dbClient.query(
        `UPDATE dondangkytamtru set trangthai = ? WHERE cccd = ?`, ["Đã tải xuống", id]
    );
    return record.changedRows
};

async function hide(id) {
    const record = await dbClient.query(
        `UPDATE dondangkytamtru set trangthai = ? WHERE madondangky = ?`, ["Đã ẩn", id]
    );
    return record.changedRows
};

async function getRoom(cccd) {
    const record = await dbClient.query(
        `select maphong from hopdongthuetro WHERE cccd = ?`, [cccd]
    );
    return record[0].maphong
};

async function getInfo(id) {
    const record = await dbClient.query(
        `select * from khachthuetro WHERE cccd = ?`, [id]
    );
    return record
};

async function getCustomer(offset, perPage) {
    const record = await dbClient.query(
        `SELECT * FROM khachthuetro WHERE trangthai is NULL LIMIT ${offset}, ${perPage}`
    );
    return record;
};
async function getRooms() {
    const record = await dbClient.query(
        `SELECT * FROM phong`
    );
    return record;
};
async function getCustomerByRoomGroup(day, offset, perPage) {
    const record = await dbClient.query(
        `SELECT * FROM khachthuetro WHERE trangthai is NULL AND maphong LIKE '${day}%' LIMIT ${offset}, ${perPage} `
    );
    return record;
};
async function getCustomerCount() {
    const record = await dbClient.query(
        `SELECT COUNT(*) AS count FROM khachthuetro WHERE trangthai is NULL`
    );
    return record;
};
async function getCustomerCountByRoomGroup(day) {
    const record = await dbClient.query(
        `SELECT COUNT(*) AS count FROM khachthuetro WHERE maphong LIKE '${day}%' AND trangthai is NULL`
    );
    return record;
};
async function deleteCustomer(cccd) {
    const record = await dbClient.query(
        `UPDATE khachthuetro SET trangthai='deleted' WHERE cccd = '${cccd}'`
    );
    return record;
};

async function getTRRF2() {
    const record = await dbClient.query(
        `select * from dondangkytamtru where trangthai != 'chưa gửi' && trangthai != 'Đã ẩn' && noidungdenghi like '%Gia hạn tạm trú%'`
    )
    return record
};

async function updateCustomer(data) {
    const record = await dbClient.query(
        `UPDATE khachthuetro SET maphong='${data.maphong}', sodienthoai='${data.sodienthoai}', diachi='${data.diachi}', email='${data.email}', ghichu='${data.ghichu}' WHERE cccd = '${data.cccd}'`
    );
    return record;
};

async function manResponseAPI() {
    const record = await dbClient.query(
        `select * from phanhoi where trangthai = "Chưa phản hồi"`
    )
    return record
};

async function hidenResponse(id) {
    const record = await dbClient.query(
        `UPDATE phanhoi set trangthai = ? WHERE id = ?`, ["Đã phản hồi", id]
    );
    return record.changedRows
};

async function createCustomer(data) {
    const record = await dbClient.query(
        `INSERT INTO khachthuetro(cccd, maphong, hoten, ngaysinh, sodienthoai, diachi, email, ghichu, ngaycap, noicap) 
        VALUES ('${data.cccd}', '${data.maphong}', '${data.hoten}', '${data.ngaysinh}', '${data.sodienthoai}', '${data.diachi}', '${data.email}', '${data.ghichu}', '${data.ngaycap}', '${data.noicap}')`
    );
    return record;
};

async function getBills() {
    const record = await dbClient.query(
        `SELECT * FROM hoadon`
    );
    return record;
};
async function getBillByYearMonth(year, month) {
    const record = await dbClient.query(
        `SELECT * FROM hoadon WHERE YEAR(ngaylaphoadon) = ${year} AND MONTH(ngaylaphoadon) = ${month}`
    );
    return record;
};
async function getHopDongByMaphong(maphong) {
    const record = await dbClient.query(
        `SELECT * FROM hopdongthuetro WHERE maphong = '${maphong}'`
    );
    return record;
};

async function getHopDongThueTro() {
    const record = await dbClient.query(
        `SELECT * FROM hopdongthuetro where trangthai is NULL`
    );
    return record;
};

async function hidenHD(id) {
    const record = await dbClient.query(
        `UPDATE hopdongthuetro set trangthai = ? WHERE mahopdong = ?`, ["Đã ẩn", id]
    );
    return record.changedRows
};

async function getDetailHDTTById(id) {
    const record = await dbClient.query(
        `select * from hopdongthuetro where cccd = ?`, [id]
    )
    return record
};

async function getInfoById(id) {
    const record = await dbClient.query(
        `select * from khachthuetro where cccd = ?`, [id]
    )
    return record
};

async function createHDTT(obj) {
    const record = await dbClient.query(
        `INSERT INTO hopdongthuetro(maphong, cccd, ngaybatdauvangayketthuc, ngaytaohopdong, thoihanhopdong, giathue,
             tiencoc, giatiendien, giatiennuoc, soluongnguoi) 
        VALUES ('${obj.name}', '${obj.date}', '${obj.code}', '${obj.phone}', '${obj.email}', '${obj.oldAdd}',
         '${obj.tempAdd}', '${obj.nowAdd}', '${obj.work}', '${obj.relationship}')`
    )
    return record
}
async function createBill(data) {
    const record = await dbClient.query(
        `INSERT INTO hoadon(mahoadon, maphong, cccd, chisodiendau, chisodiencuoi, chisonuocdau, chisonuoccuoi, sotiendien,sotiennuoc,sotieninternet,ngaylaphoadon,tongtienthanhtoan) 
        VALUES ('${data.mahoadon}', '${data.maphong}', '${data.cccd}', '${data.chisodiendau}', '${data.chisodiencuoi}', '${data.chisonuocdau}', '${data.chisonuoccuoi}', '${data.sotiendien}', '${data.sotiennuoc}', '${data.sotieninternet}', '${data.ngaylaphoadon}', '${data.tongtienthanhtoan}')`
    );
    return record;
};
async function getBillDetail(mahoadon) {
    const record = await dbClient.query(
        `SELECT * FROM hoadon WHERE mahoadon = '${mahoadon}'`
    );
    return record;
};
async function getHopDong(cccd) {
    const record = await dbClient.query(
        `SELECT * FROM hopdongthuetro WHERE cccd = '${cccd}'`
    );
    return record;
};

async function getHDTTByMaPhong(maphong) {
    const record = await dbClient.query(
        `SELECT * FROM hopdongthuetro WHERE maphong = '${maphong}'`
    );
    return record;
};

async function findUserByEmail(email) {
    const record = await dbClient.query(
        `select * from taikhoan where email = ? `, [email]
    )
    return record
}

async function createAccount(inf) {
    const record = await dbClient.query(
        `insert into taikhoan (sodienthoai, matkhau, email) values ('${inf.phone}','${inf.password}','${inf.email}')`
    )
    return record.affectedRows
}

async function completeBill(maphong, date) {
    const record = await dbClient.query(
        `UPDATE hoadon set thoigianthanhtoan = ? WHERE maphong = ? LIMIT 1`, [date, maphong]
    )
    return record.affectedRows
}

async function getRoomMail() {
    const record = await dbClient.query(
        `SELECT maphong,email FROM khachthuetro WHERE email is not Null`
    );
    return record;
};
module.exports = {
    getTRRF,
    getDetailById,
    cofirmed,
    hide,
    getRoom,
    getInfo,
    getCustomer,
    getRooms,
    getCustomerByRoomGroup,
    getCustomerCount,
    getCustomerCountByRoomGroup,
    deleteCustomer,
    getTRRF2,
    updateCustomer,
    manResponseAPI,
    hidenResponse,
    createCustomer,
    getBillByYearMonth,
    getHopDongByMaphong,
    getHopDongThueTro,
    hidenHD,
    getDetailHDTTById,
    getInfoById,
    createHDTT,
    createBill,
    getBillDetail,
    getHopDong,
    getHDTTByMaPhong,
    findUserByEmail,
    createAccount,
    getRoomMail,
    completeBill
}