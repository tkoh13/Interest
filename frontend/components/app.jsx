import React, { useState } from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import ModalContainer from './modal/modal_container'
// landing
import NavBarContainer from './nav_bar/nav_bar_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import ContentDisplayContainer from './content_display/content_display_container';




const App = () => {
    // const [isOpen, setIsOpen] = useState(false);
    return (
    <div className="appl-de-ap">
        <ModalContainer/>
        <header className="nb">
            <NavBarContainer />
        </header>
            {/* <Switch> */}
                {/* <AuthRoute/> */}
                {/* <AuthRoute/> LandingPage */}
            {/* </Switch> */}
        {/* <Route exact path="/pins" component={ContentDisplay}/> */}
        <div className="main-content">
            
            <Switch>
                {/* <Route exact path="/pins/:pinId" /> component={PinDetailsContainer}  */}
                {/* interest/:userId/_saved */}
                {/* interest/:userId/:boardId */}
                <ProtectedRoute exact path='/home' component={ContentDisplayContainer} />
            </Switch>
        </div>

        <footer>

            {/* createPin */}
            {/* createBoard */}
            {/* questionMark: about */}
        </footer>
    </div>
    )
}

export default App
