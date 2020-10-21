import * as types from './types';
import { onCheckValidity } from './../../../utility/Utility';

export const initialState = {
    add_form: {
        bank_name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Enter Bank Name'
            },
            value: '',
            validation: {
                required: true
            },
            label: 'Enter Bank Name',
            valid: false,
            touched: false
        },
        number_card: {
            elementType: 'input',
            elementConfig: {
                type: 'number',
                placeholder: 'Enter Card Number'
            },
            value: '',
            validation: {
                required: true,
                maxLength: 16,
                minLength: 16

            },
            label: 'Enter Card Number',
            valid: false,
            touched: false
        },
        your_name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Enter Your Name',
                maxLength: 15
            },
            value: '',
            validation: {
                required: true,
                maxLength: 15,
                minLength: 5
            },
            label: 'Enter Your Name',
            valid: false,
            touched: false
        },
    },
    formIsValid: false,
    credit_card: {
        colorCard: 'one',
        colorText: 'white'
    },
    card_collections: ['one','two','three','four','five','six'],
    isLoading: false,
    error: null
}

export function reducer(state, action) {
    switch(action.type)
    {
        case types.SELECT_TEXT_COLOR:
        return {
            ...state,
            credit_card: {
                ...state.credit_card,
                colorText: action.payload
            }
        }

        case types.SELECT_THEME_COLOR:
        return {
            ...state,
            credit_card: {
                ...state.credit_card,
                colorCard: action.payload
            }
        }

        case types.INPUT_HANDLER: 
        const updatedAddForm = { ...state.add_form };
        const updatedInput = { ...updatedAddForm[action.inputName] }
        updatedInput.value = action.value.toUpperCase();
        updatedInput.valid = onCheckValidity(action.value, updatedInput.validation);
        updatedInput.touched = true;

        updatedAddForm[action.inputName] = updatedInput;

        let formIsValid = true;
        for(let key in updatedAddForm) {
            formIsValid = updatedAddForm[key].valid && formIsValid
        }
        return {
            ...state,
            add_form: updatedAddForm,
            formIsValid: formIsValid
        }
        default: 
        return state;
    }

}


