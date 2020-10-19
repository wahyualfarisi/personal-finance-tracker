import React, { useReducer } from 'react';
import { Redirect } from 'react-router-dom';
import Input from './../../components/UI/Input/Input';
import './Login.css';
import Spinner from '../../components/UI/Spinner/Spinner';
import { connect  } from 'react-redux';
import * as authActions from './../../store/actions/auth';
import { initialState, reducer, actionCreators  } from './store/reducer';

const Login = (props) => {

    const [ state, dispatch ] = useReducer(reducer, initialState)


    let formUI = null, formData = [], textDirection = '', textHeading = '';


    if( state.isSignUp ) {
        textDirection = 'Login';
        textHeading = 'Register';
    }else{
        textDirection = 'Register';
        textHeading = 'Login';
    }

    for(let key in state.form){
        formData.push({
            id: key,
            config: state.form[key]
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const { email , password } = state.form;

        props.onAuth( email.value, password.value, state.isSignUp);
        
    }

    let redirectIfAuthenticated = null;
    
    if( props.isAuthenticated ){
        redirectIfAuthenticated = <Redirect to="/" />
    }

    formUI = (
        <div style={{ display: 'flex', flexDirection: 'column' }}>  
            {redirectIfAuthenticated}
            {formData.map(item => (
                <Input 
                    key={item.id}
                    label={item.config.label}
                    elementType={item.config.elementType}
                    elementConfig={item.config.elementConfig}
                    value={item.config.value}
                    touched={item.config.touched}
                    inValid={!item.config.valid}
                    shouldValidate={item.config.validate}
                    changed={(e) => {
                        dispatch( actionCreators.changeInputHandler(e.target.value, item.id) )
                    } }
                />
            ))}
            <div>
                <button 
                    type="submit" 
                    disabled={!state.formIsValid} 
                    className="Login__button"> SUBMIT 
                </button>
            </div>

            <button
                type="button"
                className="Login__button_switch"
                onClick={() => dispatch( actionCreators.switchAuth() ) }
            >
                { textDirection }
                &rarr;
            </button>
        </div>
    );

    if(props.loading){
        formUI = (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'    
            }}>
                <Spinner />
            </div>
        )
    }

    

   
    return (
        <div className="Login">
            <div className="Login__card">
                <div className="Login__content">
                    <h1 className="Login__text">
                        {textHeading}
                    </h1>
                    <form className="Login__form" onSubmit={onSubmit}>
                        {formUI}
                    </form>
                </div>
            </div>
        </div>
    )
}  


const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignUp) => dispatch( authActions.authInit(email, password, isSignUp)  )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login) ;