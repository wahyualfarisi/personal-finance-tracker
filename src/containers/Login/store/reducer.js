import { onCheckValidity } from './../../../utility/Utility';
import * as types from './types';

export const initialState = {
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

export function reducer(state, action) {
    switch(action.type) {

        case types.SWITCH_AUTH:
        return {
            ...state,
            isSignUp: !state.isSignUp,
            form: {
                ...state.form,
                email: {
                    ...state.form.email,
                    value: '',
                    valid: false,
                    touched: false
                },
                password: {
                    ...state.form.password,
                    value: '',
                    valid: false,
                    touched: false
                }
            }
        }

        case types.CHANGE_INPUT:
        const updatedForm = {...state.form}
        const updatedFormInput = {...updatedForm[action.inputName]}
        updatedFormInput.valid = onCheckValidity(action.value, updatedFormInput.validation);
        updatedFormInput.value = action.value;
        updatedFormInput.touched = true;
        updatedForm[action.inputName] = updatedFormInput;

        let formIsValid = true;
        for(let key in updatedForm) {
            formIsValid = updatedForm[key].valid && formIsValid
        }

        return {
            ...state,
            form: updatedForm,
            formIsValid: formIsValid
        }

      

        default: 

        return state;
    }
}