import React, { Component } from 'react';
import classes from './AddCard.module.css';
import CreditCard from '../../components/UI/Cards/CreditCard/CreditCard';
import BtnCircleColor from '../../components/UI/Buttons/BtnCircleColor/BtnCircleColor';
import Input from '../../components/UI/Input/Input';
import Btn from '../../components/UI/Buttons/Btn/Btn';
import { onCheckValidity } from './../../utility/Utility';
import { connect } from 'react-redux';
import axios from './../../axios-instance';

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
                    minLength: 3
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
        isLoading: false
    }

    

    onChangeHandler = (event, inputName) => {
        const updatedAddForm = { ...this.state.add_form };

        const updatedInput = { ...updatedAddForm[inputName] }
        updatedInput.value = event.target.value;
        updatedInput.valid = onCheckValidity(event.target.value, updatedInput.validation)
        updatedInput.touched = true;

        updatedAddForm[inputName] = updatedInput;

        let formIsValid = true;
        for(let key in updatedAddForm) {
            formIsValid = updatedAddForm[key].valid && formIsValid   
        }
        
        this.setState({
            add_form: updatedAddForm,
            formIsValid: formIsValid
        });
    }

    onColorHandler = (typeColor) => {
        this.setState({
            credit_card: {
                ...this.state.credit_card,
                colorCard: typeColor
            }
        })
    }

    onTextColorHandler = color => {
        this.setState({
            credit_card: {
                ...this.state.credit_card,
                colorText: color
            }
        })
    }

    onSubmitHandler = (e) => {
        e.preventDefault();

        if(!this.props.isAuthenticated){
            this.props.history.push('/login');
            return;
        }

        this.setState({ isLoading: true })

        const form_data = {
            userId: this.props.userId,
            bank_name: this.state.add_form.bank_name.value,
            number_card: this.state.add_form.number_card.value,
            name_card: this.state.add_form.your_name.value,
            theme_card: {
                background: this.state.credit_card.colorCard,
                color: this.state.credit_card.colorText
            }
        }

        axios.post(`/card_collections.json?auth=${this.props.token}`, form_data)
             .then(res => {
                this.setState({ isLoading: false })
                console.log(this.props.history.push('/'))
             })        
             .catch(err => {
                this.setState({ isLoading: false })
                 console.log(err);
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
                <h2 className="Text-center">Add your Card</h2>
    
                <div className={classes.AddCard_Container}>
                    <div className={classes.AddCard_CreditCard}>
                        <CreditCard 
                            bank_name={this.state.add_form.bank_name.value}
                            card_author={this.state.add_form.your_name.value}
                            card_number={this.state.add_form.number_card.value}
                            color={this.state.credit_card.colorText}
                            type={this.state.credit_card.colorCard}
                        />
                    </div>

                    <p>Select Card Color</p>
                    <div className={classes.AddCard_Select_Color}>
                        {this.state.card_collections.map((item, i) => (
                            <BtnCircleColor 
                                selectedColor={this.state.credit_card.colorCard}
                                key={i} 
                                type={item} 
                                clicked={() => this.onColorHandler(item)} 
                            />
                        ))}
                    </div>

                    <p>Select Text Color</p>
                    <div className="d-flex">
                        <Btn clicked={() => this.onTextColorHandler('white')} >White</Btn>
                        <Btn clicked={() => this.onTextColorHandler('black')} >Black</Btn>
                    </div>
    
                    <form onSubmit={this.onSubmitHandler} className={[classes.AddCard_Form, 'mt-10'].join(' ')}>
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
                                changed={(event) => this.onChangeHandler(event, item.id) }
                           />
                       ))}

                       <button 
                            disabled={!this.state.formIsValid || this.state.isLoading} 
                            className={classes.AddCard_Button} 
                            type="submit">
                            {this.state.isLoading ? 'Loading': 'Submit'}
                        </button>
                    </form>
    
                </div>
    
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
        userId: state.auth.userId,
        token: state.auth.token
    }
}

export default connect(mapStateToProps)(AddCard) ;