import React, { Component } from 'react';
import Input from './../../components/UI/Input/Input';
import { onCheckValidity } from './../../utility/Utility';
import './Login.css';
import Spinner from '../../components/UI/Spinner/Spinner';
import { connect  } from 'react-redux';
import * as authActions from './../../store/actions/auth';

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
      
        const data = {
            email: this.state.form.email.value,
            password: this.state.form.password.value,
            isSignUp: this.state.isSignUp
        }

        this.props.onAuth(data.email, data.password, data.isSignUp)

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

        if(this.props.error){
            message = (<p className="Login__message">{this.props.error.message}</p>)
        }

        if(this.props.loading){
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

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignUp) => dispatch( authActions.authInit(email, password, isSignUp)  )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login) ;