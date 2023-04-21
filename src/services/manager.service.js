const repo = require('../repositories/manager.repository')
async function getBills() {
    try {
        var listBill = await repo.getBills()
        return listBill
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong');
    }
}

async function getBillsSelected(year) {
    try {
        var listBill = await repo.getBillsSelected(year)
        return listBill
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong');
    }
}




module.exports = {
    getBills,getBillsSelected
}