"use client";

import { useMouse } from '@/contexts/mouse-context';
import React, { HTMLAttributes, useEffect, useRef, useState } from 'react';

const skillBoxes = [
    { id: "skill1", x: 200, y: 150, width: 100, height: 100, text: 'JS', bgColor: '#80cad510', textColor: '#b6eef790', fontSize: '25px', information: "JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior. Web browsers have a dedicated JavaScript engine that executes the client code." },
    { id: "skill2", x: 350, y: 150, width: 165, height: 100, text: 'React', bgColor: '#80cad510', textColor: '#b6eef790', fontSize: '25px', information:"React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js." },
    { id: "skill3", x: 550, y: 150, width: 170, height: 100, text: 'Next.js', bgColor: '#80cad510', textColor: '#b6eef790', fontSize: '25px', information: "Next.js is a React framework that enables several extra features, including server-side rendering and generating static websites." },
    { id: "skill4", x: 750, y: 150, width: 270, height: 100, text: 'TailwindCSS', bgColor: '#80cad510', textColor: '#b6eef790', fontSize: '25px', information: "Tailwind CSS is a utility-first CSS framework for creating custom designs without leaving your HTML." },
    { id: "skill5", x: 200, y: 300, width: 180, height: 100, text: 'Django', bgColor: '#80cad510', textColor: '#b6eef790', fontSize: '25px', information: "Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design." },
    { id: "skill6", x: 400, y: 300, width: 180, height: 100, text: 'Python', bgColor: '#80cad510', textColor: '#b6eef790', fontSize: '25px', information: "Python is an interpreted, high-level and general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant whitespace." },
    { id: "skill7", x: 600, y: 300, width: 210, height: 100, text: 'TypeScript', bgColor: '#80cad510', textColor: '#b6eef790', fontSize: '25px', information: "TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language." },
    { id: "skill8", x: 830, y: 300, width: 240, height: 100, text: 'Canvas API', bgColor: '#80cad510', textColor: '#b6eef790', fontSize: '25px', information: "The Canvas API provides a means for drawing graphics via JavaScript and the HTML <canvas> element. It can be used for rendering graphs, game graphics, or other visual images." },
    { id: "skill9", x: 200, y: 450, width: 170, height: 100, text: 'Three.js', bgColor: '#80cad510', textColor: '#b6eef790', fontSize: '25px', information: "Three.js is a cross-browser JavaScript library and application programming interface used to create and display animated 3D computer graphics in a web browser using WebGL." },
    { id: "skill10", x: 400, y: 450, width: 250, height: 100, text: 'Generative AI', bgColor: '#80cad510', textColor: '#b6eef790', fontSize: '25px', information: "Generative AI refers to algorithms that can be used to create new content, including text, images, and music. It is widely used in natural language processing and computer vision." },
    { id: "skill11", x: 680, y: 450, width: 100, height: 100, text: 'ML', bgColor: '#80cad510', textColor: '#b6eef790', fontSize: '25px', information: "Machine Learning is a branch of artificial intelligence that focuses on the use of data and algorithms to imitate the way that humans learn, gradually improving its accuracy." },
    // { id: "skill12", x: 850, y: 500, width: 250, height: 100, text: 'Machine Learning (Learning)', bgColor: '#80cad510', textColor: '#b6eef790', fontSize: '35px', information: "Machine Learning (Learning) is a subsection of machine learning focused on the techniques and processes involved in training models and understanding their behavior." },
  ];
  

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
