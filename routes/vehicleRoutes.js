const express = require('express');
const router = express.Router();
const {getVehicles,createTwoWheeler,updateVehicle,deleteVehicle} = require('../controller/2wheeler-controller');

router.route('/get').get(getVehicles);
router.route('/add').post(createTwoWheeler);
router.route('/update/:id').patch(updateVehicle);
router.route('/delete/:id').delete(deleteVehicle);


module.exports = router;