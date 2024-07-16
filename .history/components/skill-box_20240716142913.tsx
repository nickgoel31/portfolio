type Props = {
  top?: number,
  left?: number,
  right?: number,
  bottom?: number,
  className?: string,
  skillName: string,
  skillLevel:string,
  skillLogo?:string,
}

export const SkillBox = ({...props}:Props) => {
    return (
      <div className={`${props.className}`} {...props}>
        {/* <div className='w-28 h-28 p-3 bg-[#80cad510] backdrop-blur-xl rounded-lg uppercase font-bold text-5xl flex items-center absolute top-0 left-0'>
          <p className='absolute bottom-3 right-3 text-[#b6eef790]'>JS</p>
        </div> */}
        <div className='w-28 h-28 p-3 bg-[#2d454750] backdrop-blur-xl rounded-lg uppercase font-bold text-5xl flex items-center relative'>
          <p className='absolute bottom-3 right-3 text-[#DFFAFF50] [text-shadow:_0px_0px_10px_#81c7d270]'>JS</p>
        </div>
      </div>
    )
  }

export const SkillBoxCanvas = () => {
  
}