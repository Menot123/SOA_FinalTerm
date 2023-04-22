const dbClient = require('./db_client');

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
async function updateCustomer(data) {
    const record = await dbClient.query(
        `UPDATE khachthuetro SET maphong='${data.maphong}', sodienthoai='${data.sodienthoai}', diachi='${data.diachi}', email='${data.email}', ghichu='${data.ghichu}' WHERE cccd = '${data.cccd}'`
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
    updateCustomer
}