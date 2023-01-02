const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const {send} = require('process');
const db = require('./../db.js');
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'public/uploads');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: {
    fileSize: 1024 * 1024 * 10,
  },
});

router.get('/', (req, res) => {
  db.getMainNotice(rows => {
    res.render('index', {
      rows: rows,
      fullpages: true,
    });
  });
});

router.get('/aboutUs', (req, res) => {
  res.render('aboutUs', {
    fullpages: false,
  });
});

router.get('/join', (req, res) => {
  res.render('join', {
    fullpages: false,
  });
});

router.get('/welcome', (req, res) => {
  let userId = req.query.userId;
  db.welcomeUser(userId, row => {
    res.render('welcome', {
      row: row[0],
      fullpages: false,
    });
  });
});

router.post('/joinUs', (req, res) => {
  let param = JSON.parse(JSON.stringify(req.body));
  let userId = param['userId'];
  let userName = param['userName'];
  let userPw = param['userPw'];
  let userPwC = param['userPwC'];
  let userMail = param['userMail'];
  let userNumber = param['userNumber'];
  db.insertJoin(userId, userName, userPw, userPwC, userMail, userNumber, () => {
    res.render('welcome', {userId: userId, fullpages: false});
  });
});

router.get('/login', (req, res) => {
  res.render('login', {
    fullpages: false,
  });
});

router.post('/loginS', (req, res) => {
  let param = JSON.parse(JSON.stringify(req.body));
  let userId = param['userId'];
  let userPw = param['userPw'];
  db.checkLogin(userId, userPw, results => {
    if (results.length > 0) {
      res.redirect('/');
    } else {
      res.send(`<script>alert("로그인 정보가 일치하지 않습니다."); document.location.href="/login";</script>`);
    }
  });
});

router.get('/manu', (req, res) => {
  res.render('Manufacture', {
    fullpages: false,
  });
});

router.get('/edit', (req, res) => {
  let id = req.query.id;
  db.getMemoById(id, row => {
    res.render('notice_edit', {
      row: row[0],
      fullpages: false,
    });
  });
});

router.post('/edit', (req, res) => {
  let param = JSON.parse(JSON.stringify(req.body));
  let id = param['id'];
  let title = param['title'];
  let content = param['content'];
  db.updateMemos(id, title, content, () => {
    res.redirect('notice');
  });
});

router.get('/noticeDetail', (req, res) => {
  let id = req.query.id;
  db.getMemoById(id, row => {
    res.render('notice_page', {
      row: row[0],
      fullpages: false,
    });
  });
});

router.get('/noticeWrite', (req, res) => {
  res.render('notice_write', {
    fullpages: false,
  });
});

router.post('/noticeWrite', (req, res, next) => {
  let param = JSON.parse(JSON.stringify(req.body));
  let title = param['title'];
  let content = param['content'];
  db.insertMemo(title, content, () => {
    res.redirect('/notice');
  });
});

router.get('/notice', (req, res) => {
  db.getMemo(rows => {
    res.render('notice', {
      rows: rows,
      fullpages: false,
    });
  });
});

router.get('/delete', (req, res) => {
  let id = req.query.id;
  console.log(id);
  db.deleteById(id, () => {
    res.redirect('notice');
  });
});

router.get('/productDetail', (req, res) => {
  res.render('product_detail', {
    fullpages: false,
  });
});

router.get('/news', (req, res) => {
  let img = req.query.img;
  db.getNews(rows => {
    res.render('news', {fullpages: false, rows: rows});
  });
});

router.get('/newsWrite', (req, res) => {
  res.render('news_write', {fullpages: false});
});

router.post('/newsWrite', upload.single('img'), (req, res) => {
  let param = JSON.parse(JSON.stringify(req.body));
  let img = 'uploads/' + req.file.filename;
  let title = param['title'];
  let content = param['content'];
  db.insertNews(img, title, content, () => {
    res.redirect('/news');
  });
});

router.get('/updateNews', (req, res) => {
  let id = req.query.id;
  db.getNewsById(id, row => {
    res.render('news_edit', {row: row[0], fullpages: false});
  });
});

router.post('/newsUpdate', upload.single('img'), (req, res) => {
  let param = JSON.parse(JSON.stringify(req.body));
  let id = param['id'];
  let img = 'uploads/' + req.file.filename;
  let title = param['title'];
  let content = param['content'];
  db.updateNews(id, img, title, content, () => {
    res.redirect('/news');
  });
});

router.get('/deleteNews', (req, res) => {
  let id = req.query.id;
  db.deleteNews(id, () => {
    res.redirect('/news');
  });
});

router.get('/detailNews', (req, res) => {
  let id = req.query.id;
  db.getNewsById(id, row => {
    res.render('news_detail', {row: row[0], fullpages: false});
  });
});

try {
  fs.readFileSync('public/uploads/', {encoding: 'utf8', flag: 'r'});
} catch (err) {
  if (!fs.existsSync('public/uploads')) fs.mkdirSync('public/uploads');
}

module.exports = router;
