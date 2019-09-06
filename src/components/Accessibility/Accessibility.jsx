import React from 'react';
import ListItem from './ListItem.jsx';

const items = [{"id":1,"term":'Nonu', "description":"data language"}]

function Accessibility() {
  return (
    <dl>
      {items.map(item => (
        <ListItem item={item} key={item.id} />
      ))}
    </dl>
  );
}

export default Accessibility;