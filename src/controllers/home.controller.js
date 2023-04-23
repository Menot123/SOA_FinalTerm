// Define your controllers here
const homeServices = require('../services/home.service')
const hostServices = require('../services/host.service')




async function index(req, res, next) {
    try {
        res.render('homepage');
    } catch (err) {
        console.error('Error', err.message);
        next(err);
    }
}

async function template(req, res, next) {
    try {
        var arr = []
        if (req.body.name1 != "" && req.body.name2 == undefined) {
            let obj = {
                stt: req.body.stt,
                name1: req.body.name1,
                birth1: req.body.birth1,
                gender1: req.body.gender1,
                work1: req.body.work1,
                rel1: req.body.rel1,
                relb1: req.body.relb1
            }
            arr.push(obj)
        } else if (req.body.name2 != "" && req.body.name2 != "" && req.body.name3 == undefined) {
            let obj1 = {
                stt: req.body.stt,
                name1: req.body.name1,
                birth1: req.body.birth1,
                gender1: req.body.gender1,
                code1: req.body.code1,
                work1: req.body.work1,
                rel1: req.body.rel1,
                relb1: req.body.relb1
            }

            let obj2 = {
                stt: req.body.stt2,
                name1: req.body.name2,
                birth1: req.body.birth2,
                gender1: req.body.gender2,
                code1: req.body.code2,
                work1: req.body.work2,
                rel1: req.body.rel2,
                relb1: req.body.relb2
            }
            arr.push(obj1)
            arr.push(obj2)
        } else if (req.body.name3 != undefined && req.body.name3 != "") {
            let obj1 = {
                stt: req.body.stt,
                name1: req.body.name1,
                birth1: req.body.birth1,
                gender1: req.body.gender1,
                code1: req.body.code1,
                work1: req.body.work1,
                rel1: req.body.rel1,
                relb1: req.body.relb1
            }

            let obj2 = {
                stt: req.body.stt2,
                name1: req.body.name2,
                birth1: req.body.birth2,
                gender1: req.body.gender2,
                code1: req.body.code2,
                work1: req.body.work2,
                rel1: req.body.rel2,
                relb1: req.body.relb2
            }

            let obj3 = {
                stt: req.body.stt3,
                name1: req.body.name3,
                birth1: req.body.birth3,
                gender1: req.body.gender3,
                code1: req.body.code3,
                work1: req.body.work3,
                rel1: req.body.rel3,
                relb1: req.body.relb3
            }
            arr.push(obj1)
            arr.push(obj2)
            arr.push(obj3)
        } else {
            let obj1 = {
                stt: req.body.stt,
                name1: req.body.name1,
                birth1: req.body.birth1,
                gender1: req.body.gender1,
                code1: req.body.code1,
                work1: req.body.work1,
                rel1: req.body.rel1,
                relb1: req.body.relb1
            }

            let obj2 = {
                stt: req.body.stt2,
                name1: req.body.name2,
                birth1: req.body.birth2,
                gender1: req.body.gender2,
                code1: req.body.code2,
                work1: req.body.work2,
                rel1: req.body.rel2,
                relb1: req.body.relb2
            }

            let obj3 = {
                stt: req.body.stt3,
                name1: req.body.name3,
                birth1: req.body.birth3,
                gender1: req.body.gender3,
                code1: req.body.code3,
                work1: req.body.work3,
                rel1: req.body.rel3,
                relb1: req.body.relb3
            }

            let obj4 = {
                stt: req.body.stt4,
                name1: req.body.name4,
                birth1: req.body.birth4,
                gender1: req.body.gender4,
                code1: req.body.code4,
                work1: req.body.work4,
                rel1: req.body.rel4,
                relb1: req.body.relb4
            }
            arr.push(obj1)
            arr.push(obj2)
            arr.push(obj3)
            arr.push(obj4)
        }
        const jsonString = JSON.stringify(arr);
        // const dataFromDatabase = JSON.parse(jsonString);
        const data = await homeServices.createTRRF(req.body, jsonString)
        res.render('maudon', { layout: false, data: req.body, array: arr });
    } catch (err) {
        console.error('Error', err.message);
        next(err);
    }
}

async function register(req, res, next) {
    try {
        res.render('registerForm');
    } catch (err) {
        console.error('Error', err.message);
        next(err);
    }
}

async function send(req, res, next) {
    try {
        const status = await homeServices.send(req.body.id)
        if (status > 0) {
            res.status(200).json({ message: "Send TRRF successfully", status: status })
        } else {
            res.status(400).json({ message: "Send TRRF fail", status: status })
        }
    } catch (err) {
        console.error('Error', err.message);
        next(err);
    }
}

async function renewal(req, res, next) {
    try {
        res.render('renewal');
    } catch (err) {
        console.error('Error', err.message);
        next(err);
    }
}

