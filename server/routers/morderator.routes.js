const router = require("express").Router();
const authenticate = require("../authenticate");

const {
  createApartment,
  allApartment,
  updateApartment,
  addApartment,
  removeApartment,
} = require("../Controllers/moderatorControllers/apartmentController");

router.post("/createfloors", authenticate, createApartment); ////

router.get(`/apartments`, authenticate, allApartment); ////

router.post("/addApartment", authenticate, addApartment); ////

router.post("/updateApartment", authenticate, updateApartment); ///

router.delete("/:apartmentId", authenticate, removeApartment); ////

module.exports = router;
