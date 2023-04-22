const dbClient = require('./db_client');

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
module.exports = {
    getCustomer,
    getRooms,
    getCustomerByRoomGroup,
    getCustomerCount,
    getCustomerCountByRoomGroup,
    deleteCustomer
}