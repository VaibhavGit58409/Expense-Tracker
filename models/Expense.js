const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    amount: Number,
    category: String,
    date: { type: Date, default: Date.now },
    description: String,
});

module.exports = mongoose.model('Expense', ExpenseSchema);
