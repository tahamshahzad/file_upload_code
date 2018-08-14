var express = require('express');
const multer = require('multer');

const upload = multer({ dest : 'uploads/' });

var router = express.Router();

/* GET home page. */
router.post('/', upload.single("fileNew"), function(req, res, next) {
   res.json("file uploadd");
});

module.exports = router;
