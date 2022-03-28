const MealModel = require("../../Database/Model/MealModel");
const ExpenseModel = require("../../Database/Model/ExpenseModel");
const UserBillModel = require("../../Database/Model/UserBillModel");

const { serverError, resourceError } = require("../../utils/error");

module.exports = {
  createMeal(req, res) {
    const { _id, name, messId } = req.user;

    let { morning, day, night } = req.body;
    // const messId = "111222";
    let userId = _id;
    let date = new Date();
    let objData = new Object({ userId, name, morning, day, night, date });
    let mealData = new MealModel({
      _id: messId,
      userMeal: objData,
    });
    MealModel.findOne({ _id: messId })
      .then((mess) => {
        if (mess) {
          let isMealCreated = false;
          mess.userMeal.map((meal) => {
            if (
              meal.userId === objData.userId &&
              new Date(meal.date).getMonth() + 1 ===
                new Date(objData.date).getMonth() + 1 &&
              new Date(meal.date).getFullYear() ===
                new Date(objData.date).getFullYear() &&
              new Date(meal.date).getDate() === new Date(objData.date).getDate()
            ) {
              return (isMealCreated = true);
            }
          });
          if (isMealCreated) {
            return resourceError(
              res,
              "Meal already created..Try again tommorow"
            );
          } else {
            mess.userMeal.push(objData);
            mess
              .save()
              .then((response) => {
                res.status(201).json({
                  message: "Meal Created Successfully",
                });
              })
              .catch((error) => serverError(res, error));
          }
        } else {
          mealData
            .save()
            .then((response) => {
              res.status(201).json({
                message: "Meal Created Successfully",
              });
            })
            .catch((error) => serverError(res, error));
        }
      })
      .catch((error) => {
        serverError(res, error);
      });
  },

  getMonthlyAllMeal(req, res) {
    const { messId } = req.user;
    // const messId = "11122233";
    MealModel.findOne({ _id: messId })
      .then((result) => {
        if (result !== null) {
          if (result.userMeal.length !== 0) {
            let monthlyAllMeal = [];
            result.userMeal.filter((i) => {
              if (
                new Date(i.date).getMonth() + 1 ===
                  parseInt(req.params.month) &&
                // new Date().getMonth() + 1 &&
                //
                new Date(i.date).getFullYear() === parseInt(req.params.year)
                // new Date().getFullYear()
              ) {
                return monthlyAllMeal.push(i);
              }
            });

            res.status(200).json(monthlyAllMeal);
          } else {
            return resourceError(res, "No data Found");
          }
        } else {
          return resourceError(res, "No data found");
        }
      })
      .catch((error) => serverError(res, error));
  },

  getUserMontlyMeal(req, res) {
    const { _id, messId } = req.user;
    // const messId = "11122233";
    const userId = _id;
    MealModel.findOne({ _id: messId })
      .then((result) => {
        if (result !== null) {
          if (result.userMeal.length !== 0) {
            let monthlyMeal = [];
            result.userMeal.filter((i) => {
              if (
                i.userId === userId &&
                new Date(i.date).getMonth() + 1 ===
                  //   parseInt(req.params.month)
                  new Date().getMonth() + 1 &&
                //
                new Date(i.date).getFullYear() ===
                  // parseInt(req.params.year)
                  new Date().getFullYear()
              ) {
                return monthlyMeal.push(i);
              }
            });

            res.status(200).json(monthlyMeal);
          } else {
            return resourceError(res, "No data Found");
          }
        } else {
          return resourceError(res, "No data found");
        }
      })
      .catch((error) => serverError(res, error));
  },

  getMonthlyUserBill(req, res) {
    // let { _id, role, homeId, homeOwner } = req.user;
    // const messId = "11122233";
    const { _id, messId } = req.user;
    let userId = _id;
    UserBillModel.findOne({ _id: messId })
      .then((result) => {
        if (result != null) {
          if (result.userBill.length != 0) {
            let userBill = {};

            result.userBill.filter((i) => {
              if (
                i.userId === userId &&
                new Date(i.date).getMonth() + 1 === new Date().getMonth() + 1 &&
                new Date(i.date).getFullYear() === new Date().getFullYear()
              ) {
                return (userBill = i);
              }
            });
            // result.userBill.filter((i) => {
            //   if (
            //     new Date(i.date).getMonth() + 1 ===
            //       parseInt(req.params.month) &&
            //     new Date(i.date).getFullYear() === parseInt(req.params.year)
            //   ) {
            //     return monthlyData.push(i);
            //   }
            // });

            res.status(200).json(userBill);
          } else {
            return resourceError(res, "No Bill Found");
          }
        } else {
          return resourceError(res, "No bill found");
        }
      })
      .catch((error) => serverError(res, error));
  },

  getDailyMeal(req, res) {
    // let { _id, role, homeId, homeOwner } = req.user;
    // const messId = "11122233";
    const { messId } = req.user;
    MealModel.findOne({ _id: messId })
      .then((result) => {
        if (result !== null) {
          if (result.userMeal.length !== 0) {
            let dailyData = [];
            result.userMeal.filter((i) => {
              if (
                new Date(i.date).getMonth() + 1 ===
                  //   parseInt(req.params.month)
                  new Date().getMonth() + 1 &&
                //
                new Date(i.date).getFullYear() ===
                  // parseInt(req.params.year)
                  new Date().getFullYear() &&
                //
                new Date(i.date).getDate() === new Date().getDate()
              ) {
                return dailyData.push(i);
              }
            });

            res.status(200).json(dailyData);
          } else {
            return resourceError(res, "No data Found");
          }
        } else {
          return resourceError(res, "No data found");
        }
      })
      .catch((error) => serverError(res, error));
  },

  getMonthlyMealRate(req, res) {
    // let { _id, role, homeId, homeOwner } = req.user;
    const { messId } = req.user;
    // const messId = "111222";
    MealModel.findOne({ _id: messId })
      .then((result) => {
        if (result !== null) {
          if (result.userMeal.length !== 0) {
            let monthlyData = [];
            result.userMeal.filter((i) => {
              if (
                new Date(i.date).getMonth() + 1 ===
                  //   parseInt(req.params.month)
                  new Date().getMonth() + 1 &&
                //
                new Date(i.date).getFullYear() ===
                  // parseInt(req.params.year)
                  new Date().getFullYear()
              ) {
                return monthlyData.push(i);
              }
            });

            let totalMeal = 0;
            for (let i = 0; i < monthlyData.length; i++) {
              totalMeal +=
                monthlyData[i].morning +
                monthlyData[i].day +
                monthlyData[i].night;
            }
            // res.status(200).json(totalMeal);

            ExpenseModel.findOne({ _id: messId })
              .then((result) => {
                if (result != null) {
                  if (result.expense.length != 0) {
                    let monthlyExpenseData = [];
                    result.expense.filter((i) => {
                      if (
                        // new Date(i.date).getMonth() + 1 ===
                        //   parseInt(req.params.month) &&
                        // new Date(i.date).getFullYear() === parseInt(req.params.year)
                        new Date(i.date).getMonth() + 1 ===
                          //   parseInt(req.params.month)
                          new Date().getMonth() + 1 &&
                        //
                        new Date(i.date).getFullYear() ===
                          // parseInt(req.params.year)
                          new Date().getFullYear()
                      ) {
                        return monthlyExpenseData.push(i);
                      }
                    });

                    let totalExpense = 0;
                    for (let i = 0; i < monthlyExpenseData.length; i++) {
                      totalExpense += monthlyExpenseData[i].expAmount;
                    }

                    const mealRate =
                      parseInt(totalExpense) / parseInt(totalMeal);
                    const mealCalulations = {
                      totalExpense,
                      totalMeal,
                      mealRate,
                    };
                    res.status(200).json(mealCalulations);
                  } else {
                    return resourceError(res, "No data Found");
                  }
                } else {
                  return resourceError(res, "No data found");
                }
              })
              .catch((error) => serverError(res, error));
          } else {
            return resourceError(res, "No data Found");
          }
        } else {
          return resourceError(res, "No data found");
        }
      })
      .catch((error) => serverError(res, error));
  },

  updateMeal(req, res) {
    // const messId = "111222";
    const { messId } = req.user;
    MealModel.findOne({ _id: messId })
      .then((mess) => {
        if (mess) {
          let mealData;
          mess.userMeal.filter((i) => {
            if (i._id == req.body._id) {
              return (mealData = i);
            }
          });

          mealData.morning = req.body.morning;
          mealData.day = req.body.day;
          mealData.night = req.body.night;

          mess.save();
          res.status(200).json({
            message: "Update Successfully",
          });
        } else {
          return resourceError(res, "Somthing went wrong");
        }
      })
      .catch((error) => serverError(res, error));
  },
};
