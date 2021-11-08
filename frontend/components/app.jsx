import React, { useState } from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import ModalContainer from './modal/modal_container'
// landing
import NavBarContainer from './nav_bar/nav_bar_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import PinIndexContainer from './pins/pin_index_container';



const App = () => {
    // const [isOpen, setIsOpen] = useState(false);
    return (
    <div className="appl-de-ap">
        <ModalContainer/>
        <header className="nb">
            <NavBarContainer />

            {/* will need to refactor for all modal forms */}
            {/* <div className="modal-button">
                <button onClick={() => setIsOpen(true)}>Open Modal</button>
                <Modal open={isOpen} onClose={()=>setIsOpen(false)}>
                    <LogInFormContainer/>
                </Modal>
            </div> */}
                {/* will need to refactor for all modal forms */}


        </header>
        
        {/* <Route exact path="/pins" component={ContentDisplay}/> */}
        <div className="main-content">
            <Switch>
                <AuthRoute exact path="/login" component={LogInFormContainer} />
                <AuthRoute exact path="/signup" component={SignUpFormContainer} /> 
                route pin show container
            </Switch>
        </div>
    </div>
    )
}

export default App
