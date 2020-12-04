import React from 'react';
import {MdEdit, MdDelete} from "react-icons/md";


const ExpenseItem = ({expense, handleDelete, handleEdit}) => {

    const {id, charge, amount} = expense

    return (
        <li className="item">
            <div className="info">
                <span className="expense">{charge}</span>
                <span className="amount">${amount}</span>
            </div>
            <div>
                <button aria-label="edit button" className="edit-btn" onClick={() => handleEdit(id)}>
                    <MdEdit />
                </button>
                <button aria-label="delete-button button" className="clear-btn" onClick={() => handleDelete(id)}>
                    <MdDelete />
                </button>
            </div>
        </li>
    );
};

export default ExpenseItem;