const router = require("express").Router();
const authenticate = require("../authenticate");

const {
  createMess,
  updateMess,
  removeMess,
  getAllInfo,
} = require("../Controllers/managerControllers/messInfoController");

router.post("/mess/create", createMess);

router.get("/mess", getAllInfo);

router.put("/mess/:messId", updateMess);

router.delete("/mess/:messId", removeMess);

module.exports = router;
