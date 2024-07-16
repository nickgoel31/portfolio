import React from 'react'

const MobilePage = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  return (
    <div>
      <video autoPlay muted loop  controls={false} ref={videoRef} className="overflow-hidden z-[-1] w-full h-full object-cover" >
          <source src="/Comp 2.mp4" type="video/mp4" className="aspect-video"/>
          Your browser does not support the video tag.
        </video>
    </div>
  )
}

export default MobilePage