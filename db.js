var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'seoultakju.c1s9tr2yqxmc.ap-northeast-1.rds.amazonaws.com',
  user: 'root',
  password: 'giveme1234',
  database: 'seoultakju',
  dateStrings: 'date',
  multipleStatements: true,
});

function getMemo(callback) {
  connection.query('SELECT * FROM noticeTable ORDER BY id DESC', (err, rows, fields) => {
    if (err) throw err;
    callback(rows);
  });
}

function insertMemo(title, content, callback) {
  connection.query(`INSERT INTO noticeTable(create_time,title,content) VALUES (NOW(),'${title}','${content}')`, err => {
    if (err) throw err;
    callback();
  });
}

function updateMemos(id, title, content, callback) {
  connection.query(`UPDATE noticeTable SET create_time = NOW(), title= '${title}', content= '${content}' WHERE id = ${id}`, err => {
    if (err) throw err;
    callback();
  });
}

function getMemoById(id, callback) {
  connection.query(`SELECT * FROM noticeTable WHERE id = ${id}`, (err, row) => {
    if (err) throw err;
    callback(row);
  });
}

function deleteById(id, callback) {
  connection.query(`DELETE FROM noticeTable WHERE id = ${id}`, err => {
    if (err) throw err;
    callback();
  });
}

function insertJoin(userId, userName, userPw, userPwC, userMail, userNumber, callback) {
  connection.query(`INSERT INTO userList(userId,create_time,userName,userPw,userPwC,userMail,userNumber) VALUES ('${userId}',NOW(),'${userName}','${userPw}','${userPwC}','${userMail}','${userNumber}')`, err => {
    if (err) throw err;
    callback();
  });
}

function checkLogin(userId, userPw, callback) {
  connection.query(`SELECT * FROM userList WHERE userId = '${userId}' and userPw = '${userPw}'`, (err, results) => {
    if (err) throw err;
    callback(results);
  });
}

function getMainNotice(callback) {
  connection.query('SELECT * FROM noticeTable ORDER BY id DESC', (err, rows, fields) => {
    if (err) throw err;
    callback(rows);
  });
}

function getNews(callback) {
  connection.query('SELECT * FROM newsTable ORDER BY id DESC', (err, rows, fields) => {
    if (err) throw err;
    callback(rows);
  });
}

function insertNews(img, title, content, callback) {
  connection.query(`INSERT INTO newsTable(create_time,img,title,content) VALUE(NOW(),'${img}','${title}','${content}')`, err => {
    if (err) throw err;
    callback();
  });
}

function updateNews(id, img, title, content, callback) {
  connection.query(`UPDATE newsTable SET create_time = NOW() , img = '${img}' , title = '${title}' , content = '${content}' WHERE id = ${id}`, err => {
    if (err) throw err;
    callback();
  });
}

function getNewsById(id, callback) {
  connection.query(`SELECT * FROM newsTable WHERE id = ${id}`, (err, row) => {
    if (err) throw err;
    callback(row);
  });
}

function deleteNews(id, callback) {
  connection.query(`DELETE FROM newsTable WHERE id = ${id}`, err => {
    if (err) throw err;
    callback();
  });
}

function welcomeUser(userId, callback) {
  connection.query(`SELECT * FROM userList where userId='${userId}'`, (err, row, fields) => {
    if (err) throw err;
    callback(row);
  });
}

module.exports = {
  getMemo,
  insertMemo,
  updateMemos,
  getMemoById,
  deleteById,
  insertJoin,
  checkLogin,
  getMainNotice,
  getNews,
  insertNews,
  updateNews,
  getNewsById,
  deleteNews,
  welcomeUser,
};
