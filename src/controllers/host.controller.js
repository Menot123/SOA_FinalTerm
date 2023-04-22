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
        // Get the customer
        const url = `http://${process.env.HOST}:${process.env.PORT}/host/api`
        let responseCustomer;
        let filter = "All"
        if (req.query.day) {
            if (req.query.page) {
                responseCustomer = await fetch(url + "/manage-customer?day=" + req.query.day + "&page=" + req.query.page)
            } else {
                responseCustomer = await fetch(url + "/manage-customer?day=" + req.query.day)
            }
            filter = req.query.day
        } else {
            if (req.query.page) {
                responseCustomer = await fetch(url + "/manage-customer?page=" + req.query.page)
            } else {
                responseCustomer = await fetch(url + "/manage-customer")
            }
        }
        const data = await responseCustomer.json()
        console.log(data)

        // Get groupt room
        const responseRoom = await fetch(url + "/rooms")
        const rooms = await responseRoom.json()
            // console.log(rooms[0])
        res.render('manage-customer', { layout: 'manager', customer: data.customer, rooms: rooms, filter: filter, pageCount: data.pageCount, currentPage: data.currentPage });
    } catch (err) {
        console.error('Error', err.message);
        next(err);
    }
}
async function manageCustomerAPI(req, res, next) {
    try {
        // Paginations
        const perPage = 5; // Số lượng bản ghi trên mỗi trang
        const page = req.query.page || 1; // Trang hiện tại
        const offset = (page - 1) * perPage; // Vị trí bắt đầu lấy bản ghi
        let customer;
        let customerCount;
        if (req.query.day) {
            customerCount = await hostServices.getCustomerCountByRoomGroup(req.query.day);
            if (req.query.page) {
                customer = await hostServices.getCustomerByRoomGroup(req.query.day, offset, perPage);
            } else {
                customer = await hostServices.getCustomerByRoomGroup(req.query.day, offset, perPage);
            }
        } else {
            customerCount = await hostServices.getCustomerCount();
            customer = await hostServices.getCustomer(offset, perPage);
        }

        const pageCount = Math.ceil(customerCount.count / perPage);
        res.json({ customer, pageCount: pageCount, currentPage: page });
    } catch (err) {
        console.error('Error', err.message);
        next(err);
    }
}
async function getRoomsAPI(req, res, next) {
    try {
        const rooms = await hostServices.getRooms();

        const result = rooms.reduce((acc, curr) => {
            const day = curr.maphong[0]; // Lấy chữ cái đầu tiên của maphong

            // Tìm hoặc tạo phần tử tương ứng trong mảng kết quả
            const found = acc.find(item => item.day === day);
            if (found) {
                found.phong.push(curr); // Nếu đã tồn tại, thêm vào mảng phong
            } else {
                acc.push({ day, phong: [curr] }); // Nếu chưa tồn tại, tạo mới phần tử
            }

            return acc;
        }, []);

        // console.log(result[0]);

        res.json(result)
    } catch (err) {
        console.error('Error', err.message);
        next(err);
    }
}

async function managerTRRFAPI(req, res, next) {
    try {
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
            req.session.flash = { message: `Đã ẩn đơn đăng ký ${id}` }
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
async function deleteCustomerAPI(req, res, next) {
    try {
        let cccd = req.body.cccd
        const result = await hostServices.deleteCustomer(cccd)
        req.session.flash = { message: `Đã xóa khách trọ có CCCD ${cccd}` }
        res.status(200).json(req.session.flash);
    } catch (err) {
        console.error('Error', err.message);
        next(err);
    }
}

async function managerGHTTAPI(req, res, next) {
    try {
        const data = await hostServices.getTRRF2()
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

async function managerGHTT(req, res, next) {
    try {
        var data = null
        const response = await fetch(`http://localhost:3000/host/api/gia-han-tam-tru`)
        data = await response.json();
        res.render('ad_manGHTT', { layout: 'manager', data: data.data });
    } catch (err) {
        console.error('Error', err.message);
        next(err);
    }
}

module.exports = {
    index, manageCustomer, managerTRRF, managerTRRFAPI, getDetailById, cofirmed, hide, getInfo, manageCustomerAPI,
    getRoomsAPI,deleteCustomerAPI, managerGHTT, managerGHTTAPI,
};