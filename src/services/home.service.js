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

module.exports = {
    createTRRF,
    
}