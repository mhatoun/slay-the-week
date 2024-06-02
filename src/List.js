import StaticCheckmark from './StaticCheckmark';

const List = ({name, listKey, items, handleDragStart, handleDrop, handleDragOver, draggingOverListKey, handleDragEnterList, handleDragLeaveList, handleDragOverList, displayCheckmarks}) => {

  return (
    <div 
      className={`list display-flex flex-direction-column flex-grow-1 rounded-corners ${draggingOverListKey == listKey ? 'dragged-over' : ''}`} 
      onDragEnter={ () => handleDragEnterList(listKey) }
      onDragLeave={ handleDragLeaveList }
      onDragOver={ () => handleDragOverList(listKey) }>
      <div 
        className='list-title font-pop' 
        onDrop={(e) => handleDrop(e, 0, listKey)}
        onDragOver={(e) => handleDragOver(e)}>
        {name}
      </div>
      {items && items.map((item, index) => {
        return (

          <div 
            key={index} className='list-item grab display-flex flex-between'
            draggable='true'
            onDragStart={(e) => handleDragStart(e, index, listKey)}
            onDrop={(e) => handleDrop(e, index, listKey)}
            onDragOver={(e) => handleDragOver(e)}
          >
            {displayCheckmarks && 
              <div className='checkmark'>
                <StaticCheckmark size={30} />
              </div>
            }

            <div className='flex-grow-1 list-item-text'>
              {item}
            </div>
          </div>

        );
      })}
      <div 
        className='flex-grow-1 list-end-dropzone'
        onDrop={(e) => handleDrop(e, items.length, listKey)}
        onDragOver={(e) => handleDragOver(e)}>
      </div>
    
    </div>
  );
};

export default List;
