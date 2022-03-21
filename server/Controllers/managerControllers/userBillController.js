const UserBillModel = require("../../Database/Model/UserBillModel");

const { serverError, resourceError } = require("../../utils/error");

module.exports = {
  createBill(req, res) {
    let { userId, rent, wifi, currentBill, mealBudget, date } = req.body;
    const messId = "111222";
    let objData = new Object({
      userId,
      rent,
      wifi,
      currentBill,
      mealBudget,
      date,
    });
    let billData = new UserBillModel({
      //   managerId: userId,
      _id: messId,
      userBill: objData,
    });
    // console.log(billData);
    UserBillModel.findOne({ _id: messId })
      .then((mess) => {
        // console.log(mess);
        if (mess) {
          if (Object.keys(mess.userBill).length === 0) {
            // mess.userBill = objData;

            console.log("ajfhfg");
            // mess.userBill = Object.assign({}, objData);
            // mess
            //   .save()
            //   .then((response) => {
            //     res.status(201).json({
            //       message: "Bill Created Successfully",
            //     });
            //   })
            //   .catch((error) => serverError(res, error));
          } else {
            console.log((mess.userBill = Object.assign({}, objData)));
          }

          // mess.userBill;
          // messData
          //   .save()
          //   .then((response) => {
          //     res.status(201).json({
          //       message: "Mess Created Successfully",
          //       mess: response.data,
          //     });
          //   })
          //   .catch((error) => serverError(res, error));
        } else {
          // return resourceError(res, "Please create mess first!");
          billData
            .save()
            .then((response) => {
              res.status(201).json({
                message: "Bill Created Successfully",
              });
            })
            .catch((error) => serverError(res, error));
        }
      })
      .catch((error) => {
        serverError(res, error);
      });
  },

  getAllInfo(req, res) {
    const messId = "124";
    MessInfo.findOne({ _id: messId })
      .then((mess) => {
        if (mess) {
          res.status(200).json(mess);
        } else {
          res.status(200).json({
            message: "Transaction Not Found",
          });
        }
      })
      .catch((error) => serverError(res, error));
  },

  updateMess(req, res) {
    // let { messId } = req.params;
    const messId = "124";
    MessInfo.findOneAndUpdate(
      { _id: messId },
      { $set: req.body },
      { new: true }
    )
      .then((result) => {
        res.status(200).json({
          message: "Update Successfully",
        });
      })
      .catch((error) => serverError(res, error));
  },

  removeMess(req, res) {
    // let { messId } = req.params;
    const messId = "124";
    MessInfo.findOneAndDelete({ _id: messId })
      .then((result) => {
        res.status(200).json({
          message: "Delete successfully",
        });
      })
      .catch((error) => serverError(res, error));
  },
};
