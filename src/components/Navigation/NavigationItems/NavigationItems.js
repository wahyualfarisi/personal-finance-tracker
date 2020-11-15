import React, { Fragment } from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import { connect } from 'react-redux';


const NavigationItems = (props) => {
    return (
       <ul className={classes.NavigationItems}>
            {props.isAuthenticated ? (
                <Fragment>
                    <NavigationItem link="/"> My Collections </NavigationItem>
                    <NavigationItem link="/logout"> Logout </NavigationItem>
                </Fragment>
            ) : (
                <Fragment>
                    <NavigationItem link="/"> Home </NavigationItem>
                    <NavigationItem link="/login"> Login </NavigationItem>
                </Fragment>
            )}
           
       </ul>
    )
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps, null)(NavigationItems) 
