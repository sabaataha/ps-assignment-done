import React from 'react';
import './Loading.css'; 


function Loading({ message = "Loading..." }) {
  return <p className='loadingPage'>{message}</p>;
}

export default Loading;