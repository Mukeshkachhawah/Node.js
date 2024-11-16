const express = require("express");
const userController = require("../controller/userController");
const router = express.Router();

router.get("/getAllUser", userController.getAllUser);
router.get("/deleteOne/:id", userController.deleteUser);
router.post("/createUser", userController.createUser);
router.put("/updateUser/:id" , userController.updateUser)
router.patch("/createAndUpdateUser" , userController.createAndUpdateUser)

module.exports = router;
