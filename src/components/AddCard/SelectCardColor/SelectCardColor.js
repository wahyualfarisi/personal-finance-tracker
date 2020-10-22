import React, { Fragment } from 'react';
import classes from './SelectCardColor.module.css';
import BtnCircleColor from './../../UI/Buttons/BtnCircleColor/BtnCircleColor';

const SelectCardColor = ( { state, clicked } ) => {
    return (
        <Fragment>
            <p>Select Card Color</p>
            <div className={classes.AddCard_Select_Color}>
                {state.card_collections.map((item, i) => (
                    <BtnCircleColor 
                        selectedColor={state.credit_card.colorCard}
                        key={i} 
                        type={item} 
                        selected={ state.credit_card.colorCard === item }
                        clicked={ () => clicked(item)  }
                    />
                ))}
            </div>
        </Fragment>
    )
}

export default SelectCardColor;