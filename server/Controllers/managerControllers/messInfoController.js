const MessInfo = require("../../Database/Model/MessInfoModel");

const { serverError, resourceError } = require("../../utils/error");

module.exports = {
  createMess(req, res) {
    let { messId, messName, totalSeats, perSeatRent } = req.body;
    let messData = new MessInfo({
      //   managerId: userId,
      _id: messId,
      messName,
      totalSeats,
      perSeatRent,
    });
    MessInfo.findOne({ _id: messId })
      .then((mess) => {
        if (!mess) {
          messData
            .save()
            .then((response) => {
              res.status(201).json({
                message: "Mess Created Successfully",
                mess: response.data,
              });
            })
            .catch((error) => serverError(res, error));
        } else {
          return resourceError(res, "Mess Already Created!");
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
