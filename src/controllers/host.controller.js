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

module.exports = {
    index,
    manageCustomer,
    manageCustomerAPI,
    getRoomsAPI,
    deleteCustomerAPI
};