// Define your controllers here
const { request } = require('express');
const hostServices = require('../services/host.service')
const mailer = require('../util/mailer')


async function index(req, res, next) {
    try {
        let response = await fetch("http://localhost:3000/host/api/rooms")
        const rooms = await response.json()
            // console.log(rooms[0])
        if (req.session.admin) {
            res.render('admin', { layout: 'manager', rooms: rooms });
        } else {
            res.render('admin', { layout: 'manager', manager: 'manager', rooms: rooms });
        }
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
            // console.log(data)

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

async function updateCustomerAPI(req, res, next) {
    try {
        let data = req.body
        const result = await hostServices.updateCustomer(data)
        req.session.flash = { message: `Cập nhật thông tin cho khách trọ có CCCD là ${data.cccd} thành công` }
        res.status(200).json(req.session.flash);
    } catch (err) {
        console.error('Error', err.message);
        next(err);
    }
}
async function createCustomerAPI(req, res, next) {
    try {
        let data = req.body
            // console.log(data);
        if (data.cccd) {
            const result = await hostServices.createCustomer(data)
            req.session.flash = { message: `Khách trọ có CCCD là ${data.cccd} đã được thêm` }
            res.status(200).json(req.session.flash);
        } else {
            req.session.flash = { message: `Bạn không được để trống mã CMND/CCCD` }
            res.status(500).json(req.session.flash);
        }
    } catch (err) {
        console.error('Error', err.message);
        next(err);
    }
}

async function manResponseAPI(req, res, next) {
    try {
        const data = await hostServices.manResponseAPI()
        if (data.length > 0) {
            res.status(200).json({ data: data })
        } else {
            res.status(400).json({ message: "get list response failed" })
        }
    } catch (err) {
        console.error('Error', err.message);
        next(err);
    }
}

async function manResponse(req, res, next) {
    try {
        var data = null
        const response = await fetch(`http://localhost:3000/host/api/quan-ly-phan-hoi`)
        data = await response.json();
        res.render('ad_manResponse', { layout: 'manager', data: data.data });
    } catch (err) {
        console.error('Error', err.message);
        next(err);
    }
}

async function sendLinkResponse(req, res, next) {
    if (req.params.email && req.body.content) {
        mailer.sendMail(req.params.email, "CẢM ƠN bạn đã phản hồi cho chúng tôi", req.body.content)
        res.status(200).json({ message: 'Gửi phản hồi thành công', status: 1, email: req.params.email })
    } else {
        res.status(400).json({ message: 'Gửi phản hồi thất bại', status: 0, email: req.params.email })
    }
}

async function hidenResponse(req, res, next) {
    try {
        const id = req.body.id
        const status = await hostServices.hidenResponse(id)
        if (status > 0) {
            res.status(200).json({ message: "hidden successfully", status: status })
        } else {
            res.status(400).json({ message: "hidden fail", status: status })
        }
    } catch (err) {
        console.error('Error', err.message);
        next(err);
    }
}

async function handleLogout(req, res, next) {
    try {
        delete req.session.loggedin
        delete req.session.admin
        res.status(200).json({ message: 'Clear session successfully' })
    } catch (err) {
        console.log(err)
    }
}
async function manageBills(req, res, next) {
    try {
        // Get the customer
        const url = `http://${process.env.HOST}:${process.env.PORT}/host/api`
        let responseBill;
        let bills = null;
        if (req.params.year) {
            if (req.params.month) {
                responseBill = await fetch(url + "/manage-bills/" + req.params.year + "/" + req.params.month)
                bills = await responseBill.json()
                    // console.log(bills)
            }
        }
        // Get groupt room
        const responseRoom = await fetch(url + "/rooms")
        const rooms = await responseRoom.json()
            // console.log(rooms[0])


        let billResult = []
        if (bills != null) {
            for (let i = 0; i < rooms.length; i++) {
                const khu = rooms[i];
                for (let j = 0; j < khu.phong.length; j++) {
                    const phong = khu.phong[j];
                    // console.log(phong.maphong)
                    const bill = bills.bills.find((b) => b.maphong === phong.maphong);
                    const hoadon = bill ? `<a href="/check-bill?input__code=${phong.maphong}">Đã tạo<a>` : "Chưa tạo";
                    const trangthai = bill && bill.thoigianthanhtoan ? "Đã đóng tiền" : "Chưa đóng tiền";
                    billResult.push({
                        maphong: phong.maphong,
                        giathue: phong.giathue,
                        hoadon,
                        trangthai,
                    });
                }
            }
            // console.log(billResult)
        }

        res.render('manage-bills', { layout: 'manager', rooms: billResult, bills: bills, year: req.params.year, month: req.params.month });
    } catch (err) {
        console.error('Error', err.message);
        next(err);
    }
}
async function manageBillsAPI(req, res, next) {
    try {
        let bills = null;
        if (req.params.year) {
            if (req.params.month) {
                bills = await hostServices.getBillByYearMonth(req.params.year, req.params.month);
            }
        }
        res.json({ bills });
    } catch (err) {
        console.error('Error', err.message);
        next(err);
    }
}
async function getHopDongByMaphongAPI(req, res, next) {
    try {
        let result = null;
        if (req.params.maphong) {
            result = await hostServices.getHopDongByMaphong(req.params.maphong);
        }
        res.json({ result });
    } catch (err) {
        console.error('Error', err.message);
        next(err);
    }
}

async function extractBillAPI(req, res, next) {
    try {
        const data = req.body
        data.ngaylaphoadon = new Date().toISOString().slice(0, 10);

        // Lấy 2 chữ số đầu tiên của cccd
        const cccdPrefix = data.cccd.slice(0, 2);
        // Lấy tháng của ngày lập hóa đơn
        const month = data.ngaylaphoadon.slice(5, 7);
        const year = data.ngaylaphoadon.slice(8);

        // Ghép các chuỗi để tạo mã hóa đơn
        data.mahoadon = 'HD' + cccdPrefix + data.maphong + month + year;

        const result = await hostServices.createBill(data);
        // console.log(result.affectedRows);
        if (result.affectedRows > 0) {
            res.status(200).json({ message: 'Post Data to Bill Complete', mahd: data.mahoadon })
        } else {
            res.status(404).json({ message: 'Cannot Post Data to Bill' })
        }


    } catch (err) {
        console.error('Error', err.message);
        next(err);
    }
}

async function extractBill(req, res, next) {
    try {
        const data = req.body
        const response = await fetch(`http://localhost:3000/host/api/extract-bill`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });

        let dataGet
        if (response.status == 200) {
            dataGet = await response.json();
        } else {
            res.json({ message: "Không thêm được dữ liệu hóa đơn vào database" })
        }


        // console.log(data)
        const mp = await hostServices.getHopDong(data.cccd)
        const response2 = await fetch(`http://localhost:3000/host/api/bill-detail/${dataGet.mahd}`)
        const billDetail = await response2.json();

        // console.log(billDetail.result[0])
        res.render('manage-extract-bill', { layout: false, data: billDetail.result[0], hopdong: mp, tienphong: parseFloat(data.tienphong) });

    } catch (err) {
        console.error('Error', err.message);
        next(err);
    }
}

async function getBillDetailAPI(req, res, next) {
    try {
        result = await hostServices.getBillDetail(req.params.mahd);
        res.json({ result });
    } catch (err) {
        console.error('Error', err.message);
        next(err);
    }
}

async function getHopDongThueTro(req, res, next) {
    try {
        result = await hostServices.getHopDongThueTro();
        res.render('ad_manHDTT', { layout: 'manager', data: result });
    } catch (err) {
        console.error('Error', err.message);
        next(err);
    }
}


async function hidenHD(req, res, next) {
    try {
        const id = req.body.id
        const status = await hostServices.hidenHD(id)
        if (status > 0) {
            req.session.flash = { message: `Đã ẩn hợp đồng ${id}` }
            res.status(200).json({ message: "hidden successfully", status: status })
        } else {
            res.status(400).json({ message: "hidden fail", status: status })
        }
    } catch (err) {
        console.error('Error', err.message);
        next(err);
    }
}

async function getDetailHDTTById(req, res, next) {
    try {
        var data = null
        if (req.params.id) {
            data = await hostServices.getDetailHDTTById(req.params.id)
        }
        const inf = await hostServices.getInfoById(req.params.id)
        res.render('ad_hopdong', { layout: false, data: data[0], inf: inf[0] });
    } catch (err) {
        console.error('Error', err.message);
        next(err);
    }
}

async function indexHDTT(req, res, next) {
    try {
        res.render('createHD', { layout: 'manager' })
    } catch (err) {
        console.error('Error', err.message);
        next(err);
    }
}

async function createHDTT(req, res, next) {
    try {
        const status = await hostServices.createHDTT(req.body)
        if (status.affectedRows > 0) {
            req.session.flash = { message: "Thêm hợp đồng thành công" }
            res.redirect('/host/hop-dong-thue-tro')
        } else {
            req.session.flash = { message: "Hiện bạn chưa có hóa đơn nào" }
            res.redirect('/')
        }
        //    res.render('createHD',{layout: 'manager'})
    } catch (err) {
        console.error('Error', err.message);
        next(err);
    }
}

async function indexForgot(req, res, next) {
    try {
        res.render('forgot_pass')
    } catch (err) {
        console.error('Error', err.message);
        next(err);
    }
}

async function sendLinkReset(req, res, next) {
    if (!req.body.email) {
        res.redirect('/forgot-password')
    } else {
        const user = await hostServices.findUserByEmail(req.body.email)
        if (!user) {
            res.redirect('/forgot-password')
        } else {
            mailer.sendMail(user[0].email, "Khôi phục mật khẩu", `<a href="${process.env.APP_URL}/reset-password/${user[0].email}"> Nhấn vào đây để đặt lại mật khẩu mới</a>`)
            req.session.flash = { message: 'Vui lòng kiểm tra email để khôi phục mật khẩu' }
            res.redirect('/')
        }
    }
}

async function indexCreateAccount(req, res, next) {
    try {
        res.render('register')
    } catch (err) {
        console.error('Error', err.message);
        next(err);
    }
}

async function createAccount(req, res, next) {
    try {
        if (req.body) {
            const status = await hostServices.createAccount(req.body)
            console.log(status)
            if (status > 0) {
                req.session.flash = { message: "Tạo tài khoản thành công" }
                res.redirect('/host')
            } else {
                req.session.flash = { message: "Tạo tài khoản thất bại" }
                res.redirect('/host/create-account')
            }
        }
    } catch (err) {
        console.error('Error', err.message);
        next(err);
    }
}

async function getSendAnnouncementPage(req, res, next) {
    try {
        let roomMail = await hostServices.getRoomMail();
        roomMail.sort((a, b) => a.maphong.localeCompare(b.maphong));
        // console.log(roomMail);
        res.render('send-announcement', { layout: 'manager', roomMail: roomMail });

    } catch (err) {
        console.error('Error', err.message);
        next(err);
    }
}

async function sendAnnouncement(req, res, next) {
    try {
        // console.log(req.body)
        const { to, subject, content } = req.body
        if (to == "all") {
            let roomMail = await hostServices.getRoomMail();
            roomMail.forEach(function(data) {
                mailer.sendMail(data.email, subject, content);
            });
        } else {
            mailer.sendMail(to, subject, content);
        }
        req.session.flash = { message: `Gửi thông báo thành công` }
        res.redirect('/host/send-announcement');
    } catch (err) {
        console.error('Error', err.message);
        next(err);
    }
}

async function completeBill(req, res, next) {
    try {
        const date = new Date();
        const result = await hostServices.completeBill(req.params.maphong, date);
        res.redirect('/host/manage-bills/' + date.getFullYear() + '/' + (date.getMonth() + 1));
    } catch (err) {
        console.error('Error', err.message);
        next(err);
    }
}

module.exports = {
    index,
    manageCustomer,
    managerTRRF,
    managerTRRFAPI,
    getDetailById,
    cofirmed,
    hide,
    getInfo,
    manageCustomerAPI,
    getRoomsAPI,
    deleteCustomerAPI,
    managerGHTT,
    managerGHTTAPI,
    updateCustomerAPI,
    manResponseAPI,
    manResponse,
    sendLinkResponse,
    hidenResponse,
    createCustomerAPI,
    handleLogout,
    manageBills,
    manageBillsAPI,
    getHopDongByMaphongAPI,
    extractBillAPI,
    extractBill,
    getHopDongThueTro,
    hidenHD,
    getDetailHDTTById,
    indexHDTT,
    createHDTT,
    getBillDetailAPI,
    indexForgot,
    sendLinkReset,
    indexCreateAccount,
    createAccount,
    getSendAnnouncementPage,
    sendAnnouncement,
    completeBill
};