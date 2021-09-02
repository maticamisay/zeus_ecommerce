import React from 'react';
import Item from './Item';

const ItemList = ({ todos }) => todos.map((item) => <Item key={item.id} item={item} />)

export default ItemList