async function getInfoTRRF(req, res, next) {
    try {
        if (req.params.id) {
            const status = await homeServices.getInfoTRRF(req.params.id)
            if (status.length > 0) {
                res.status(200).json({ message: "Get info TRRF successfully", status: status })
            } else {
                res.status(400).json({ message: "Get info TRRF fail", status: status })
            }
        }

    } catch (err) {
        console.error('Error', err.message);
        next(err);
    }
}

async function indexResponse(req, res, next) {
    try {
        res.render('response');
    } catch (err) {
        console.error('Error', err.message);
        next(err);
    }
}

async function sendResponseAPI(req, res, next) {
    try {
        if (req.body.obj) {
            const status = await homeServices.sendResponseAPI(req.body.obj)
            if (status > 0) {
                res.status(200).json({ message: "Send response successfully", status: status })
            } else {
                res.status(400).json({ message: "Send response fail", status: status })
            }
        }
    } catch (err) {
        console.error('Error', err.message);
        next(err);
    }
}

async function sendResponse(req, res, next) {
    try {
        var data = null
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                obj: req.body
            })
        };
        const response = await fetch('http://localhost:3000/api/send-response', options);
        data = await response.json();
        if (data.status > 0) {
            req.session.flash = { message: "Gửi phản hồi thành công!" }
            res.redirect('/')
        } else {
            req.session.flash = { message: "Có lỗi xảy ra vui lòng thử lại" }
            res.redirect('/phan-hoi')
        }
    } catch (err) {
        console.error('Error', err.message);
        next(err);
    }
}

async function indexLogin(req, res, next) {
    try {
        res.render('login');
    } catch (err) {
        console.error('Error', err.message);
        next(err);
    }
}

async function handleLoginAPI(req, res, next) {
    try {
        if (req.body.obj) {
            const status = await homeServices.handleLogin(req.body.obj.phone, req.body.obj.password)
            if (status.length > 0) {
                res.status(200).json({ message: "login successful", status: 1, role: status[0].role })
            } else {
                res.status(404).json({ message: "login failed", status: 0 })
            }
        } else {
            res.status(400).json({ message: "something wrong", status: 0 })
        }
    } catch (err) {
        console.error('Error', err.message);
        next(err);
    }
}

async function handleLogin(req, res, next) {
    try {
        var data = null
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                obj: req.body
            })
        };
        const response = await fetch('http://localhost:3000/api/login', options);
        data = await response.json();
        if (data.status > 0) {
            if (data.role == 1) {
                req.session.loggedin = true
                req.session.admin = true
            } else {
                req.session.loggedin = true
            }
            req.session.flash = { message: "Đăng nhập thành công" }
            res.redirect('/host')
        } else {
            req.session.flash = { message: "Sai tên đăng nhập hoặc mật khẩu vui lòng thử lại" }
            res.redirect('/login')
        }
    } catch (err) {
        console.error('Error', err.message);
        next(err);
    }
}

async function handleLoginAPI(req, res, next) {
    try {
        if (req.body.obj) {
            const status = await homeServices.handleLogin(req.body.obj.phone, req.body.obj.password)
            if (status.length > 0) {
                res.status(200).json({ message: "login successful", status: 1, role: status[0].role })
            } else {
                res.status(404).json({ message: "login failed", status: 0 })
            }
        } else {
            res.status(400).json({ message: "something wrong", status: 0 })
        }
    } catch (err) {
        console.error('Error', err.message);
        next(err);
    }
}

async function checkBill(req, res, next) {
    try {
        if (req.query.input__code) {
            const mp = await hostServices.getHopDong(req.query.input__code)
            const hd = await hostServices.getHDTTByMaPhong(req.query.input__code)
            const response2 = await fetch(`http://localhost:3000/host/api/bill-detail/${hd.mahopdong}`)
            const billDetail = await response2.json();
            const status = await homeServices.getBillById(req.query.input__code)
            if (status.length > 0) {
                res.render('manage-extract-bill', { layout: false, data:status[0], hopdong: hd });
            }
        }
    } catch (err) {
        console.error('Error', err.message);
        next(err);
    }
}

async function resetPassword(req, res, next) {
    res.render('reset_password', { email: req.params.email })
}

async function changePass(req, res, next) {
    var message = "Khôi phục mật khẩu thất bại!"
    if (req.body.password && req.body.email) {
        const result = await homeServices.changePass(req.body.password, req.body.email)
        if (result > 0) {
            message = "Khôi phục mật khẩu thành công!"
        }
    }
    req.session.flash = { message: message }
    res.redirect('/login')

}

module.exports = {
    index,
    template,
    register,
    send,
    renewal,
    getInfoTRRF,
    indexResponse,
    sendResponseAPI,
    sendResponse, indexLogin, handleLogin, handleLoginAPI, checkBill, resetPassword,changePass, 
};