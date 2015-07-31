import React, { Component } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import * as LinkActions from "actions/SampleActions.jsx";
import Sample from 'Sample/index.jsx';

@connect(state => ({ samples: state.samples }))
export default class SampleApp extends Component{

    /**
     * Props
     *
     */
    static defaultProps = { }
    static propTypes = { }



    /**
     * Render
     *
     * @return JSX
     */
    render() {
        return (
            <Sample />
        );
    }

}
