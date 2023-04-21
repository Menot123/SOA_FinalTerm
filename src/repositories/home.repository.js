const dbClient = require('./db_client');

async function getEmployee(manv) {
    const record = await dbClient.query(
        `SELECT * FROM nhanvien where manhanvien = ?`, [manv]
    );
    return record;
};

async function getTables() {
    const record = await dbClient.query(
        `SELECT * FROM ban`
    );
    return record;
};

async function getEndTables() {
    const record = await dbClient.query(
        `SELECT * FROM ban where trangthai = "Đã có khách"`
    );
    return record;
};

async function getCloseTable(maban) {
    const record = await dbClient.query(
        `UPDATE ban SET trangthai = 'Còn trống' WHERE maban = ?`, [maban]
    );
    return record.changedRows;
};

async function getOpenTable(maban) {
    const record = await dbClient.query(
        `UPDATE ban SET trangthai = 'Đã có khách' WHERE maban = ?`, [maban]
    );
    return record.changedRows;
};

async function getBill(maban) {
    const record = await dbClient.query(
        `SELECT * FROM donhang where maban = ?`, [maban]
    );
    return record;
};

async function getBillM(madonhang) {
    const record = await dbClient.query(
        `SELECT * FROM donhang where madonhang = ?`, [madonhang]
    );
    return record;
};


async function getBillDetail(madonhang) {
    const record = await dbClient.query(
        `SELECT * FROM chitietdonhang where madonhang = ?`, [madonhang]
    );
    return record;
};

async function getFood(mamonan) {
    const record = await dbClient.query(
        `SELECT * FROM monan where mamonan = ?`, [mamonan]
    );
    return record;
};

async function createBill(code, madonhang, manv, date) {
    const record = await dbClient.query(
        `INSERT INTO phieutinhtien (maphieu, madonhang, manhanvien, ngaytao) VALUES (?, ?, ?, ?)`, [code, madonhang, manv, date]
    );
    return record.affectedRows;
};
async function foodList() {
    const record = await dbClient.query(
        `SELECT * FROM monan`
    );
    return record;
}

async function foodListFilter(filter) {
    const record = await dbClient.query(
        `SELECT * FROM monan WHERE mamonan LIKE '%${filter}%'`
    );
    return record;
}

async function foodId(tenmonan) {
    const record = await dbClient.query(
        `SELECT mamonan FROM monan WHERE tenmonan = ?`, [tenmonan]
    );
    return record;
}

async function createO(donhang) {
    const record = await dbClient.query(
        `INSERT INTO donhang (madonhang, maban, manhanvien, ngaytao,thoigianthanhtoan,trangthai,tongtien) VALUES (?, ?, ?, ?,?,?,?)`, [donhang.madonhang, donhang.maban, donhang.manhanvien, donhang.ngaytao, donhang.thoigianthanhtoan, donhang.trangthai, donhang.tongtien]
    );
    return record;
};

async function createDetailO(mamonan, madonhang, soluong, ghichu) {
    const record = await dbClient.query(
        `INSERT INTO chitietdonhang (mamonan, madonhang, soluong, ghichu) VALUES (?, ?, ?, ?)`, [mamonan, madonhang, soluong, ghichu]
    );
    return record;
};


module.exports = {
    getTables,
    getEndTables,
    getCloseTable,
    getBill,
    getBillDetail,
    getFood,
    getOpenTable,
    createBill,
    foodList,
    foodListFilter,
    getBillM,
    foodId,
    createO,
    createDetailO,
    getEmployee
}