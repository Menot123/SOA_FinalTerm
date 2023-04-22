// Define your services here
const repo = require('../repositories/host.repository')

async function getCustomer(offset, perPage) {
    try {
        var result = await repo.getCustomer(offset, perPage)
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

async function getCustomerByRoomGroup(day, offset, perPage) {
    try {
        var result = await repo.getCustomerByRoomGroup(day, offset, perPage)
        return result
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong');
    }
}

async function getCustomerCount() {
    try {
        var result = await repo.getCustomerCount()
        return result[0]
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong');
    }
}

async function getCustomerCountByRoomGroup(day) {
    try {
        var result = await repo.getCustomerCountByRoomGroup(day)
        return result[0]
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong');
    }
}

async function deleteCustomer(cccd) {
    try {
        var result = await repo.deleteCustomer(cccd)
        return result
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong');
    }
}



module.exports = {
    getCustomer,
    getRooms,
    getCustomerByRoomGroup,
    getCustomerCount,
    getCustomerCountByRoomGroup,
    deleteCustomer
}