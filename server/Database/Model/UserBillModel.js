const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userBillSchema = new Schema({
  messId: {
    type: String,
    required: true,
  },
  userBill: [
    {
      userId: {
        type: String,
      },
      rent: {
        type: Number,
      },
      wifi: {
        type: Number,
      },
      currentBill: {
        type: Number,
      },
      mealBudget: {
        type: Number,
      },
      date: {
        type: Date,
      },
    },
  ],
});

const UserBillModel = mongoose.model("UserBillModel", userBillSchema);
module.exports = UserBillModel;
