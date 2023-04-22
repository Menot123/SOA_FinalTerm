// Define your controllers here
const hostServices = require('../services/host.service')

async function index(req, res, next) {
    try {
        res.render('admin', { layout: 'manager' });
    } catch (err) {
        console.error('Error', err.message);
        next(err);
    }
}



async function manageCustomer(req, res, next) {
    try {
        res.render('manage-customer', { layout: 'manager' });
    } catch (err) {
        console.error('Error', err.message);
        next(err);
    }
}

async function managerTRRFAPI(req, res, next) {
    try {
        // var room = null
        // const response = await fetch(`http://localhost:3000/host/api/room`)
        // room = await response.json();
        const data = await hostServices.getTRRF()
        if (data.length > 0) {
            res.status(200).json({ data: data })
        } else {
            res.status(400).json({ message: "get list TRRF failed" })
        }
    } catch (err) {
        console.error('Error', err.message);
        next(err);
    }
}

async function managerTRRF(req, res, next) {
    try {
        var data = null
        const response = await fetch(`http://localhost:3000/host/api/dang-ky-tam-tru`)
        data = await response.json();
        res.render('ad_manTRRF', { layout: 'manager', data: data.data });
    } catch (err) {
        console.error('Error', err.message);
        next(err);
    }
}

async function getDetailById(req, res, next) {
    try {
        var data = null
        if (req.query.id) {
            data = await hostServices.getDetailById(req.query.id)
        }
        const arr = JSON.parse(data[0].nguoithan)
        const room = await hostServices.getRoom(req.query.cccd)
        res.render('ad_maudon', { layout: false, data: data[0], array: arr, room: room });
    } catch (err) {
        console.error('Error', err.message);
        next(err);
    }
}

async function cofirmed(req, res, next) {
    try {
        const status = await hostServices.cofirmed(req.body.id)
        if (status > 0) {
            res.status(200).json({ message: "Confirm download successfully", status: status })
        } else {
            res.status(400).json({ message: "Confirm download fail", status: status })
        }
    } catch (err) {
        console.error('Error', err.message);
        next(err);
    }
}

async function hide(req, res, next) {
    try {
        const id = req.body.id
        const status = await hostServices.hide(id)
        if (status > 0) {
            req.session.flash = {message: `Đã ẩn đơn đăng ký ${id}`}
            res.status(200).json({ message: "hidden successfully", status: status })
        } else {
            res.status(400).json({ message: "hidden fail", status: status })
        }
    } catch (err) {
        console.error('Error', err.message);
        next(err);
    }
}

async function getInfo(req, res, next) {
    try {
        const id = req.params.id
        const status = await hostServices.getInfo(id)
        if (status.length > 0) {
            res.status(200).json({ message: "get information of president successfully", status: status })
        } else {
            res.status(200).json({ message: "get information of president fail", status: status })
        }
    } catch (err) {
        console.error('Error', err.message);
        next(err);
    }
}

module.exports = {
    index, manageCustomer, managerTRRF, managerTRRFAPI, getDetailById, cofirmed, hide, getInfo, 
};