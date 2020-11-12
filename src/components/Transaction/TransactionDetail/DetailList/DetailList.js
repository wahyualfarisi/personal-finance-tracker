import React from 'react';
import './DetailList.css';
import ListItem from './ListItem/ListItem';

const DetailList = ( { item } ) => {
    
    return (
        <ul className="Transaction_Detail-list">
            <ListItem {...item} />
        </ul>
    )
}

export default DetailList;