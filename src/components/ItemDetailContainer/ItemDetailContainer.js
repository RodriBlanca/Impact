import React from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './itemDetailContainer.css';

const ItemDetailContainer = ({handleAddProducts}) => {

    return (
        <div className='detail-container'>
            <ItemDetail handleAddProducts={handleAddProducts}/>
        </div>
    );
}

export default ItemDetailContainer;