import React from 'react';
import ColorBlock from './ColorBlock';
import { FaTrash } from 'react-icons/fa';

import '../App.css'

const ColorPalette = ({ colors, name, isEditable, onDelete, onLockToggle, onNameChange }) => (
  <div className="palette">
    {isEditable ? (
      <input type="text" value={name} onChange={(e) => onNameChange(e.target.value)} placeholder="Palette Name" className="palette-name-input" />
    ) : (
      <h3 className="palette-title">{name}</h3>
    )}
    <div className="colors-container">
      {colors.map((color, index) => (
        <ColorBlock key={index} color={color.hex} isLocked={color.isLocked} onLockToggle={() => onLockToggle && onLockToggle(index)} />
      ))}
    </div>
    {onDelete && (
      <button className="delete-button" onClick={onDelete}><FaTrash /> Delete</button>
    )}
  </div>
);

export default ColorPalette;
