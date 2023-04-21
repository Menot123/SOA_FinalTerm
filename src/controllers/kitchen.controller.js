// Define your controllers here
const kitchenServices = require('../services/kitchen.service')

async function index(req, res, next) {
    try {
        res.render('kitchen_main')
    } catch (err) {
        console.error('An error when direct to kitchen-main page', err.message);
        next(err);
    }
}

async function toHandleOrderPage(req, res, next) {
    try {
        var response = {}
        response = await fetch(`http://localhost:3000/kitchen/api/handle-order`);
        const orders = await response.json();
        res.render('kitchen-order', { data: orders })
    } catch (err) {
        console.error('An error when direct to kitchen-order page', err.message);
        next(err);
    }
}

async function toHandleOrderPageApi(req, res, next) {
    try {
        const orders = await kitchenServices.getOrders()
        res.json(orders)
    } catch (err) {
        console.error('An error when direct to kitchen-order page', err.message);
        next(err);
    }
}

async function toHandleDetailOrderPageAPI(req, res, next) {
    try {
        const order = await kitchenServices.getOrder(req.params.id)
        const data = []
        for (let x in order) {
            const foodName = await kitchenServices.getFoodName(order[x].mamonan)
            data.push({
                tenmonan: foodName,
                soluong: order[x].soluong,
                ghichu: order[x].ghichu
            })
        }
        res.status(200).json({ data: data, id: req.params.id }) 
    } catch (err) {
        console.error('An error when direct to kitchen-order page', err.message);
        next(err);
    }
}

async function toHandleDetailOrderPage(req, res, next) {
    try {
        var response = {}
        response = await fetch(`http://localhost:3000/kitchen/api/handle-order/${req.params.id}`);
        const orders = await response.json();
        res.render('kitchen-detail-order', { data: orders.data, id: orders.id })
    } catch (err) {
        console.error('An error when direct to kitchen-order page', err.message);
        next(err);
    }
}

async function toHandleFoodPage(req, res, next) {
    try {
        var response = {}
        response = await fetch(`http://localhost:3000/kitchen/api/handle-food`);
        const foods = await response.json();

        res.render('kitchen-food', { data: foods })
    } catch (err) {
        console.error('An error when direct to kitchen-food page', err.message);
        next(err);
    }
}

async function toHandleFoodPageAPI(req, res, next) {
    try {
        const foods = await kitchenServices.getFoods()
        res.json(foods)
    } catch (err) {
        console.error('An error when direct to kitchen-food page', err.message);
        next(err);
    }
}

async function changeFoodStatus(req, res, next) {
    try {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ mamonan: req.body.mamonan, trangthai: req.body.trangthai })
        };


        const response = await fetch('http://localhost:3000/kitchen/api/handle-food', options);
        const data = await response.json();
        res.render('kitchen-food');

    } catch (err) {
        console.error('An error when direct to kitchen-food page', err.message);
        next(err);
    }
}

async function changeFoodStatusAPI(req, res, next) {
    try {
        const change = await kitchenServices.changeStatus(req.body.mamonan, req.body.trangthai)
        if (change.changedRows == 1) {
            res.json({
                message: 'update order success',
                status: true
            })
        } else {
            res.json({ message: 'update order failed' })
        }
    } catch (err) {
        console.error('An error when direct to kitchen-food page', err.message);
        next(err);
    }
}

async function completeOrder(req, res, next) {
    try {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ madonhang: req.body.madonhang })
        };


        const response = await fetch('http://localhost:3000/kitchen/api/handle-order', options);
        const data = await response.json();

        res.render('kitchen-food')
    } catch (err) {
        console.error('An error when direct to kitchen-food page', err.message);
        next(err);
    }
}

async function completeOrderAPI(req, res, next) {
    try {

        const change = await kitchenServices.completeOrder(req.body.madonhang, "Đã xử lý")
        if (change.changedRows == 1) {
            res.json({ message: 'update order success' })
        } else {
            res.json({ message: 'update order failed' })
        }

    } catch (err) {
        console.error('An error when direct to kitchen-food page', err.message);
        next(err);
    }
}

module.exports = {
    index,
    toHandleOrderPage,
    toHandleDetailOrderPage,
    toHandleFoodPage,
    changeFoodStatus,
    completeOrder,
    toHandleOrderPageApi,
    completeOrderAPI,
    toHandleFoodPageAPI,
    changeFoodStatusAPI,
    toHandleDetailOrderPageAPI,
};