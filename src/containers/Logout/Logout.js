import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as authActions from './../../store/actions/auth';
import { Redirect } from 'react-router-dom';

const Logout = (props) => {

    useEffect( () => {
        props.onLogout();
    }, [props] )

    if(props.loading){
        return <div>LOADING ...</div>
    }else{
        return <Redirect to="/" />
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading
    }
}

const mapDispatchToProp = dispatch => {
    return {
        onLogout: () => dispatch( authActions.logoutInit() )
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(Logout);