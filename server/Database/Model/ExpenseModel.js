const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
  messId: {
    type: String,
    required: true,
  },
  expense: [
    {
      expType: {
        type: String,
      },
      expAmount: {
        type: Number,
      },
      date: {
        type: Date,
      },
    },
  ],
});

const ExpenseModel = mongoose.model("ExpenseModel", expenseSchema);
module.exports = ExpenseModel;
