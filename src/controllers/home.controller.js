// Define your controllers here
const homeServices = require('../services/home.service')


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
        if(req.body.name1 != "" && req.body.name2 == undefined) {
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
        } else if(req.body.name2 != "" && req.body.name2 != "" && req.body.name3 == undefined) {
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
        res.render('maudon', {layout: false, data: req.body, array: arr});
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
        const status =await homeServices.send(req.body.id)
        if(status > 0) {
            res.status(200).json({message: "Send TRRF successfully", status: status})
        } else {
            res.status(400).json({message: "Send TRRF fail", status: status})
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

module.exports = {
    index,
    template,
    register,
    send,
    renewal,
};