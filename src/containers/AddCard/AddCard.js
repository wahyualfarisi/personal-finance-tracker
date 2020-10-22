import React, { useReducer } from 'react';
import classes from './AddCard.module.css';
import CreditCard from '../../components/UI/Cards/CreditCard/CreditCard';
import BtnCircleColor from '../../components/UI/Buttons/BtnCircleColor/BtnCircleColor';
import Input from '../../components/UI/Input/Input';
import Btn from '../../components/UI/Buttons/Btn/Btn';
import { connect } from 'react-redux';
import { initialState, reducer } from './store/reducer';
import * as actions from './store/actions';

import symbolDefs from './../../assets/symbol-defs.svg';
import Icon from '../../components/UI/Icon/Icons';


const AddCard = ( props ) => {

    const [state, dispatch] = useReducer(reducer, initialState )

    const formElementArr = [];

    for(let key in state.add_form){
        formElementArr.push({
            id: key,
            config: state.add_form[key]
        }) 
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const form_data = {
            userId: props.userId,
            bank_name: state.add_form.bank_name.value,
            number_card: state.add_form.number_card.value,
            name_card: state.add_form.your_name.value,
            theme_card: {
                background: state.credit_card.colorCard,
                color: state.credit_card.colorText
            }
        }
        
    }

    return (
        <div className={classes.AddCard}>
            <h2 className="Text-center">Add your Card</h2>
            <div className={classes.AddCard_Container}>

                <div className={classes.AddCard_CreditCard}>
                    <CreditCard 
                        bank_name={state.add_form.bank_name.value}
                        card_author={state.add_form.your_name.value}
                        card_number={state.add_form.number_card.value}
                        color={state.credit_card.colorText}
                        type={state.credit_card.colorCard}
                    />
                </div>

                <p>Select Card Color</p>
                <div className={classes.AddCard_Select_Color}>
                    {state.card_collections.map((item, i) => (
                        <BtnCircleColor 
                            selectedColor={state.credit_card.colorCard}
                            key={i} 
                            type={item} 
                            selected={ state.credit_card.colorCard === item }
                            clicked={ () => dispatch( actions.selectThemeColor(item) ) }
                        />
                    ))}
                </div>

                <p>Select Text Color</p>
                <div className={classes.AddCard_Select_Color}>
                    {state.text_collections.map((item,i) => (
                        <Btn 
                            key={i}
                            selected={ state.credit_card.colorText === item }
                            clicked={() => dispatch( actions.selectTextColor(item))}>
                            {item}
                        </Btn>
                    ))}
                </div>

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
                            changed={ (event) => dispatch( actions.inputHandler(event.target.value, item.id) ) }
                    />
                ))}

                <button 
                        disabled={!state.formIsValid || state.isLoading} 
                        className={classes.AddCard_Button} 
                        type="submit">
                        {state.isLoading ? 'Loading': 'Submit'}
                    </button>
                </form>

            </div>

        </div>
    )
} 


const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
        userId: state.auth.userId,
        token: state.auth.token
    }
}

export default connect(mapStateToProps)(AddCard) ;