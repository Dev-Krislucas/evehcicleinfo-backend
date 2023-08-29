const express = require('express');
const {getSpecificVehicle} = require('../controller/user-controller');

const router = express.Router();

router.route('/:id').get(getSpecificVehicle);





module.exports = router;