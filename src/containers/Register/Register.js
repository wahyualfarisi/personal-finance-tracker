import React , {Component} from 'react';
import './Register.css';
import Input from './../../components/UI/Input/Input';

class Register extends Component {

    render(){
        return (
            <div className="Register">
                <div className="Register__card">
                    <div className="Register__content">
                        <h1 className="Register__text">Register</h1>
                        <form className="Register__form">
                            <div>
                                <Input label="Enter your email" />
                            </div>
                            <div>
                                <Input label="Enter your password" />
                            </div>
                            <div>
                                <button className="Register__button">SUBMIT</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;