const express = require('express');
const router = express.Router();
const sampleController = require('../controllers/sample.controller');

router.route('/:myparam').get(sampleController.get);

router.route('/').get(sampleController.post);

module.exports = router;
