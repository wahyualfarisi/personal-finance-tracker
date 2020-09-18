import React from 'react';
import classes from './BtnCircleColor.module.css';
import classesColors from './../../Cards/CreditCard/CreditCard.module.css';

const BtnCircleColor = props => {

    let type = null;
    switch(props.type)
    {
        case 'one':
            type = classesColors.Type_one;
        break;

        case 'two':
            type = classesColors.Type_two
        break;

        case 'three':
            type = classesColors.Type_three
        break;

        case 'four':
            type = classesColors.Type_four;
        break;

        case 'five':
            type = classesColors.Type_five
        break;

        case 'six':
            type = classesColors.Type_six
        break;

        default:
            type = classesColors.Type_one;
    }

    return (
        <div className={[classes.BtnCircleColor, type].join(' ')} onClick={props.clicked}>  </div>
    )
}

export default BtnCircleColor;