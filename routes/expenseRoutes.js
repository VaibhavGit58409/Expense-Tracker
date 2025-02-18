const express = require('express');
const Expense = require('../models/Expense');
const jwt = require('jsonwebtoken');

const router = express.Router();

const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ error: 'Access denied' });

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).json({ error: 'Invalid token' });
    }
};

router.post('/', verifyToken, async (req, res) => {
    const { amount, category, description } = req.body;
    const newExpense = new Expense({ userId: req.user.userId, amount, category, description });
    await newExpense.save();
    res.json(newExpense);
});

router.get('/', verifyToken, async (req, res) => {
    const expenses = await Expense.find({ userId: req.user.userId });
    res.json(expenses);
});

router.delete('/:id', verifyToken, async (req, res) => {
    await Expense.findByIdAndDelete(req.params.id);
    res.json({ message: 'Expense deleted' });
});

module.exports = router;
