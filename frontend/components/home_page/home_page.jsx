import React, { Component } from 'react'
import ContentDisplayContainer from '../content_display/content_display_container'
import { Route, Switch, Redirect } from 'react-router-dom';

class HomePage extends Component {
    constructor(props) {
        super(props)
    
        // this.state = {
             
        // }
    }
    
    render() {
        return (
            <div>
                {/* <Switch>
                    <Redirect to='/home' />
                </Switch> */}
                <ContentDisplayContainer />
            </div>
        )
    }
}

export default HomePage
