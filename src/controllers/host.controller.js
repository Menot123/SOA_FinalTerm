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
        const url = `http://${process.env.HOST}:${process.env.PORT}/host/api`
        const responseCustomer = await fetch(url + "/manage-customer")
        const customer = await responseCustomer.json()
            // console.log(customer)

        const responseRoom = await fetch(url + "/rooms")
        const rooms = await responseRoom.json()
        console.log(rooms[0])

        res.render('manage-customer', { layout: 'manager', customer: customer, rooms: rooms });
    } catch (err) {
        console.error('Error', err.message);
        next(err);
    }
}
async function manageCustomerAPI(req, res, next) {
    try {
        const customer = await hostServices.getCustomer();
        res.json(customer)
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


module.exports = {
    index,
    manageCustomer,
    manageCustomerAPI,
    getRoomsAPI
};