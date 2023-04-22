// Define your services here
const repo = require('../repositories/host.repository')

async function getCustomer() {
    try {
        var result = await repo.getCustomer()
        return result
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong');
    }
}
async function getRooms() {
    try {
        var result = await repo.getRooms()
        return result
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong');
    }
}


module.exports = {
    getCustomer,
    getRooms
}