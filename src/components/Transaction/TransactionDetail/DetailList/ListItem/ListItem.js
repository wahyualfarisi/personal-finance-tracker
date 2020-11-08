import React from 'react';
import './ListItem.css';

const ListItem = () => {
    
    return (
        <li className="Transaction_Detail-item">
            <div className="Transaction_Detail-item_heading">
                <h6>Income</h6>
                <p>2020-09-09 10:50:00</p>
            </div>

            <div className="Transaction_Detail-body">
                <div className="Transaction_Detail-item_value">
                    <p>Rent Car</p>
                    <p>120.000</p>
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