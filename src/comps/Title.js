import React from 'react';
import { FaReact } from 'react-icons/fa';
import { SiFirebase } from 'react-icons/si'

const Title = () => {
  return (
    <div className="title">
      <h1>PictoGram</h1>
      <h2>Gallery</h2>
      <FaReact className="react-icon"/>
      <SiFirebase className="firebase-icon"/>
      <p>Add a picture on this canvas.</p>
    </div>
  )
}

export default Title;