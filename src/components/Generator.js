import React, { useState } from 'react';
import { FaMagic, FaSave } from 'react-icons/fa';
import ColorPalette from './ColorPalette';
import { toast } from 'react-toastify';

import '../App.css'

const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 16)];
  return color;
};

const Generator = ({ onSave }) => {
  const [colors, setColors] = useState(Array(5).fill().map(() => ({ hex: generateRandomColor(), isLocked: false })));
  const [paletteName, setPaletteName] = useState('');

  const generateNewColors = () => setColors(colors.map(color => color.isLocked ? color : { hex: generateRandomColor(), isLocked: false }));
  const handleSave = () => {
    if (!paletteName.trim()) return toast.error('Please provide a name for the palette!');
    onSave({ name: paletteName, colors });
    setPaletteName('');
    toast.success('Palette saved successfully!');
  };
  const toggleLock = (index) => setColors(colors.map((color, i) => i === index ? { ...color, isLocked: !color.isLocked } : color));

  return (
    <div className="generator">
      <div className="button-container">
        <button onClick={generateNewColors} className="generate-button"><FaMagic /> Generate</button>
        <button onClick={handleSave} className="save-button"><FaSave /> Save</button>
      </div>
      <ColorPalette colors={colors} name={paletteName} isEditable onNameChange={setPaletteName} onLockToggle={toggleLock} />
    </div>
  );
};

export default Generator;
