const express = require("express");
const {
  getItemController,
  addItemController
} = require("./../controllers/itemController");

const router = express.Router();

//routes
//Method - get
router.get("/get-item", getItemController);

//MEthod - POST
router.post("/add-item", addItemController);



module.exports = router;
