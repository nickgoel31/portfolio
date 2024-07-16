"use client"

import Navbar from "@/components/navbar";
import { MouseContextProvider } from "@/contexts/mouse-context";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);


export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const container = useRef<HTMLBodyElement | null>(null);
  useGSAP(
    () => {
      const cursor:HTMLDivElement | null = document.querySelector('.cursor');
      container.current?.addEventListener('mousemove', (e) => {
        gsap.to('.cursor', { x: e.clientX, y: e.clientY });
      });

      const aboutLink:NodeListOf<Element> = document.querySelectorAll('.aboutLink');
      if (!aboutLink) return;
      if(!cursor) return;
      aboutLink.forEach(link => link.addEventListener('mouseenter', () => {
        gsap.to('.cursor', { scale: 2, opacity: 1 });
      }))

      aboutLink.forEach(link => link.addEventListener('mouseleave', () => {
        gsap.to('.cursor', { scale: 1, opacity: 1 });
      }))

      gsap.to('.pinned-text', {
        scrollTrigger:{
          trigger: '.pinned-text',
          start: 'top top',
          end: 'bottom top',
          pin: true,
          scrub: 1,
        }
      })

        
        
    },
    { scope: container }
); 


  return (
    <MouseContextProvider>
        <html lang="en">
            <body ref={container} className="gap-8 overflow-hidden ">
                <div>

                </div>
            </body>
        </html>
    </MouseContextProvider>
  );
}
