const express = require("express");
const router = express.Router();

const controller = require("./controller/routeHandler");

router.route("/getAll").get(controller.getallProduct);
router.route("/addProduct").post(controller.addProduct);

module.exports = router;
