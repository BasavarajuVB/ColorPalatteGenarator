# Color Palette Generator

A modern, responsive React application for generating and managing color palettes with a sleek user interface and dark mode support.

## Features

- *Random Color Generation*: Create beautiful color combinations with a single click
- *Color Locking*: Lock specific colors while generating new combinations
- *Save Palettes*: Store your favorite color combinations with custom names
- *Dark/Light Mode*: Toggle between dark and light themes for comfortable viewing
- *Copy Colors*: Easily copy color hex codes to clipboard
- *Responsive Design*: Works seamlessly across desktop and mobile devices
- *Local Storage*: Automatically saves your palettes and theme preference

## Technologies Used

- React.js
- React Icons
- React Toastify
- Local Storage API
- CSS Grid & Flexbox

## Installation

1. Clone the repository
2. Install dependencies:
bash
npm install

3. Start the development server:
bash
npm start


## Usage

### Generating Palettes
- Click the "Generate" button to create random color combinations
- Lock colors you want to keep by clicking the lock icon
- Continue generating until you find your perfect palette

### Saving Palettes
1. Enter a name for your palette in the input field
2. Click the "Save" button to store it
3. View all saved palettes in the "Saved Palettes" section

### Managing Palettes
- Copy color codes by clicking the hex value
- Delete unwanted palettes using the trash icon
- Toggle dark/light mode with the theme button in the top-right corner

## Responsive Design

The application is fully responsive with optimized layouts for:
- Desktop (> 768px)
- Tablet (480px - 768px)
- Mobile (< 480px)

## Key Components

- ColorBlock: Individual color display with lock and copy functionality
- ColorPalette: Groups of colors with naming and management options
- Generator: Main component for creating new color combinations
- App: Root component managing state and theme

## Local Storage

The application uses local storage to persist:
- Saved palettes
- Theme preference (dark/light mode)

## Styling

- Custom CSS variables for theme management
- Smooth transitions and animations
- Box shadows and hover effects for enhanced UX
- Consistent spacing and typography

## Future Enhancements

- Color palette export functionality
- Custom color input
- Color scheme algorithms (complementary, analogous, etc.)
- Social sharing capabilities
- Palette categories and tags

## License

This project is open source and available under the MIT License.

---

Note: This color palette generator is perfect for designers, developers, and anyone looking to create and manage color schemes for their projects.