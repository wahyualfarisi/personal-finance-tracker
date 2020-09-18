import React, { Component } from 'react';
import classes from './AddCard.module.css';
import CreditCard from '../../components/UI/Cards/CreditCard/CreditCard';
import BtnCircleColor from '../../components/UI/Buttons/BtnCircleColor/BtnCircleColor';
import Input from '../../components/UI/Input/Input';

class AddCard extends Component {

    state = {
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
            your_name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                label: 'Enter Your Name',
                valid: false,
                touched: false
            },
            number_card: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter Card Number'
                },
                value: '',
                validation: {
                    required: true
                },
                label: 'Enter Card Number',
                valid: false,
                touched: false
            },

        },
        credit_card: {
            bank_name: 'Bank Name',
            card_author: 'Your Name',
            card_number: '0000 0000 0000 0000',
            colorCard: 'one',
            colorText: 'white'
        },
        card_collections: ['one','two','three','four','five','six']
    }

    onChangeHandler = (event, inputName) => {

    }

    onColorHandler = (typeColor) => {
        this.setState({
            credit_card: {
                ...this.state.credit_card,
                colorCard: typeColor
            }
        })
    }

    render(){
        const formElementArr = [];

        for(let key in this.state.add_form){
            formElementArr.push({
                id: key,
                config: this.state.add_form[key]
            }) 
        }

        return (
            <div className={classes.AddCard}>
                <h2 className="Text-center">Add Card</h2>
    
                <div className={classes.AddCard_Container}>
                    <CreditCard 
                        bank_name={this.state.credit_card.bank_name}
                        card_author={this.state.credit_card.card_author}
                        card_number={this.state.credit_card.card_number}
                        color={this.state.credit_card.colorText}
                        type={this.state.credit_card.colorCard}
                    />

                    <p>Select Card Color</p>
                    <div className={classes.AddCard_Select_Color}>
                        {this.state.card_collections.map((item, i) => (
                            <BtnCircleColor key={i} type={item} clicked={() => this.onColorHandler(item)} />
                        ))}
                    </div>

                    <p>Select Text Color</p>
                    <div className="d-flex">
                        <BtnCircleColor />
                        <BtnCircleColor />
                    </div>
    
                    <form className={classes.AddCard_Form}>
                       {formElementArr.map(item => (
                           <Input 
                                key={item.id}
                                label={item.config.label}
                                elementType={item.config.elementType}
                                elementConfig={item.config.elementConfig}
                                value={item.config.value}
                                invalid={item.config.invalid}
                                shouldValidate={item.config.shouldValidate}
                                touched={item.config.touched}
                                changed={(event) => this.onChangeHandler(event, item.id) }
                           />
                       ))}
                    </form>
    
                </div>
    
            </div>
        );
    }
}



export default AddCard;