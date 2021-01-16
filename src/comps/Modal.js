import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleChange = (e) => {
    if(!e.target.classList.contains("modal-img")) {
      setSelectedImg(null);
    }
  }

  return (
    <motion.div className="backdrop" 
      onClick={handleChange}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
    >
      <motion.img className="modal-img" src={selectedImg} alt="Modal Img"
        initial={{y: "-100vh"}}
        animate={{y: 0}}
      />
    </motion.div>
  );
};

export default Modal;