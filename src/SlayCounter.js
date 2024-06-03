import React from 'react';

const SlayCounter = ({ listItems, goal }) => {

  return (
    <div id='slay-counter' className='rounded-corners display-grid '>
      <div className='font-chunky slay-counter-header current'>Done</div>
      <div className='font-chunky slay-counter-header goal'>Goal</div>
      <div className='font-pop slay-counter-values current'>{ listItems.done.length }</div>
      <div className='font-pop slay-counter-values goal'>{ goal }</div>
    </div>
  );
};

export default SlayCounter;