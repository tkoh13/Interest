import React from 'react';
import { connect } from 'react-redux';
import { fetchPins } from '../../actions/pin_actions';
import PinIndex from './pin_index';

const mapStateToProps = ({ entities }) => ({
    pins: entities.pins
})

const mapDispatchToProps = dispatch => ({
    fetchPins: () => dispatch(fetchPins())
});

export default connect(mapStateToProps, mapDispatchToProps)(PinIndex);
