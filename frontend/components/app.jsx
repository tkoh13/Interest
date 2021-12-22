import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';
import Modal from './modal/modal'
import NavBarContainer from './nav_bar/NavBar';
import Footer from './footer/footer';
import Splash from './splash/splash';
import HomePage from './home/HomePage';
import ProfilePage from './profile_page/ProfilePage';
import UserSettings from './settings/UserSettings';
import PinDetails from './pins/PinDetails';
import BoardShow from './boards/BoardShow';
import AllPinsShow from './boards/AllPinsShow';

const App = () => {
    
    // const [isOpen, setIsOpen] = useState(false);
    return (
    <div className="appl-de-ap">
        <Modal/>
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
        {/* <Route exact path="/pins" component={HomeDisplay}/> */}
            {/* <HomeDisplay /> */}
            <Switch>
                <ProtectedRoute exact path='/boards/:boardId' component={BoardShow} />
                <ProtectedRoute exact path='/pins/:pinId' component={PinDetails} />
                <ProtectedRoute exact path='/users/:userId/pins' component={AllPinsShow} />
                <ProtectedRoute exact path='/users/:userId' component={ProfilePage} />
                <ProtectedRoute exact path='/settings' component={UserSettings} />
                <ProtectedRoute exact path='/' component={HomePage} />
                {/* <AuthRoute exact path='/' component={Splash} /> */}
                {/* <ProtectedRoute exact path='/' component={HomePageContainer} /> */}
                {/* <Route exact path="/pins/:pinId" /> component={PinDetailsContainer}  */}
                {/* interest/:userId/_saved */}
                {/* interest/:userId/:boardId */}
                {/* <ProtectedRoute exact path='/home' component={HomeDisplay} /> */}
                {/* <Redirect to='/' /> */}
            </Switch>
        </main>

        <footer>
            <Footer />
        </footer>
    </div>
    )
}

export default App
