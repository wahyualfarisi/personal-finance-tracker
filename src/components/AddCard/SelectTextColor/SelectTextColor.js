import React, { Fragment } from 'react';
import classes from './SelectTextColor.module.css';
import Btn from './../../UI/Buttons/Btn/Btn';

const SelectTextColor = ( { state, clicked } ) => {
    return (
        <Fragment>
            <p>Select Text Color</p>
            <div className={classes.AddCard_Select_Color}>
                {state.text_collections.map((item,i) => (
                    <Btn 
                        key={i}
                        selected={ state.credit_card.colorText === item }
                        clicked={() => clicked(item) }>
                        {item}
                    </Btn>
                ))}
            </div>
        </Fragment>
    )
}

export default SelectTextColor;