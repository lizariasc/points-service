const router = require('express').Router();

const {
    pointController
} = require("../controllers/point-controller");

 // Get route
 router.route('/').get(pointController.getPoints);

 // POST route to add points
 router.route('/').post(pointController.validate('addPoints'), pointController.addPoints);

 // POST route to spend points
 router.route('/spend').post(pointController.spendPoints);

 module.exports = router;