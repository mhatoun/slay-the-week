import React from 'react';

const List = ({name}) => {
  return (
    <div className='list flex-grow-1 rounded-corners'>
      <div className='list-title'>
        {name}
      </div>
    </div>
  );
};

export default List;
