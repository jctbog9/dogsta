import React from 'react';

const NumberField = props => {

  return(
    <div>
      <label>{props.label}</label>
      <input onChange={props.handleChange} type="number" value={props.value}/>
    </div>
  )
}

export default NumberField;
