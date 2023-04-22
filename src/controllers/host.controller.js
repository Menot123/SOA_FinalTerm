// Define your controllers here
const homeServices = require('../services/home.service')


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


module.exports = {
    index,
    manageCustomer,
};