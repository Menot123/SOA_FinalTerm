const repo = require('../repositories/kitchen.repository')
async function getOrders() {
    try {
        var listOrder = await repo.getAllOrder()
        return listOrder
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong');
    }
}

async function getOrder(id) {
    try {
        var detailOrder = await repo.getDetailOrder(id);
        return detailOrder
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong');
    }
}
async function getFoodName(id) {
    try {
        var foodName = await repo.foodName(id);
        return foodName[0].tenmonan
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong');
    }
}

async function getFoods() {
    try {
        var foods = await repo.foods();
        return foods
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong');
    }
}

async function changeStatus(id, status) {
    try {
        var change = await repo.changeFoodS(id, status);
        return change
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong');
    }
}

async function completeOrder(id, status) {
    try {
        var change = await repo.completeO(id, status);
        return change
    } catch (err) {
        console.log(err);
        throw new Error('Service: Something wrong');
    }
}

module.exports = {
    getOrders,
    getOrder,
    getFoodName,
    getFoods,
    changeStatus,
    completeOrder
}