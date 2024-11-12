


// import React, { useState, useEffect } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import { 
//   FaLock, 
//   FaLockOpen, 
//   FaTrash, 
//   FaMagic, 
//   FaSave, 
//   FaMoon, 
//   FaSun,
//   FaPalette,
//   FaCopy 
// } from 'react-icons/fa';
// import 'react-toastify/dist/ReactToastify.css';

// const generateRandomColor = () => {
//   const letters = '0123456789ABCDEF';
//   let color = '#';
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// };

// const useLocalStorage = (key, initialValue) => {
//   const [value, setValue] = useState(() => {
//     try {
//       const item = window.localStorage.getItem(key);
//       return item ? JSON.parse(item) : initialValue;
//     } catch (error) {
//       return initialValue;
//     }
//   });

//   useEffect(() => {
//     window.localStorage.setItem(key, JSON.stringify(value));
//   }, [key, value]);

//   return [value, setValue];
// };

// const ColorBlock = ({ color, isLocked, onLockToggle }) => {
//   const handleCopyClick = async () => {
//     try {
//       await navigator.clipboard.writeText(color);
//       toast.success(`Copied ${color} to clipboard!`);
//     } catch (err) {
//       toast.error('Failed to copy color code');
//     }
//   };

//   return (
//     <div className="color-block" style={{ backgroundColor: color }}>
//       <button className="lock-button" onClick={onLockToggle}>
//         {isLocked ? <FaLock /> : <FaLockOpen />}
//       </button>
//       <button className="copy-button" onClick={handleCopyClick}>
//         <FaCopy /> <span className="hex-code">{color}</span>
//       </button>
//     </div>
//   );
// };

// const ColorPalette = ({ 
//   colors, 
//   name, 
//   isEditable, 
//   onDelete, 
//   onLockToggle, 
//   onNameChange 
// }) => {
//   return (
//     <div className="palette">
//       {isEditable ? (
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => onNameChange(e.target.value)}
//           placeholder="Palette Name"
//           className="palette-name-input"
//         />
//       ) : (
//         <h3 className="palette-title">{name}</h3>
//       )}
//       <div className="colors-container">
//         {colors.map((color, index) => (
//           <ColorBlock
//             key={index}
//             color={color.hex}
//             isLocked={color.isLocked}
//             onLockToggle={() => onLockToggle && onLockToggle(index)}
//           />
//         ))}
//       </div>
//       {onDelete && (
//         <button className="delete-button" onClick={onDelete}>
//           <FaTrash /> Delete
//         </button>
//       )}
//     </div>
//   );
// };

// const Generator = ({ onSave }) => {
//   const [colors, setColors] = useState(Array(5).fill().map(() => ({
//     hex: generateRandomColor(),
//     isLocked: false
//   })));
//   const [paletteName, setPaletteName] = useState('');

//   const generateNewColors = () => {
//     setColors(colors.map(color => ({
//       hex: color.isLocked ? color.hex : generateRandomColor(),
//       isLocked: color.isLocked
//     })));
//   };

//   const handleSave = () => {
//     if (!paletteName.trim()) {
//       toast.error('Please provide a name for the palette!');
//       return;
//     }
//     onSave({ name: paletteName, colors });
//     setPaletteName('');
//     toast.success('Palette saved successfully!');
//   };

//   const toggleLock = (index) => {
//     setColors(colors.map((color, i) => 
//       i === index ? { ...color, isLocked: !color.isLocked } : color
//     ));
//   };

//   return (
//     <div className="generator">
//       <div className="button-container">
//         <button onClick={generateNewColors} className="generate-button">
//           <FaMagic /> Generate
//         </button>
//         <button onClick={handleSave} className="save-button">
//           <FaSave /> Save
//         </button>
//       </div>
//       <ColorPalette
//         colors={colors}
//         name={paletteName}
//         isEditable={true}
//         onNameChange={setPaletteName}
//         onLockToggle={toggleLock}
//       />
//     </div>
//   );
// };

// function App() {
//   const [savedPalettes, setSavedPalettes] = useLocalStorage('palettes', []);
//   const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   const handleSavePalette = (palette) => {
//     setSavedPalettes([...savedPalettes, palette]);
//   };

//   const handleDeletePalette = (index) => {
//     setSavedPalettes(savedPalettes.filter((_, i) => i !== index));
//   };

//   useEffect(() => {
//     document.body.className = darkMode ? 'dark-body' : 'light-body';
//   }, [darkMode]);

