const router = require("express").Router();
const authenticate = require("../authenticate");
const {
  createExpense,
  getMonthlyExpense,
  updateExpense,
  removeExpense,
  getMonthlyTotalExpense,
} = require("../Controllers/managerControllers/expenseController");

const {
  createMess,
  updateMess,
  removeMess,
  getAllInfo,
} = require("../Controllers/managerControllers/messInfoController");
const {
  createBill,
  getMonthlyBill,
  getTotalMealBudget,
  updateBill,
} = require("../Controllers/managerControllers/userBillController");

router.post("/mess/create", createMess);

router.get("/mess", getAllInfo);

router.put("/mess/:messId", updateMess);

router.delete("/mess/:messId", removeMess);

router.post("/bill/create", createBill);

router.get("/bill/:month/:year", getMonthlyBill);

router.get("/bill/budget", getTotalMealBudget);

router.post("/bill/update", updateBill);

router.post("/expense/create", createExpense);

router.get("/expense/:month/:year", getMonthlyExpense);

router.get("/totalExpense/:month/:year", getMonthlyTotalExpense);

router.post("/expense/update", updateExpense);

router.delete("/expense/:expId", removeExpense);

module.exports = router;
