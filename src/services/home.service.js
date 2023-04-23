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

async function handleLogin(phone, password) {
    try {
        var results = await repo.handleLogin(phone, password)
        return results
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong when login');
    }
}

async function getBillById(id) {
    try {
        var results = await repo.getBillById(id)
        return results
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong when login');
    }
}

async function changePass(password,email) {
    try {
        const status = await repo.changePass(password,email)
        return status;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    createTRRF, send, getInfoTRRF, sendResponseAPI, handleLogin, getBillById, changePass,
    
}