const express = require('express');
const router = express.Router();
const sampleController = require('../controllers/sample.controller');

router.route('/:myparam').get(sampleController.getFunction);

router.route('/').get(sampleController.postFunction);

module.exports = router;
