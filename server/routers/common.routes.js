const router = require("express").Router();
const authenticate = require("../authenticate");
const {
  createMeal,
  getDailyMeal,
  getMonthlyMealRate,
} = require("../Controllers/commonControllers/mealController");

router.post("/meal/create", createMeal);

router.get("/dailyMeal", getDailyMeal);

router.get("/monthlyMealRate", getMonthlyMealRate);

// router.put("/mess/:messId", updateMess);

// router.delete("/mess/:messId", removeMess);

// router.post("/bill/create", createBill);

// router.get("/bill/:month/:year", getMonthlyBill);

// router.get("/bill/budget", getTotalMealBudget);

// router.post("/bill/update", updateBill);

// router.post("/expense/create", createExpense);

// router.get("/expense/:month/:year", getMonthlyExpense);

// router.post("/expense/update", updateExpense);

// router.delete("/expense/:expId", removeExpense);

module.exports = router;
