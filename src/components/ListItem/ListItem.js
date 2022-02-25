import React, { useContext, useState } from 'react';
import { CategoryIdContext } from '../../contexts/CategoryIdContext';
import './listItem.css';
import Item from '../Item/Item';

const ListItem = ({props, title}) => {
    const [CategoryId] = useContext(CategoryIdContext);
    props.forEach(elem => {
        if(elem.collection !== 'top-products') {
            if(CategoryId === 'women' || CategoryId === 'men' || CategoryId === 'kids') {
                if(CategoryId === 'women') {
                    const womanProducts = props.filter(prop => prop.gender === 'women')
                    props = womanProducts;
                } else if (CategoryId === 'men') {
                    const menProducts = props.filter(prop => prop.gender === 'men');
                    props = menProducts;
                } else {
                    const kidsProducts = props.filter(prop => prop.gender === 'kids');
                    props = kidsProducts;
                }
            }
        }
    });

    return (
        <div className='items-container'>
            <h2 className='items-container__title'>{title}</h2>
            <div className='items'>
                {props.map(product => {
                    return(
                        <Item 
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            img={product.img}
                            id={product.id}
                            description={product.description}
                            gender={product.gender}
                            color={product.color}
                            brand={product.brand}
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default ListItem;