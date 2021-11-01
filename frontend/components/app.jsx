import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
// modal
// landing
import NavBarContainer from './nav_bar/nav_bar_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';


const App = () => (
    <div>
        <header>
            {/* Modal */}
            {/* <NavBarContainer /> */}
            <Link to="/">
                <h1>Interest</h1>
            </Link>
        </header>
        {/* <Switch> */}
            <Route path="/" component={NavBarContainer} />
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        {/* </Switch> */}
    </div>
)

export default App
