import React, { useState } from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import Modal from './modal/modal'
// landing
import NavBarContainer from './nav_bar/nav_bar_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import PinIndexContainer from './pins/pin_index_container';


const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
    <div>
        <header>

            {/* will need to refactor for all modal forms */}
            <div className="modal-button">
                <button onClick={() => setIsOpen(true)}>Open Modal</button>
                <Modal open={isOpen} onClose={()=>setIsOpen(false)}>
                    modal children that is being rendered
                </Modal>
            </div>
                {/* will need to refactor for all modal forms */}


            <NavBarContainer />
        </header>
        
        {/* <Route exact path="/pins" component={PinIndexContainer}/> */}
        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            {/* route pin show container */}
        </Switch>
    </div>
    )
}

export default App
