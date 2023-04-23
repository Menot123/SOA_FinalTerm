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

async function getTRRF2() {
    try {
        var results = await repo.getTRRF2()
        return results
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong when get GHTT');
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

async function updateCustomer(data) {
    try {
        var result = await repo.updateCustomer(data)
        return result
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong');
    }
}

async function manResponseAPI() {
    try {
        var results = await repo.manResponseAPI()
        return results
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong when get response');
    }
}

async function hidenResponse(id) {
    try {
        var results = await repo.hidenResponse(id)
        return results
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong when hidden response');
    }
}

async function createCustomer(data) {
    try {
        var result = await repo.createCustomer(data)
        return result
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong in createCustomer');
    }
}

async function getBillByYearMonth(year, month) {
    try {
        var result = await repo.getBillByYearMonth(year, month)
        return result
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong in getBill');
    }
}

async function getHopDongByMaphong(maphong) {
    try {
        var result = await repo.getHopDongByMaphong(maphong)
        return result
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong in createCustomer');
    }
}

async function getHopDongThueTro() {
    try {
        var result = await repo.getHopDongThueTro()
        return result
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong in createCustomer');
    }
}

async function hidenHD(id) {
    try {
        var results = await repo.hidenHD(id)
        return results
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong when hidden TRRF');
    }
}

async function getDetailHDTTById(id) {
    try {
        var results = await repo.getDetailHDTTById(id)
        return results
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong when HDTT');
    }
}

async function getInfoById(id) {
    try {
        var results = await repo.getInfoById(id)
        return results
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong when info');
    }
}

async function createHDTT(obj) {
    try {
        var results = await repo.createHDTT(obj)
        return results
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong when info');
    }
}
async function createBill(data) {
    try {
        var result = await repo.createBill(data)
        return result
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong in createBill');
    }
}
async function getBillDetail(mahoadon) {
    try {
        var result = await repo.getBillDetail(mahoadon)
        return result
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong in createBill');
    }
}
async function getHopDong(cccd) {
    try {
        var result = await repo.getHopDong(cccd)
        return result[0]
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong in getHopDong');
    }
}

module.exports = {
    getTRRF,
    getDetailById,
    cofirmed,
    hide,
    getRoom,
    getInfo,
    getCustomer,
    getRooms,
    getCustomerByRoomGroup,
    getTRRF2,
    getCustomerCount,
    getCustomerCountByRoomGroup,
    deleteCustomer,
    updateCustomer,
    manResponseAPI,
    hidenResponse,
    createCustomer,
    getBillByYearMonth,
    getHopDongByMaphong,
    getHopDongThueTro,
    hidenHD,
    getDetailHDTTById,
    getInfoById,
    createHDTT,
    createBill,
    getBillDetail,
    getHopDong
}