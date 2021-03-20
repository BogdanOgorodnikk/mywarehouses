import React, { Fragment } from 'react';
import EmptyHeader from '../components/app/EmptyHeader';
import LoginForm from '../components/login/LoginForm';

const Login = () => {
    return (
        <Fragment>
            <EmptyHeader />
            <LoginForm />
        </Fragment>
    )
}

export default Login;