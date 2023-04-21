const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./src/routes');
const handlebars = require('express-handlebars');
const path = require('path');
const Handlebars = require('handlebars');
const sessions = require('express-session');
const flashMessage = require('./src/middlewares/flash_message');
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';
const { jsPDF } = require("jspdf");

app.use(express.static(path.join(__dirname, 'src', 'public')));

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(sessions({
    secret: "my_secret_key",
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    resave: false
}));

app.use(flashMessage);


Handlebars.registerHelper('multiply', function(a, b) {
    return a * b;
});

Handlebars.registerHelper('totalPrice', function(foods) {
    var total = foods.reduce(function(sum, food) {
        return sum + (food.gia * food.soluong);
    }, 0);
    return total;
});

Handlebars.registerHelper('formatMoney', function(money) {
    return money.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
});

Handlebars.registerHelper('formatDateTime', function(datetime) {
    const date = new Date(datetime);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = (date.getHours()).toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return formattedDate;
});


app.engine(

    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: {
            eq: function(status, input) {
                if (status === input) {
                    return new Handlebars.SafeString('<button class="btn" data-id =' + this.maban + '>' + this.maban + '</button>');
                } else {
                    return new Handlebars.SafeString('<button class="btn btn-disable" disabled>' + this.maban + '</button>');
                }
            },
            isEmpty: function(trangthai) {
                if (trangthai == "Đã bán hết") return "";
                else return "checked"
            },
            isNotHave: function(trangthai) {
                if (trangthai == "Sẵn có") return false;
                else return true;
            }
        }
    }),
);



app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src', 'views'));

app.use('/', router);

/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ 'message': err.message });
    return;
});


app.listen(port, host, () => {
    console.log(`Example app listening at http://${host}:${port}`)
});