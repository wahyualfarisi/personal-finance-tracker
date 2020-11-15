import React from 'react';
import './ListItem.css';
import { formatRupiah } from './../../../../../utility/Utility';

const ListItem = (props) => {
    let type;

    props.type === 'inc' ? type = 'Income' : type = 'Expense'

    return (
        <li className="Transaction_Detail-item">
            <div className="Transaction_Detail-item_heading">
                <h6>{type}</h6>
                <p>{props.created_at}</p>
            </div>

            <div className="Transaction_Detail-body">
                <div className="Transaction_Detail-item_value">
                    <p>{props.description}</p>
                    <p>{formatRupiah(props.amount)}</p>
                </div>
                <div className="Transaction_Detail-item_action">
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
        </li>
    );
}

export default ListItem;