import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
// modal
// landing
import NavBarContainer from './nav_bar/nav_bar_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import PinIndexContainer from './pins/pin_index_container';


const App = () => (
    <div>
        <header>
            {/* Modal */}
            
            {/* <Link to="/">
                <h1 id="interest-logo-name">Interest</h1>
            </Link> */}
                <NavBarContainer />
        </header>
        <Route exact path="/pins" component={PinIndexContainer}/>
        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            {/* route pin show container */}
        </Switch>
    </div>
)

export default App
