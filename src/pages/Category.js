import React from 'react';
import ListItem from '../components/ListItem/ListItem';

const Category = ({props, title}) => {
    return (
        <>
            <ListItem props={props} title={title}/>
        </>
    );
}

export default Category;