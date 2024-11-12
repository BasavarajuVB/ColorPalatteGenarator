import React from 'react';
import { FaLock, FaLockOpen, FaCopy } from 'react-icons/fa';
import { toast } from 'react-toastify';

import '../App.css'

const ColorBlock = ({ color, isLocked, onLockToggle }) => {
  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(color);
      toast.success(`Copied ${color} to clipboard!`);
    } catch {
      toast.error('Failed to copy color code');
    }
  };

  return (
    <div className="color-block" style={{ backgroundColor: color }}>
      <button className="lock-button" onClick={onLockToggle}>{isLocked ? <FaLock /> : <FaLockOpen />}</button>
      <button className="copy-button" onClick={handleCopyClick}><FaCopy /> <span className="hex-code">{color}</span></button>
    </div>
  );
};

export default ColorBlock;
