const MealModel = require("../../Database/Model/MealModel");
const ExpenseModel = require("../../Database/Model/ExpenseModel");

const { serverError, resourceError } = require("../../utils/error");

module.exports = {
  createMeal(req, res) {
    let { userId, morning, day, night, date } = req.body;
    const messId = "111222";
    let objData = new Object({ userId, morning, day, night, date });
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

  getDailyMeal(req, res) {
    // let { _id, role, homeId, homeOwner } = req.user;
    const messId = "111222";
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
    const messId = "111222";
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

  getMonthlyExpense(req, res) {
    // let { _id, role, homeId, homeOwner } = req.user;
    const messId = "111222";
    MealModel.findOne({ _id: messId })
      .then((result) => {
        if (result != null) {
          if (result.expense.length != 0) {
            let monthlyData = [];
            result.expense.filter((i) => {
              if (
                new Date(i.date).getMonth() + 1 ===
                  parseInt(req.params.month) &&
                new Date(i.date).getFullYear() === parseInt(req.params.year)
              ) {
                return monthlyData.push(i);
              }
            });

            res.status(200).json(monthlyData);
          } else {
            return resourceError(res, "No data Found");
          }
        } else {
          return resourceError(res, "No data found");
        }
      })
      .catch((error) => serverError(res, error));
  },

  updateExpense(req, res) {
    const messId = "111222";
    MealModel.findOne({ _id: messId })
      .then((mess) => {
        if (mess) {
          let expData;

          mess.expense.filter((i) => {
            if (i._id == req.body._id) {
              return (expData = i);
            }
          });

          expData.expType = req.body.expType;
          expData.expAmount = req.body.expAmount;

          mess.save();
          // console.log(apartmentData.rent);
          res.status(200).json({
            message: "Update Successfully",
            // Floors: response.data,
          });
          // res.send(apartmentData);
        } else {
          return resourceError(res, "Somthing went wrong");
        }
      })
      .catch((error) => serverError(res, error));
  },

  removeExpense(req, res) {
    MealModel.updateMany({}, { $pull: { expense: { _id: req.params.expId } } })
      .then((result) => {
        if (result.modifiedCount) {
          res.status(200).json({
            message: "Successfully Removed ",
            // Floors: response.data,
          });
          // res.send("Successfully Removed Apartment");
        } else {
          return resourceError(res, "Somthing went wrong");
        }
      })
      .catch((error) => serverError(res, error));
  },
};
