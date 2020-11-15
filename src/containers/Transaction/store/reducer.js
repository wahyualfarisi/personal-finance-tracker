import * as types from './types';
import { onCheckValidity } from './../../../utility/Utility';

export const initialState = {
    formIsValid: false,
    form: {
        type: {
            validation: {
                required: true
            },
            value: 'inc',
            valid: true
        },
        date: {
            validation: {
                required: true
            },
            value: '',
            valid: false
        },
        amount: {
            validation: {
                required: true,
                minLength: 3,
                maxLength: 10,
                onlyNumber: true
            },
            value: '',
            valid: false
        },
        description: {
            validation: {
                required: true ,
                minLength: 5
            },
            value: '',
            valid: false
        }
    }
    
    
}

export function reducer(state, action) {
    switch(action.type)
    {
        case types.INPUT_HANDLER: 
            const updatedForm = { ...state.form }
            const updatedInput = { ...updatedForm[action.name] }
            updatedInput.value = action.value;
            updatedInput.valid = onCheckValidity( action.value, updatedInput.validation );

            updatedForm[action.name] = updatedInput;

            let formIsValid = true;
            for(let key in updatedForm)
            {
                formIsValid = updatedForm[key].valid && formIsValid
            }
            

            return {
                ...state,
                form: updatedForm,
                formIsValid: formIsValid
                
            }
        
        case types.CLEAR_INPUT_VALUE:

            const form = { ...state.form };

            for( let key in form ){
                form[key].value = '';
                form[key].valid = false
            }
            
            return {
                ...state,
                form: {
                    ...form,
                    type: {
                        ...form.type,
                        value: 'inc'
                    }
                },
                formIsValid: false

            }

        default:
            return state;
    }
}