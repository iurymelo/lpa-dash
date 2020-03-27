import React from 'react'

const Error = ({touched, message}) => {
  if (!touched) {
    return null
  }
  if (message) {
    return <div className='form-message invalid' style={{color: 'red'}}>{message}</div>
  }
  return null
};

export default Error;