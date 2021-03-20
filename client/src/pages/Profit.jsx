import React, { Fragment } from 'react'
import Header from '../components/app/Header'
import Nav from '../components/app/Nav'
import ProfitList from '../components/profit/ProfitList'

const Profit = () => {
    return (
        <Fragment>
            <Header />
            <Nav />
            <ProfitList />
        </Fragment>
    )
}

export default Profit;