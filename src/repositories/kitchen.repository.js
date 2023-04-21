const dbClient = require('./db_client');

async function getAllOrder() {
    const record = await dbClient.query(
        `SELECT * FROM donhang`
    );
    return record;
};

async function getDetailOrder(idOrder) {
    const record = await dbClient.query(
        `SELECT * FROM chitietdonhang WHERE madonhang = ? `, [idOrder]
    );
    return record;
};

async function foodName(id) {
    const record = await dbClient.query(
        `SELECT tenmonan FROM monan WHERE mamonan = ? `, [id]
    );
    return record;
};

async function foods() {
    const record = await dbClient.query(
        `SELECT * FROM monan`
    );
    return record
}

async function changeFoodS(id, status) {
    const record = await dbClient.query(
        `UPDATE monan SET trangthai = ? WHERE monan.mamonan = ? `, [status, id]
    );
    return record;
}

async function completeO(id, status) {
    const record = await dbClient.query(
        `UPDATE donhang SET trangthai = ? WHERE donhang.madonhang = ? `, [status, id]
    );
    return record;
}


module.exports = {
    getAllOrder,
    getDetailOrder,
    foodName,
    foods,
    changeFoodS,
    completeO
}