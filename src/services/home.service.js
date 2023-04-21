// Define your services here
const repo = require('../repositories/home.repository')

async function getEmployee(manv) {
    try {
        var result = await repo.getEmployee(manv)
        return result
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong');
    }
}

async function getTables() {
    try {
        var listTable = await repo.getTables()
        if (listTable.length > 0) {
            return listTable
        } else {
            return false
        }
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong');
    }
}

async function getEndTables() {
    try {
        var listTable = await repo.getEndTables()
        if (listTable.length > 0) {
            return listTable
        } else {
            return false
        }
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong');
    }
}

async function getCloseTable(maban) {
    try {
        var result = await repo.getCloseTable(maban)
        return result
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong');
    }
}

async function getOpenTable(maban) {
    try {
        var result = await repo.getOpenTable(maban)
        if (result == 1) {
            return {
                message: "Open table successfully",
                results: result
            }
        } else {
            return {
                message: "Open table failed",
                results: result
            }
        }
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong');
    }
}

async function getBill(maban) {
    try {
        var results = await repo.getBill(maban)
        return results
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong');
    }
}

async function getBillM(madonhang) {
    try {
        var results = await repo.getBillM(madonhang)
        return results
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong');
    }
}

async function getBillDetail(madonhang) {
    try {
        var results = await repo.getBillDetail(madonhang)
        return results
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong');
    }
}

async function getFood(mamonan) {
    try {
        var results = await repo.getFood(mamonan)
        return results
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong');
    }
}

async function createBill(code, madonhang, manv, date) {
    try {
        var results = await repo.createBill(code, madonhang, manv, date)
        return results
        async function getFoodList() {
            try {
                var results = await repo.foodList()
                return results
            } catch (err) {
                console.log(err);
                throw new Error('Service: Something wrong');
            }
        }
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong');
    }
}

async function getFoodList() {
    try {
        var results = await repo.foodList()
        return results
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong');
    }
}

async function getFoodListFilter(filter) {
    try {
        var results = await repo.foodListFilter(filter)
        return results
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong');
    }
}

async function getMaMonAn(tenmonan) {
    try {
        var results = await repo.foodId(tenmonan)
        console.log(results[0]);
        return results[0].mamonan
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong');
    }
}

async function createOrder(donhang) {
    try {
        var results = await repo.createO(donhang)
        return results
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong');
    }
}

async function createDetailOrder(mamonan, madonhang, soluong, ghichu) {
    try {
        var results = await repo.createDetailO(mamonan, madonhang, soluong, ghichu)
        return results
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong');
    }
}

module.exports = {
    getTables,
    getEndTables,
    getCloseTable,
    getBill,
    getBillDetail,
    getFood,
    getOpenTable,
    createBill,
    getFoodList,
    getFoodListFilter,
    getBillM,
    getMaMonAn,
    createOrder,
    createDetailOrder,
    getEmployee
}