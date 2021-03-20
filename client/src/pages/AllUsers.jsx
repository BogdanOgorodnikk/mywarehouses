import React, { Fragment } from 'react';
import Header from '../components/app/Header'
import Nav from '../components/app/Nav'
import UsersList from '../components/allusers/UsersList'

const AllUsers = () => {
    return (
        <Fragment>
            <Header />
            <Nav />
            <UsersList />
        </Fragment>
    )
}

export default AllUsers;