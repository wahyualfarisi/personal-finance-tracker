import React, { useReducer, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import classes from './AddCard.module.css';
import { connect } from 'react-redux';
import { initialState, reducer } from './store/reducer';
import * as actions from './store/actions';
import CreditCard from './../../components/AddCard/CreditCard/CreditCard';
import SelectCardColor from '../../components/AddCard/SelectCardColor/SelectCardColor';
import SelectTextColor from '../../components/AddCard/SelectTextColor/SelectTextColor';
import FormDataCard from '../../components/AddCard/FormDataCard/FormDataCard';
import Spinner from './../../components/UI/Spinner/Spinner';


//action from redux
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

    let addCard = (
        <Fragment>
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
        </Fragment>
    )

    if(props.isLoading){
        addCard = <Spinner />
    }

    let redirectIfSuccessAdd = null;

    if(props.response){
        if( props.response.status ) {
            props.onClearResponse();
            redirectIfSuccessAdd = <Redirect to="/" />
        }
    }

    return (
        <div className={classes.AddCard}>
            {redirectIfSuccessAdd}
            <h2 className="Text-center">Add your Card</h2>
            <div className={classes.AddCard_Container}>
                {addCard}
            </div>
        </div>
    )
} 


const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
        userId: state.auth.userId,
        token: state.auth.token,
        
        isLoading: state.card.isLoading,
        error: state.card.error,
        response: state.card.response
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmitCard: ( form_data ) => dispatch( actionsRedux.addCardInit(form_data) ),
        onClearResponse: () => dispatch( actionsRedux.ClearResponse() )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCard) ;