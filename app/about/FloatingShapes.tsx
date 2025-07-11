"use client";

import { useEffect, useState } from 'react';

interface Shape {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  animationDuration: number;
  shape: 'cube' | 'sphere' | 'triangle' | 'hexagon';
}

const FloatingShapes = () => {
  const [shapes, setShapes] = useState<Shape[]>([]);

  useEffect(() => {
    const generateShapes = () => {
      const newShapes: Shape[] = [];
      for (let i = 0; i < 15; i++) {
        newShapes.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 60 + 20,
          rotation: Math.random() * 360,
          animationDuration: Math.random() * 20 + 10,
          shape: ['cube', 'sphere', 'triangle', 'hexagon'][Math.floor(Math.random() * 4)] as Shape['shape']
        });
      }
      setShapes(newShapes);
    };

    generateShapes();
  }, []);

  const getShapeElement = (shape: Shape) => {
    const baseClasses = "absolute opacity-20 animate-pulse";
    const style = {
      left: `${shape.x}%`,
      top: `${shape.y}%`,
      width: `${shape.size}px`,
      height: `${shape.size}px`,
      transform: `rotate(${shape.rotation}deg)`,
      animationDuration: `${shape.animationDuration}s`,
    };

    switch (shape.shape) {
      case 'cube':
        return (
          <div
            key={shape.id}
            className={`${baseClasses} bg-gradient-to-br from-cyan-400 to-blue-600 border border-cyan-300`}
            style={style}
          />
        );
      case 'sphere':
        return (
          <div
            key={shape.id}
            className={`${baseClasses} bg-gradient-to-br from-purple-400 to-pink-600 rounded-full border border-purple-300`}
            style={style}
          />
        );
      case 'triangle':
        return (
          <div
            key={shape.id}
            className={`${baseClasses} border-l-[${shape.size/2}px] border-r-[${shape.size/2}px] border-b-[${shape.size}px] border-l-transparent border-r-transparent border-b-gradient-to-r from-yellow-400 to-orange-600`}
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              transform: `rotate(${shape.rotation}deg)`,
              animationDuration: `${shape.animationDuration}s`,
              width: 0,
              height: 0,
              borderLeftWidth: `${shape.size/2}px`,
              borderRightWidth: `${shape.size/2}px`,
              borderBottomWidth: `${shape.size}px`,
              borderLeftColor: 'transparent',
              borderRightColor: 'transparent',
              borderBottomColor: '#fbbf24',
            }}
          />
        );
      case 'hexagon':
        return (
          <div
            key={shape.id}
            className={`${baseClasses} bg-gradient-to-br from-green-400 to-emerald-600 border border-green-300`}
            style={{
              ...style,
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map(shape => getShapeElement(shape))}
    </div>
  );
};

export default FloatingShapes;