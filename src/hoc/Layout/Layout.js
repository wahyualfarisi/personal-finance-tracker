import React, { useState, useRef, useEffect } from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import classes from './Layout.module.css';

const Layout = props => {

    const [isShowSideDrawer , setisShowSideDrawer] = useState(false);

    const prevShowSidebar = useRef();

    useEffect( () => {
        prevShowSidebar.current = isShowSideDrawer;        
    }, [isShowSideDrawer]);



    const sideDrawerCloseHandler = () => setisShowSideDrawer(false);

    const sideDrawerToggleHandler = () => setisShowSideDrawer(!prevShowSidebar.current);
    

    return(
        <React.Fragment>
            <Toolbar 
                toggleHandler={sideDrawerToggleHandler} 
                isShowSideDrawer={isShowSideDrawer} />
            <SideDrawer 
                open={isShowSideDrawer}
                closed={sideDrawerCloseHandler} />
            <main className={classes.Main}>
                {props.children}
            </main>
        </React.Fragment>
    )
} 

export default Layout;