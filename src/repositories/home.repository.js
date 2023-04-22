const dbClient = require('./db_client');

async function createTRRF(owner, son) {
    const record = await dbClient.query(
        `INSERT INTO dondangkytamtru (diachitamtru, hoten, ngaysinh, gioitinh,cccd, noidungdenghi,sodienthoai
            ,noithuongtru, noiohientai,email,nghenghiep, relationship,nguoithan, tenchutro) VALUES (?, ?, ?, ?,?, ?, ?, ?,?, ?, ?, ?,?,?)`,
             [owner.tempAdd, owner.name, owner.date, owner.gender, owner.code, owner.message, owner.phone
            ,owner.oldAdd, owner.nowAdd, owner.email, owner.work,owner.relationship,son,"Nguyễn Văn Tùng"]
    );
    return record.insertId;
};


module.exports = {
    createTRRF,
}