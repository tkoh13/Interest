import React from 'react';
import { connect } from 'react-redux';
import { fetchPins } from '../../actions/pin_actions';
import ContentDisplay from './content_display';

const mapStateToProps = ({ entities }) => ({
    pins: Object.values(entities.pins),
    // boards: Object.values(entities.board),
})

const mapDispatchToProps = dispatch => ({
    fetchPins: () => dispatch(fetchPins())
    // openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContentDisplay);
