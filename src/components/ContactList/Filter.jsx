
import React from "react";
import s from './ContactList.module.css';

const Filter = ({ value, onChangeFilter }) => {
    return (
      <div className={s.filter}>
        <label>
          Find contacts by name
          <input
            type="text"
            value={value}
            onChange={e => onChangeFilter(e.target.value)}
          />
        </label>
      </div>
    );
  };
 
  export default Filter;