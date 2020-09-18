import React from 'react';
import classes from './CreditCard.module.css';

const CreditCard = props => {

    let type = null;

    switch(props.type)
    {
        case 'one':
            type = classes.Type_one;
        break;

        case 'two':
            type = classes.Type_two
        break;

        case 'three':
            type = classes.Type_three
        break;

        case 'four':
            type = classes.Type_four;
        break;

        case 'five':
            type = classes.Type_five
        break;

        case 'six':
            type = classes.Type_six
        break;


        default:
            type = classes.Type_one;
    }

    let color = null
    switch(props.color)
    {
        case 'white':
            color = classes.Text_white;
        break;

        case 'black':
            color = classes.Text_black;
        break;

        default:
            color = classes.Text_black
        
    }

    return (
        <div className={[classes.CreditCard, type].join(' ')} >
            <header>
                <div className={classes.CreditCard_Logo}>
                    <div>
                        <span>AL</span>
                    </div>
                    <span>{props.bank_name} </span>
                </div>
            </header>
            <div className={classes.CreditCard_Icon_Sim}></div>
            <div className={[classes.CreditCard_Number, color].join(' ')}> {props.card_number} </div>
            <div className={[classes.CreditCard_Author, color].join(' ')}>{props.card_author} </div>
        </div>
    )
}

export default CreditCard;