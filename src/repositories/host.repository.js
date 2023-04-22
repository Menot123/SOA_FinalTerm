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
        `select * from dondangkytamtru where madondangky = ?`,[id]
    )
    return record
};

async function cofirmed(id) {
    const record = await dbClient.query(
        `UPDATE dondangkytamtru set trangthai = ? WHERE cccd = ?`,["Đã tải xuống",id]
    );
    return record.changedRows
};

async function hide(id) {
    const record = await dbClient.query(
        `UPDATE dondangkytamtru set trangthai = ? WHERE madondangky = ?`,["Đã ẩn",id]
    );
    return record.changedRows
};

async function getRoom(cccd) {
    const record = await dbClient.query(
        `select maphong from hopdongthuetro WHERE cccd = ?`,[cccd]
    );
    return record[0].maphong
};

async function getInfo(id) {
    const record = await dbClient.query(
        `select * from khachthuetro WHERE cccd = ?`,[id]
    );
    return record
};

async function getCustomer() {
    const record = await dbClient.query(
        `SELECT * FROM khachthuetro`
    );
    return record;
};
async function getRooms() {
    const record = await dbClient.query(
        `SELECT * FROM phong`
    );
    return record;
};
async function getCustomerByRoomGroup(day) {
    const record = await dbClient.query(
        `SELECT * FROM khachthuetro WHERE maphong LIKE '${day}%'`
    );
    return record;
};

async function getTRRF2() {
    const record = await dbClient.query(
        `select * from dondangkytamtru where trangthai != 'chưa gửi' && trangthai != 'Đã ẩn' && noidungdenghi like '%Gia hạn tạm trú%'`
    )
    return record
};

module.exports = {
    getTRRF, getDetailById, cofirmed, hide,  getRoom, getInfo,getCustomer,
    getRooms, getCustomerByRoomGroup, getTRRF2, 
}
