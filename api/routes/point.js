var express = require("express");
 var router = express.Router();

 var pointController = require("../controllers/pointController");

 // Get route
 router.get("/point", pointController.getPoints);

 // POST route to add points
 router.post(
     "/point",
     pointController.validate('addPoints'),
     pointController.addPoints
 );

 // POST route to spend points
 router.post("/point/spend", pointController.spendPoints);

 module.exports = router;