import { onCheckValidity } from './../../../utility/Utility';

const types = {
    SWITCH_AUTH: 'SWITCH_AUTH',
    CHANGE_INPUT: 'CHANGE_INPUT'
}

export const actionCreators = {
    switchAuth: () => ({ type: types.SWITCH_AUTH }),
    changeInputHandler: ( value, inputName ) => ({ type: types.CHANGE_INPUT, value: value, inputName: inputName })
}

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
            isSignUp: !state.isSignUp
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