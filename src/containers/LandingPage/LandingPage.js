import React , { Component } from 'react';
import './LandingPage.css';
import LandingPageImage from './../../assets/images/landing_page.svg';
import CardFinance from './../CardFinance/CardFinance';

class LandingPage extends Component {

    render(){
        return (
            <div className="LandingPage">
                <div className="LandingPageClipPath"></div>
                <div className="LandingPage__hero">
                    <div className="LandingPage__text">
                        <h1 className="LandingPage__heading">Manage <span>Your</span> <span>Budget</span>  </h1>
                        <p className="LandingPage_paragraph">Tracking your expenses and income with spesific card</p>
                    </div>
                    <div className="LandingPage__Image">
                        <img src={LandingPageImage} className="LandingPage__Image-item" alt="1" />
                    </div>
                </div>

                <CardFinance />
            </div>

        )
    }
}

export default LandingPage;