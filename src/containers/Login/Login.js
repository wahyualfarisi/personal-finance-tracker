import React, { Component } from 'react';
import Axios from 'axios';

import Input from './../../components/UI/Input/Input';
import { onCheckValidity } from './../../utility/Utility';
import './Login.css';
import Spinner from '../../components/UI/Spinner/Spinner';

class Login extends Component {

    state = {
        form: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                label: 'Email',
                value: '',
                validation: {
                    isRequired: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Enter your password'
                },
                label: 'Password',
                value: '',
                validation: {
                    isRequired: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        },
        formIsValid: false,
        isLoading: false,
        message: null,
        isSignUp: false
    }

    onChangeHandler = (event, inputName) => {
        const updatedForm = { ...this.state.form }
        const updatedFormInput = { ...updatedForm[inputName] }
        updatedFormInput.valid = onCheckValidity(event.target.value, updatedFormInput.validation);
        updatedFormInput.value = event.target.value;
        updatedFormInput.touched = true;

        updatedForm[inputName] = updatedFormInput;

        let formIsValid = true;
        for(let key in updatedForm)
        {
            formIsValid = updatedForm[key].valid && formIsValid
        }
        

        this.setState({
            form: updatedForm,
            formIsValid
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        let type, url;

        type = this.state.isSignUp ? 'signUp' : 'signInWithPassword';
        url  = `https://identitytoolkit.googleapis.com/v1/accounts:${type}?key=AIzaSyAY0LVtm86E1YH5XAIbc0jt7WnbZ52j6Q0`;
        
        const data = {
            email: this.state.form.email.value,
            password: this.state.form.password.value
        }

        this.setState({
            isLoading: true,
            message: ''
        })

        Axios.post(url, data )
            .then(res => {
                console.log(res)
                this.setState({
                    isLoading: false
                })
            })
            .catch(err => {
                console.log(err.response.data.error)
                const { error } = err.response.data;
                this.setState({
                    message: `Code ${error.code} : ${error.message}`,
                    isLoading: false
                })
            })
    }

    onSwitchAuth = () => {
        this.setState(prevState => ({
            ...prevState,
            isSignUp: !prevState.isSignUp,
            form: {
                ...prevState.form,
                email: {
                    ...prevState.form.email,
                    value: '',
                    valid: false
                },
                password: {
                    ...prevState.form.password,
                    value: '',
                    valid: false
                }
            },
            formIsValid: false
        }))
    }

    render(){
        let formData = [], 
            formUI = null, 
            message = null, 
            textButton = '', 
            textHeading = '';

        for(let key in this.state.form){
            formData.push({
                id: key,
                config: this.state.form[key]
            })
        }

        if(this.state.isSignUp){
            textButton = 'Login';
            textHeading = 'Register';
        }else{
            textButton = 'Register';
            textHeading = 'Login';
        }

        formUI = (
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                {formData.map(item => (
                    <Input 
                        key={item.id}
                        label={item.config.label}
                        elementType={item.config.elementType}
                        elementConfig={item.config.elementConfig}
                        value={item.config.value}
                        touched={item.config.touched}
                        inValid={!item.config.valid}
                        shouldValidate={item.config.validation}
                        changed={(event) => this.onChangeHandler(event, item.id) }
                    />
                ))}
                <div>
                    <button type="submit" disabled={!this.state.formIsValid} className="Login__button">SUBMIT</button>
                </div>

                <button 
                    type="button"
                    onClick={this.onSwitchAuth}
                    className="Login__button_switch">
                    {textButton}
                &rarr; </button>
            </div>
        );

        if(this.state.message){
            message = (<p className="Login__message">{this.state.message}</p>)
        }

        if(this.state.isLoading){
            formUI = (
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Spinner />
                </div>
            );
        }
        

        return (
            <div className="Login">
                <div className="Login__card">
                    <div className="Login__content">
                        <h1 className="Login__text">{textHeading}</h1>
                        <form className="Login__form" onSubmit={this.onSubmit}>
                            {formUI}
                            {message}
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;