//   return (
//     <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
//       <button onClick={toggleDarkMode} className="theme-toggle">
//         {darkMode ? <FaSun /> : <FaMoon />}
//       </button>
//       <h1><FaPalette /> Color Palette</h1>
//       <Generator onSave={handleSavePalette} />
//       <div className="palette-list">
//         <h2>Saved Palettes ({savedPalettes.length})</h2>
//         {savedPalettes.map((palette, index) => (
//           <ColorPalette
//             key={index}
//             colors={palette.colors}
//             name={palette.name}
//             onDelete={() => handleDeletePalette(index)}
//           />
//         ))}
//       </div>
//       <ToastContainer 
//         position="bottom-right" 
//         theme={darkMode ? 'dark' : 'light'}
//         autoClose={2000}
//       />
      //  <style>{`
      //   :root {
      //     --primary-color: #4a90e2;
      //     --secondary-color: #f8f9fa;
      //     --background-color: #ffffff;
      //     --text-color: #2c3e50;
      //     --border-color: #e1e1e1;
      //     --shadow-color: rgba(0, 0, 0, 0.1);
      //     --hover-color: #357abd;
      //   }

      //   .dark-mode {
      //     --primary-color: #64b5f6;
      //     --secondary-color: #1e1e1e;
      //     --background-color: #121212;
      //     --text-color: #ffffff;
      //     --border-color: #404040;
      //     --shadow-color: rgba(0, 0, 0, 0.3);
      //     --hover-color: #90caf9;
      //   }

      //   * {
      //     box-sizing: border-box;
      //     margin: 0;
      //     padding: 0;
      //     transition: background-color 0.3s, color 0.3s;
      //   }

      //   .light-body {
      //     background-color: var(--background-color);
      //     color: var(--text-color);
      //     min-height: 100vh;
      //     transition: background-color 0.3s ease;
      //   }

      //   .dark-body {
      //     background-color: #121212;
      //     color: #ffffff;
      //     min-height: 100vh;
      //     transition: background-color 0.3s ease;
      //   }

      //   body {
      //     font-family: 'Inter', sans-serif;
      //     line-height: 1.6;
      //     margin: 0;
      //     padding: 0;
      //   }

      //   .App {
      //     min-height: 100vh;
      //     padding: 1rem;
      //     max-width: 1200px;
      //     margin: 0 auto;
      //   }

      //   .dark-mode h1,
      //   .dark-mode h2,
      //   .dark-mode h3,
      //   .dark-mode p {
      //     color: #ffffff;
      //   }

      //   .theme-toggle {
      //     position: fixed;
      //     top: 1rem;
      //     right: 1rem;
      //     background: var(--primary-color);
      //     border: none;
      //     border-radius: 50%;
      //     width: 40px;
      //     height: 40px;
      //     cursor: pointer;
      //     display: flex;
      //     align-items: center;
      //     justify-content: center;
      //     color: white;
      //     font-size: 1.2rem;
      //     box-shadow: 0 2px 8px var(--shadow-color);
      //     transition: transform 0.3s;
      //     z-index: 1000;
      //   }

      //   .theme-toggle:hover {
      //     transform: scale(1.1);
      //   }

      //   h1 {
      //     text-align: center;
      //     margin: 1rem 0;
      //     display: flex;
      //     align-items: center;
      //     justify-content: center;
      //     gap: 0.5rem;
      //     font-size: 2rem;
      //   }

      //   .button-container {
      //     display: flex;
      //     gap: 1rem;
      //     margin-bottom: 1rem;
      //     justify-content: center;
      //   }

      //   .generator {
      //     background: var(--secondary-color);
      //     padding: 1.5rem;
      //     border-radius: 12px;
      //     box-shadow: 0 4px 12px var(--shadow-color);
      //     margin-bottom: 1.5rem;
      //   }

      //   .dark-mode .generator {
      //     background: #1e1e1e;
      //   }

      //   .colors-container {
      //     display: grid;
      //     grid-template-columns: repeat(5, 1fr);
      //     gap: 0.5rem;
      //     margin: 1rem 0;
      //   }

      //   .color-block {
      //     aspect-ratio: 1;
      //     border-radius: 8px;
      //     display: flex;
      //     flex-direction: column;
      //     justify-content: space-between;
      //     padding: 0.75rem;
      //     box-shadow: 0 2px 8px var(--shadow-color);
      //     transition: transform 0.2s;
      //   }

      //   .color-block:hover {
      //     transform: scale(1.02);
      //   }

      //   .copy-button {
      //     background: rgba(255, 255, 255, 0.9);
      //     border: none;
      //     border-radius: 4px;
      //     padding: 0.4rem;
      //     cursor: pointer;
      //     display: flex;
      //     align-items: center;
      //     gap: 0.3rem;
      //     font-size: 0.85rem;
      //     transition: background-color 0.2s;
      //   }

      //   .dark-mode .copy-button {
      //     background: rgba(255, 255, 255, 0.95);
      //     color: #000000;
      //   }

      //   .copy-button:hover {
      //     background: white;
      //   }

      //   .hex-code {
      //     font-family: monospace;
      //   }

      //   .lock-button {
      //     background: rgba(255, 255, 255, 0.9);
      //     border: none;
      //     border-radius: 50%;
      //     width: 28px;
      //     height: 28px;
      //     cursor: pointer;
      //     display: flex;
      //     align-items: center;
      //     justify-content: center;
      //   }

      //   .dark-mode .lock-button {
      //     background: rgba(255, 255, 255, 0.95);
      //     color: #000000;
      //   }

      //   .generate-button,
      //   .save-button {
      //     padding: 0.6rem 1.2rem;
      //     border: none;
      //     border-radius: 6px;
      //     cursor: pointer;
      //     font-weight: 600;
      //     display: flex;
      //     align-items: center;
      //     gap: 0.5rem;
      //     font-size: 0.9rem;
      //     transition: transform 0.2s, background-color 0.2s;
      //     color: white;
      //   }

      //   .generate-button {
      //     background: var(--primary-color);
      //   }

      //   .save-button {
      //     background: #28a745;
      //   }

      //   .generate-button:hover,
      //   .save-button:hover {
      //     transform: translateY(-2px);
      //   }

      //   .palette {
      //     background: var(--secondary-color);
      //     margin: 1rem 0;
      //     padding: 1rem;
      //     border-radius: 8px;
      //     box-shadow: 0 2px 8px var(--shadow-color);
      //   }

      //   .palette-title {
      //     position: relative;
      //     display: inline-block;
      //     margin-bottom: 0.75rem;
      //     font-size: 1.1rem;
      //   }

      //   .palette-title::after {
      //     content: '';
      //     position: absolute;
      //     bottom: -2px;
      //     left: 0;
      //     width: 0;
      //     height: 2px;
      //     background: var(--primary-color);
      //     transition: width 0.3s;
      //   }

      //   .palette:hover .palette-title::after {
      //     width: 100%;
      //   }

      //   .dark-mode .palette {
      //     background: #1e1e1e;
      //   }

      //   .palette-name-input {
      //     width: 100%;
      //     max-width: 300px;
      //     padding: 0.6rem;
      //     border: 2px solid var(--border-color);
      //     border-radius: 6px;
      //     font-size: 0.9rem;
      //     background: var(--background-color);
      //     color: var(--text-color);
      //   }

      //   .dark-mode .palette-name-input {
      //     background: #2c2c2c;
      //     color: #ffffff;
      //     border-color: #404040;
      //   }

      //   .delete-button {
      //     background: #dc3545;
      //     color: white;
      //     border: none;
      //     padding: 0.4rem 0.8rem;
      //     border-radius: 6px;
      //     cursor: pointer;
      //     display: inline-flex;
      //     align-items: center;
      //     gap: 0.3rem;
      //     font-size: 0.85rem;
      //     margin-top: 0.75rem;
      //     transition: transform 0.2s;
      //   }

      //   .delete-button:hover {
      //     transform: translateY(-2px);
      //   }

      //   @media (max-width: 768px) {
      //     .colors-container {
      //       grid-template-columns: repeat(3, 1fr);
      //     }

      //     .color-block {
      //       aspect-ratio: 1.2;
      //     }

      //     h1 {
      //       font-size: 1.5rem;
      //     }

      //     .generator,
      //     .palette {
      //       padding: 1rem;
      //     }
          
      //     .copy-button {
      //       padding: 0.3rem;
      //       font-size: 0.75rem;
      //     }
          
      //     .lock-button {
      //       width: 24px;
      //       height: 24px;
      //     }
      //   }

      //   @media (max-width: 480px) {
      //     .colors-container {
      //       grid-template-columns: repeat(2, 1fr);
      //       gap: 0.4rem;
      //     }

      //     .color-block {
      //       aspect-ratio: 1;
      //       padding: 0.5rem;
      //     }

      //     .button-container {
      //       flex-direction: column;
      //       gap: 0.5rem;
      //     }

      //     .generate-button,
      //     .save-button {
      //       width: 100%;
      //       justify-content: center;
      //     }
          
      //     .palette-name-input {
      //       font-size: 0.85rem;
      //     }
          
      //     .copy-button {
      //       font-size: 0.7rem;
      //     }
      //   }

      //   @keyframes fadeIn {
      //     from {
      //       opacity: 0;
      //       transform: translateY(10px);
      //     }
      //     to {
      //       opacity: 1;
      //       transform: translateY(0);
      //     }
      //   }

      //   .palette {
      //     animation: fadeIn 0.3s ease-out;
      //   }
      // `}</style>
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { FaMoon, FaSun, FaPalette } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
import Generator from './components/Generator';
import ColorPalette from './components/ColorPalette';

import './App.css'

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

function App() {
  const [savedPalettes, setSavedPalettes] = useLocalStorage('palettes', []);
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const handleSavePalette = (palette) => setSavedPalettes([...savedPalettes, palette]);
  const handleDeletePalette = (index) => setSavedPalettes(savedPalettes.filter((_, i) => i !== index));

  useEffect(() => {
    document.body.className = darkMode ? 'dark-body' : 'light-body';
  }, [darkMode]);

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <button onClick={toggleDarkMode} className="theme-toggle">
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
      <h1><FaPalette /> Color Palette</h1>
      <Generator onSave={handleSavePalette} />
      <div className="palette-list">
        <h2>Saved Palettes ({savedPalettes.length})</h2>
        {savedPalettes.map((palette, index) => (
          <ColorPalette
            key={index}
            colors={palette.colors}
            name={palette.name}
            onDelete={() => handleDeletePalette(index)}
          />
        ))}
      </div>
      <ToastContainer position="bottom-right" theme={darkMode ? 'dark' : 'light'} autoClose={2000} />
    </div>
  );
}

export default App;
