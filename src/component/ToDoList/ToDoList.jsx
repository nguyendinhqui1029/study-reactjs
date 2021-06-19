import React from 'react';
import PropTypes from 'prop-types';

ToDoList.propTypes = {
  listToDo: PropTypes.array,
  clickToItem: PropTypes.func
};

ToDoList.defaultProps = {
  listToDo: [],
  clickToItem: null,
}


function ToDoList(props) {
  const { listToDo, clickToItem } = props;
  function handleEventClick(item) {
    if (clickToItem) {
      clickToItem(item);
    }
  }

  return (
    <ul>
      {listToDo.map(item =>
        <li key={item.id} onClick={() => handleEventClick(item)}>{item.title}</li>
      )}
    </ul>
  );
}

export default ToDoList;