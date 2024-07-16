"use client";

import { useMouse } from '@/contexts/mouse-context';
import { skillBoxes } from '@/data';
import React, { HTMLAttributes, useEffect, useRef, useState } from 'react';


  

const Canvas = (props: HTMLAttributes<HTMLCanvasElement>) => {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const { screenHeight, screenWidth, centerX, centerY } = useMouse();

  const [screenOffset, setScreenOffset] = useState<{ x: number, y: number }>({ x: 0, y: 0 });
  const [startPanMousePosition, setStartPanMousePosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 });
  const [panning, setPanning] = useState(false);
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e: MouseEvent) => {
    if (e.button === 0) {
      setStartPanMousePosition({ x: e.clientX, y: e.clientY });
      setPanning(true);
      setIsDragging(false);
    }
  };

  const handleMouseUp = (e: MouseEvent) => {
    if (e.button === 0) {
      setPanning(false);

      // If not dragging, it's a click
      if (!isDragging) {
        const canvas = ref.current;
        if (canvas) {
          const rect = canvas.getBoundingClientRect();
          const x = e.clientX - rect.left - screenOffset.x;
          const y = e.clientY - rect.top - screenOffset.y;

          const clickedSkillBox = skillBoxes.find(
            skill => x >= skill.x && x <= skill.x + skill.width && y >= skill.y && y <= skill.y + skill.height
          );

          if (clickedSkillBox) {
            setSelectedElement(clickedSkillBox.id);
          } else {
            setSelectedElement(null);
          }
        }
      }
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (panning) {
      setIsDragging(true);
      setScreenOffset({
        x: screenOffset.x + (e.clientX - startPanMousePosition.x),
        y: screenOffset.y + (e.clientY - startPanMousePosition.y),
      });
      setStartPanMousePosition({ x: e.clientX, y: e.clientY });
    }
  };

  useEffect(() => {
    const canvas = ref.current;
    if (canvas) {
      canvas.addEventListener('mousedown', handleMouseDown);
      canvas.addEventListener('mouseup', handleMouseUp);
      canvas.addEventListener('mousemove', handleMouseMove);

      return () => {
        canvas.removeEventListener('mousedown', handleMouseDown);
        canvas.removeEventListener('mouseup', handleMouseUp);
        canvas.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [panning, screenOffset]);

  useEffect(() => {
    const canvas = ref.current;
if (canvas) {
  const ctx = canvas.getContext('2d');
  if (ctx) {
    // Clear the canvas before drawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Save the context state
    ctx.save();

    // Translate the context
    ctx.translate(screenOffset.x, screenOffset.y);

    skillBoxes.forEach((skill) => {
      // Draw the rectangle
      ctx.fillStyle = skill.bgColor; // Background color
      ctx.fillRect(skill.x, skill.y, skill.width, skill.height); // Rectangle dimensions

      // Draw the text centered within the rectangle
      ctx.fillStyle = skill.textColor; // Text color
      ctx.font = `bold ${skill.fontSize} Bebas Neue`; // Font style

      // Measure text width and height
      const textMetrics = ctx.measureText(skill.text);
      const textWidth = textMetrics.width;
      const textHeight = parseInt(skill.fontSize, 10); // Font size in pixels

      // Calculate text position to center it within the box
      const textX = skill.x + (skill.width - textWidth) / 2;
      const textY = skill.y + (skill.height + textHeight) / 2;

      // Draw the text
      ctx.fillText(skill.text, textX, textY);

      // Draw border if selected
      if (selectedElement === skill.id) {
        ctx.strokeStyle = '#3f7479';
        ctx.lineWidth = 3;
        ctx.strokeRect(skill.x, skill.y, skill.width, skill.height);
      }
    });

    // Restore the context to its original state
    ctx.restore();
  }
}

  }, [screenHeight, screenWidth, screenOffset, selectedElement]);

  return (
    <div className='relative w-full h-full'>
      <canvas
        ref={ref}
        width={screenWidth}
        height={screenHeight}
        className=''
      />
      {selectedElement && (
        <div className='fixed right-8 top-8  bottom-8 p-6 w-64 border border-[#3f7479] rounded-md bg-[#090d0e] select-none flex flex-col gap-5'>
          <p className='text-3xl font-bold'>{skillBoxes.find(skill => skill.id === selectedElement)?.text}</p>
          <p className='opacity-80 text-sm'>{skillBoxes.find(skill => skill.id === selectedElement)?.information}</p>
        </div>
      )}
      <div className='legend fixed left-8 bottom-8 p-6 w-64 border space-y-2 border-[#3f7479] bg-[#090d0e] rounded-md z-[10]'>
        <p className='text-xl font-bold'>Legend</p>
        <p className='opacity-80 text-xs font-medium'>Click and drag to pan</p>
        <p className='opacity-80 text-xs font-medium'>Click on a skill to view more information</p>
      </div>
    </div>
  );
};

export default Canvas;
