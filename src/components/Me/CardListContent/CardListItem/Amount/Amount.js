import React from 'react';
import classes from './Amount.module.css';
import { formatRupiah } from './../../../../../utility/Utility';

export const Amount = ( { icon, titleItem, amountItem } ) => {
    return (
        <div className={classes.CardListItem_Amount_Item}>
            <div className={icon}></div>
            <h3 className={classes.TitleItem}>{titleItem}</h3>
            <p className={classes.AmountItem}>Rp. { formatRupiah(amountItem)}</p>
        </div>
    )
}
