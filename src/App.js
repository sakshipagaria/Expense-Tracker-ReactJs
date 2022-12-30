import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncExpense from './components/IncExpense';
import TransactnList from './components/TransactnList';
import AddTransactn from './components/AddTransactn';

import {GlobalProvider}  from './context/GlobalState';

import './App.css';

const App=() => {
    return (
        <GlobalProvider>
            <Header />
            <div className='container'>
                <Balance />
                <IncExpense />
                <TransactnList />
                <AddTransactn />
            </div>
        </GlobalProvider>
    );
}
export default App;