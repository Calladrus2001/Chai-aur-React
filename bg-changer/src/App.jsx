import { useState } from 'react'
import './index.css'

import ColorBar from './components/ColorBar'

function App() {
  const [color, setColor] = useState('olive');
  let colors = ['blue', 'red', 'green', 'violet'];

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  return (
    <div className='w-full h-screen' style={{ backgroundColor: color }}>
      <h1>Hello world</h1>

      <div className='fixed flex flex-wrap justify-center bottom-12 left-0 right-0 px-2'>
        <ColorBar colors={colors} onColorChange={handleColorChange} />
      </div>
    </div>
  );
}

export default App
