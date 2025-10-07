// src/api/account/routes/custom-routes.js
module.exports = {
    routes: [
        {
            method: 'POST',
            path: '/accounts/create', // Make sure the path matches the API request
            handler: 'account.createAccount',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'POST',
            path: '/accounts/deposit',
            handler: 'account.deposit',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'POST',
            path: '/accounts/withdraw',
            handler: 'account.withdraw',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/accounts/findAllTransactions',
            handler: 'account.findAllTransactions',
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};
