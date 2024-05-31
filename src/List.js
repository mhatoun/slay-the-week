import React from 'react';

const List = ({name, items}) => {
  return (
    <div className='list flex-grow-1 rounded-corners border-contrast'>
      <div className='list-title font-pop'>
        {name}
      </div>
      {items && items.map((item, index) => {
        return (
          <div key={index} className='list-item'>
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default List;
