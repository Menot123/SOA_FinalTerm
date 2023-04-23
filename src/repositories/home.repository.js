const dbClient = require('./db_client');

async function createTRRF(owner, son) {
    const record = await dbClient.query(
        `INSERT INTO dondangkytamtru (diachitamtru, hoten, ngaysinh, gioitinh,cccd, noidungdenghi,sodienthoai
            ,noithuongtru, noiohientai,email,nghenghiep, relationship,nguoithan, tenchutro, maphong) VALUES (?, ?, ?, ?,?, ?, ?, ?,?, ?, ?, ?,?,?,?)`,
             [owner.tempAdd, owner.name, owner.date, owner.gender, owner.code, owner.message, owner.phone
            ,owner.oldAdd, owner.nowAdd, owner.email, owner.work,owner.relationship,son,"Nguyễn Văn Tùng",owner.code__room]
    );
    return record.insertId;
};

async function send(id) {
    const record = await dbClient.query(
        `UPDATE dondangkytamtru set trangthai = ? WHERE cccd = ?`,["Chưa tải xuống",id]
    );
    return record.changedRows
};

async function getInfoTRRF(id) {
    const record = await dbClient.query(
        `select * from dondangkytamtru where cccd = ?`,[id]
    );
    return record
};

async function sendResponseAPI(res) {
    const record = await dbClient.query(
        `insert into phanhoi (nguoigui, maphong, email, content, chude) values(?,?,?,?,?)`,[res.name,res.room, res.email, res.message, res.subject]
    );
    return record.insertId
};

async function handleLogin(phone, password) {
    const record = await dbClient.query(
        `select * from taikhoan where sodienthoai = ? && matkhau = ?`,[phone, password]
    );
    return record
};

module.exports = {
    createTRRF, send, getInfoTRRF, sendResponseAPI, handleLogin, 
}