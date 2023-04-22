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

module.exports = {
    getTRRF, getDetailById, cofirmed, hide, getRoom, getInfo, 
    
}