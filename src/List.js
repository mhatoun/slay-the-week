import React from 'react';

const List = ({name, listKey, items, handleDragStart, handleDrop, handleDragOver}) => {
  return (
    <div className='list flex-grow-1 rounded-corners border-contrast flex-item'>
      <div className='list-title font-pop'>
        {name}
      </div>
      {items && items.map((item, index) => {
        return (
          <div 
            key={index} className='list-item grab flex-item'
            draggable='true'
            onDragStart={(e) => handleDragStart(e, index, listKey)}
            onDrop={(e) => handleDrop(e, index, listKey)}
            onDragOver={(e) => handleDragOver(e)}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default List;
