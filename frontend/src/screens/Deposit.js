import React, { useState } from 'react';
import axios from 'axios';

const Deposit = () => {
    const [email, setEmail] = useState('');
    const [amount, setAmount] = useState('');

    const handleDeposit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:1337/api/accounts/deposit', {
                email,
                amount: parseFloat(amount), // Ensure amount is a number
            });
            console.log('Deposit successful:', response.data);
        } catch (error) {
            console.error('Error during deposit:', error.response.data);
        }
    };

    return (
        <div>
            <h1>Deposit</h1>
            <form onSubmit={handleDeposit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
                <button type="submit">Deposit</button>
            </form>
        </div>
    );
};

export default Deposit;
