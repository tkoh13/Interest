import React, { useState } from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import ModalContainer from './modal/modal_container'
// landing
import NavBarContainer from './nav_bar/nav_bar_container';
import ContentDisplayContainer from './content_display/content_display_container';
import FooterContainer from './footer/footer_container';
import Splash from './splash/splash';
import HomePageContainer from './home_page/home_page_container';
import ProfileShowContainer from './profile_page/profile_show_container';
// import content_display_container from './content_display/content_display_container';




const App = () => {
    // const [isOpen, setIsOpen] = useState(false);
    return (
    <div className="appl-de-ap">
        <ModalContainer/>
        <header className="nb">
            <NavBarContainer />
        </header>
        <main className="main-content">
            <Switch>
                <AuthRoute exact path='/' component={Splash} />
                {/* AboutPage */}
                {/* <AuthRoute exact path='*' component={Splash} /> */}
                {/* <AuthRoute exact path='*' component={Splash} /> */}
            </Switch>
        {/* <Route exact path="/pins" component={ContentDisplay}/> */}
            {/* <ContentDisplayContainer/> */}
            <Switch>
                <ProtectedRoute exact path='/users/:userId' component={ProfileShowContainer} />
                <ProtectedRoute exact path='/' component={HomePageContainer} />
                {/* <AuthRoute exact path='/' component={Splash} /> */}
                {/* <ProtectedRoute exact path='/' component={HomePageContainer} /> */}
                {/* <Route exact path="/pins/:pinId" /> component={PinDetailsContainer}  */}
                {/* interest/:userId/_saved */}
                {/* interest/:userId/:boardId */}
                {/* <ProtectedRoute exact path='/home' component={ContentDisplayContainer} /> */}
                {/* <Redirect to='/' /> */}
            </Switch>
        </main>

        <footer>
            <FooterContainer/>
        </footer>
    </div>
    )
}

export default App
