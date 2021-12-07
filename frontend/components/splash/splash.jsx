import React from 'react';

const Splash = ({ loggedIn }) => {
    const renderSplash = () => {
        return(
            <div>splash page</div>
        )
    }
    return (
        <div className='splash-container'>
            {loggedIn ? null : renderSplash()}
        </div>
    )
}

import { connect } from 'react-redux';
// import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state) => ({
    loggedIn: Boolean(state.session.id)
});

// const mapDispatchToProps = (dispatch) => ({
//     fetchUser: (user) => dispatch(fetchUser(user))
// });

export default connect(mapStateToProps)(Splash);
// export default connect(mapStateToProps, mapDispatchToProps)(Splash);