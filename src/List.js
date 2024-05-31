import React from 'react';

const List = ({name}) => {
  return (
    <div className='list flex-grow-1 rounded-corners border-mild'>
      <div className='list-title font-pop'>
        {name}
      </div>
    </div>
  );
};

export default List;
