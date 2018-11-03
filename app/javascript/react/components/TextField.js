import React from 'react';

const TextField = props => {

  return(
    <div>
      <label>{props.label}</label>
      <input onChange={props.handleChange} type="text" value={props.value}/>
    </div>
  )
}

export default TextField;
