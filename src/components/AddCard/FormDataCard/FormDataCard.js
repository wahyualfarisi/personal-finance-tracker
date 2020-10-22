import React from 'react';
import classes from './FormDataCard.module.css';
import Input from './../../UI/Input/Input';

const FormDataCard = ( { state, formElementArr, submitHandler, inputHandler } ) => {
    return (
        <form onSubmit={submitHandler} className={[classes.AddCard_Form, 'mt-10'].join(' ')}>
            {formElementArr.map(item => (
                <Input 
                        key={item.id}
                        label={item.config.label}
                        elementType={item.config.elementType}
                        elementConfig={item.config.elementConfig}
                        value={item.config.value}
                        invalid={!item.config.valid}
                        shouldValidate={item.config.validation}
                        touched={item.config.touched}
                        changed={ (event) => inputHandler(event.target.value, item.id)  }
                />
            ))}

            <button 
                    disabled={!state.formIsValid || state.isLoading} 
                    className={classes.AddCard_Button} 
                    type="submit">
                    {state.isLoading ? 'Loading': 'Submit'}
            </button>
        </form>
    )
}

export default FormDataCard;