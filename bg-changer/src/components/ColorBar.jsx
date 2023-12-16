import React from 'react'

function ColorBar({ colors = ['red', 'green'], onColorChange }) {
    return (
      <div className='rounded-full w-5/6 bg-white p-2 flex flex-wrap justify-center gap-3 shadow-md'>
        {colors.map((color, index) => (
          <button
            key={index}
            className='py-2 px-5 rounded-full text-white'
            style={{ backgroundColor: color }}
            onClick={() => onColorChange(color)}
          >
            {color}
          </button>
        ))}
      </div>
    );
}

export default ColorBar;