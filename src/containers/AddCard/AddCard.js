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
            bank_name: state.add_form.bank_name.value,
            number: state.add_form.number_card.value,
            author_name: state.add_form.your_name.value,
            card_color: state.credit_card.colorCard,
            text_color: state.credit_card.colorText,
           
        }

        props.onSubmitCard(form_data)
        
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
        onSubmitCard: ( form_data ) => dispatch( actionsRedux.addCardInit(form_data) ) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCard) ;