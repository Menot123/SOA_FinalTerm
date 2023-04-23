// Define your services here
const repo = require('../repositories/home.repository')


async function createTRRF(owner, son) {
    try {
        var results = await repo.createTRRF(owner, son)
        return results
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong when creating Temporary Residence Registration Form');
    }
}

async function send(id) {
    try {
        var results = await repo.send(id)
        return results
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong when change status TRRF');
    }
}

async function getInfoTRRF(id) {
    try {
        var results = await repo.getInfoTRRF(id)
        return results
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong when get info TRRF');
    }
}

async function sendResponseAPI(res) {
    try {
        var results = await repo.sendResponseAPI(res)
        return results
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong when get info TRRF');
    }
}

module.exports = {
    createTRRF, send, getInfoTRRF, sendResponseAPI
    
}