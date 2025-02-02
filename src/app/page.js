'use client';
import { useState } from 'react';
import { ArrowLeftCircle } from "lucide-react";

export default function ValentinesPage() {
  const [accepted, setAccepted] = useState(false);
  const [noMoved, setNoMoved] = useState(false);
  const [noPosition, setNoPosition] = useState({ top: '0px', left: '0px' });
  const [yesSize, setYesSize] = useState(1);

  const moveNoButton = () => {
    setNoMoved(true);
    setYesSize((prev) => prev + 0.5);
    const newTop = Math.random() * 300 - 150; // Movimiento más amplio
    const newLeft = Math.random() * 300 - 150;
    setNoPosition({ top: `${newTop}px`, left: `${newLeft}px` });
  };

  const resetState = () => {
    setAccepted(false);
    setNoMoved(false);
    setNoPosition({ top: '0px', left: '0px' });
    setYesSize(1)
  };

  return (
    <div className="flex items-center justify-center h-screen bg-pink-200">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center relative w-96 h-60 flex flex-col items-center justify-center">
        {!accepted ? (
          <>
            <h1 className="text-2xl text-neutral-900 font-bold  mb-6">¿Te gustaria ser mi Valentin?</h1>
            <div className="relative flex items-center space-x-4">
              <button 
                onClick={() => setAccepted(true)} 
                className="px-4 py-2 bg-lime-500 text-white rounded-lg hover:bg-lime-600"
                style={{ transform: `scale(${yesSize})`}}
              >
                Si
              </button>
              <button 
                onClick={moveNoButton} 
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 absolute"
                style={{ top: noPosition.top, left: noPosition.left, position: noMoved ? 'absolute' : 'relative' }}
              >
                No
              </button>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-neutral-600 mb-4">Gracias por❤️</h1>
            <ArrowLeftCircle 
              size={36} 
              className="text-neutral-500 hover:text-neutral-600 cursor-pointer" 
              onClick={resetState} 
            />

          </>
        )}
      </div>
    </div>
  );
}
