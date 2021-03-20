import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import { auth } from './actions/user';
import AllUsers from './pages/AllUsers';
import Home from './pages/Home';
import Login from './pages/Login';
import MyAccount from './pages/MyAccount';
import Orders from './pages/Orders';
import Profit from './pages/Profit';
import Register from './pages/Register';
import Warehouse from './pages/Warehouse';

function App() {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(auth())
  }, [])

  return (
    <BrowserRouter>
      <div className="app">
          {isAuth ?
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/warehouse/:id" component={Warehouse}/>
                <Route path="/orders" component={Orders}/>
                <Route path="/myaccount" component={MyAccount}/>
                <Route path="/profit" component={Profit}/>
                <Route path="/allusers" component={AllUsers}/>
            </Switch>
            :
            <Switch>
                <Route path="/register" component={Register}/>
                <Route path="/login" component={Login}/>
                <Route path="/" component={Login}/>
            </Switch>
          }
      </div>
    </BrowserRouter>
  );
}

export default App;
