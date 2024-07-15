export const gsapFunction = (container: HTMLBodyElement ) => {
    // gsap code here...
    container.addEventListener('mousemove', (e) => {
      gsap.to('.cursor', { x: e.clientX, y:e.clientY }); // <-- automatically reverted
    })
    
}