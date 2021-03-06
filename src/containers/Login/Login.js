import React, { useReducer } from 'react';
import { Redirect } from 'react-router-dom';
import Input from './../../components/UI/Input/Input';
import './Login.css';
import Spinner from '../../components/UI/Spinner/Spinner';
import { connect  } from 'react-redux';
import * as authActions from './../../store/actions/auth';
import { initialState, reducer } from './store/reducer';
import * as actionCreators from './store/actions';
import Alert from '../../components/UI/Alert/Alert';


const Login = (props) => {

    const [ state, dispatch ] = useReducer(reducer, initialState)

    let formUI = null, formData = [];

    for(let key in state.form){
        formData.push({
            id: key,
            config: state.form[key]
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const { email , password } = state.form;
        props.onAuth( email.value, password.value)
    }

    let redirectIfAuthenticated = null;
    
    if( props.isAuthenticated ){
        redirectIfAuthenticated = <Redirect to="/" />
    }

    formUI = (
        <div>  
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
        </div>
    );

    if(props.loading){
        formUI = (
            <div className="Login_loading">
                <Spinner />
            </div>
        );
    }


    return (
        <div className="Login">
            <div className="Login__card">
                <div className="Login__content">
                    <h1 className="Login__text">
                        Login
                    </h1>
                    <form className="Login__form" onSubmit={onSubmit}>
                        {formUI}
                    </form>
                </div>
             { props.error && <Alert type="Warning">{props.error}</Alert> }
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
        onAuth: (email, password) => dispatch( authActions.authInit(email, password)  )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login) ;