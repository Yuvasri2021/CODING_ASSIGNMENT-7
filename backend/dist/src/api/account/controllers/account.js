// src/api/account/controllers/account.js
const { createCoreController } = require('@strapi/strapi').factories;
module.exports = createCoreController('api::account.account', ({ strapi }) => ({
    // 1. Create Account
    async createAccount(ctx) {
        const { name, email, password, depositAmount } = ctx.request.body;
        if (!name || !email || !password || depositAmount == null) {
            return ctx.badRequest('Please provide name, email, password, and deposit amount.');
        }
        try {
            const account = await strapi.db.query('api::account.account').create({
                data: { name, email, password, depositAmount },
            });
            return ctx.send({ message: 'Account created successfully', account });
        }
        catch (error) {
            return ctx.internalServerError('An error occurred while creating the account.', error);
        }
    },
    // 2. Deposit Amount
    async deposit(ctx) {
        const { email, amount } = ctx.request.body;
        if (!email || amount == null) {
            return ctx.badRequest('Please provide email and deposit amount.');
        }
        try {
            const account = await strapi.db.query('api::account.account').findOne({ where: { email } });
            if (!account) {
                return ctx.notFound('Account not found.');
            }
            const updatedAccount = await strapi.db.query('api::account.account').update({
                where: { email },
                data: { depositAmount: account.depositAmount + amount },
            });
            return ctx.send({ message: 'Deposit successful', updatedAccount });
        }
        catch (error) {
            return ctx.internalServerError('An error occurred during the deposit.', error);
        }
    },
    // 3. Withdraw Amount
    async withdraw(ctx) {
        const { email, amount } = ctx.request.body;
        if (!email || amount == null) {
            return ctx.badRequest('Please provide email and withdrawal amount.');
        }
        try {
            const account = await strapi.db.query('api::account.account').findOne({ where: { email } });
            if (!account) {
                return ctx.notFound('Account not found.');
            }
            if (account.depositAmount < amount) {
                return ctx.badRequest('Insufficient funds.');
            }
            const updatedAccount = await strapi.db.query('api::account.account').update({
                where: { email },
                data: { depositAmount: account.depositAmount - amount },
            });
            return ctx.send({ message: 'Withdrawal successful', updatedAccount });
        }
        catch (error) {
            return ctx.internalServerError('An error occurred during the withdrawal.', error);
        }
    },
    // 4. Fetch All Transactions
    async findAllTransactions(ctx) {
        const { email } = ctx.query;
        if (!email) {
            return ctx.badRequest('Email is required.');
        }
        try {
            const account = await strapi.db.query('api::account.account').findOne({
                where: { email },
                populate: { transactions: true },
            });
            if (!account) {
                return ctx.notFound('Account not found.');
            }
            return ctx.send(account.transactions);
        }
        catch (error) {
            return ctx.internalServerError('An error occurred while fetching transactions.', error);
        }
    },
}));
