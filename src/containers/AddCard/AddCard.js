import React, { useReducer } from 'react';
import classes from './AddCard.module.css';
import { connect } from 'react-redux';
import { initialState, reducer } from './store/reducer';
import * as actions from './store/actions';
import CreditCard from './../../components/AddCard/CreditCard/CreditCard';
import SelectCardColor from '../../components/AddCard/SelectCardColor/SelectCardColor';
import SelectTextColor from '../../components/AddCard/SelectTextColor/SelectTextColor';
import FormDataCard from '../../components/AddCard/FormDataCard/FormDataCard';

import * as actionsRedux from './../../store/actions/card';


const AddCard = ( props ) => {

    const [state, dispatch] = useReducer(reducer, initialState )

    const submitHandler = (e) => {
        e.preventDefault();
        
        if(!props.isAuthenticated) {
            props.history.push('/login')
            return;
        }

        const form_data = {
            userId: props.userId,
            bank_name: state.add_form.bank_name.value,
            number_card: state.add_form.number_card.value,
            name_card: state.add_form.your_name.value,
            theme_card: {
                background: state.credit_card.colorCard,
                color: state.credit_card.colorText
            },
            transaction: {
                inc: 0,
                exp: 0
            }
        }

        props.onSubmitCard(form_data, props.token)
        
    }

    return (
        <div className={classes.AddCard}>
            <h2 className="Text-center">Add your Card</h2>
            <div className={classes.AddCard_Container}>

                <CreditCard state={state} />

                <SelectCardColor 
                    state={state} 
                    clicked={ (item) => dispatch( actions.selectThemeColor(item) ) }
                />

                <SelectTextColor 
                    state={state}
                    clicked={(item) => dispatch( actions.selectTextColor(item) ) }
                />

                <FormDataCard 
                    state={state}
                    inputHandler={(value, inputName) => dispatch( actions.inputHandler(value, inputName) ) }
                    submitHandler={submitHandler}
                />

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

const mapDispatchToProps = dispatch => {
    return {
        onSubmitCard: ( form_data, token ) => dispatch( actionsRedux.addCardInit(form_data, token) ) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCard) ;