const dbClient = require('./db_client');

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

module.exports = {
    getCustomer,
    getRooms
}