// Define your services here
const repo = require('../repositories/host.repository')

async function getTRRF() {
    try {
        var results = await repo.getTRRF()
        return results
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong when getTRRF');
    }
}

async function getDetailById(id) {
    try {
        var results = await repo.getDetailById(id)
        return results
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong when getTRRF');
    }
}

async function cofirmed(id) {
    try {
        var results = await repo.cofirmed(id)
        return results
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong when confirm download TRRF');
    }
}

async function hide(id) {
    try {
        var results = await repo.hide(id)
        return results
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong when hidden TRRF');
    }
}

async function getRoom(cccd) {
    try {
        var results = await repo.getRoom(cccd)
        return results
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong when get room');
    }
}

async function getInfo(id) {
    try {
        var results = await repo.getInfo(id)
        return results
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong when get info resident');
    }
}

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

async function getCustomerByRoomGroup(day) {
    try {
        var result = await repo.getCustomerByRoomGroup(day)
        return result
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong');
    }
}

async function getTRRF2() {
    try {
        var results = await repo.getTRRF2()
        return results
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong when get GHTT');
    }
}

module.exports = {
    getTRRF, getDetailById, cofirmed, hide, getRoom, getInfo, getCustomer, getRooms, getCustomerByRoomGroup,
    getTRRF2, 
}