"use client"

import { useProjectIndex } from '@/contexts/project-context'
import { Folder, LinkIcon, Video } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { BsGithub } from 'react-icons/bs'

const ProjectShowcase = () => {
    const [showcaseType, setShowcaseType] = useState<"Video" | "Github" | "Link">("Github")
    const {currentProject, currentProjectIndex, handleProjectChange} = useProjectIndex()
  return (
    <div className='w-full h-full  absolute left-0 top-0 flex flex-col gap-6 items-center justify-center py-12 px-6'>
        <div className='flex gap-3 items-center '>
            <button onClick={() => setShowcaseType("Github")} className={`rounded-full p-3 px-6 border border-[#274552] bg-[#0e171b] flex items-center justify-center gap-2 transition-custom hover:border-[#89bcd2] hover:bg-[#89bcd2] hover:shadow-contactLinks hover:text-[#0e171b] font-semibold text-[#a4c4d1] ${showcaseType === "Github" && 'border-[#89bcd2] bg-[#89bcd2] shadow-contactLinks text-[#0e171b]'}`}>
                <BsGithub />
                Github
            </button>
            <button onClick={() => setShowcaseType("Video")} className={`rounded-full p-3 px-6 border border-[#274552] bg-[#0e171b] flex items-center justify-center gap-2 transition-custom hover:border-[#89bcd2] hover:bg-[#89bcd2] hover:shadow-contactLinks hover:text-[#0e171b] font-semibold text-[#a4c4d1] ${showcaseType === "Video" && 'border-[#89bcd2] bg-[#89bcd2] shadow-contactLinks text-[#0e171b]'}`}>
                <Video />
                Showcase
            </button>
            <button onClick={() => setShowcaseType("Link")} className={`rounded-full p-3 px-6 border border-[#274552] bg-[#0e171b] flex items-center justify-center gap-2 transition-custom hover:border-[#89bcd2] hover:bg-[#89bcd2] hover:shadow-contactLinks hover:text-[#0e171b] font-semibold text-[#a4c4d1] ${showcaseType === "Link" && 'border-[#89bcd2] bg-[#89bcd2] shadow-contactLinks text-[#0e171b]'}`}>
                <LinkIcon />
                Link
            </button>
        </div>

        <div className='w-[90%] aspect-video overflow-hidden z-[10] rounded-md  border border-[#274552] bg-[#0b1114]'>
            {showcaseType === "Github" && (
                <div className='w-full h-full flex flex-col relative github-repo'>
                    <div className='border-b border-[#274552] p-3 bg-[#10171a] flex items-center gap-4 justify-between px-6 text-sm font-medium'>
                        <div className='flex items-center gap-2'>
                            <h1>ezfolio</h1>
                            <p className='opacity-70 text-xs font-normal'>
                                latest commit
                            </p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <p className='opacity-70 text-xs font-normal'>
                                15 commits
                            </p>
                        </div>
                    </div>

                    <div className='absolute bottom-6 left-0 w-full flex items-center justify-center'>

                    </div>

                    <div className='flex flex-col w-full'>
                        <div className='w-full h-8 p-2 px-4 text-xs font-medium flex items-center justify-between border-b border-[#274552] hover:bg-white/5'>
                            <div className='flex items-center gap-2'>
                                <Folder size={15}/>
                                <Link href='gdfg' target='_blank' className='opacity-70 hover:text-blue-500 hover:underline'>actions</Link>
                            </div>
                            <p className='opacity-70'>folder</p>
                        </div>
                        <div className='w-full h-8 p-2 px-4 text-xs font-medium flex items-center justify-between border-b border-[#274552] hover:bg-white/5'>
                            <div className='flex items-center gap-2'>
                                <Folder size={15}/>
                                <Link href='gdfg' target='_blank' className='opacity-70 hover:text-blue-500 hover:underline'>actions</Link>
                            </div>
                            <p className='opacity-70'>folder</p>
                        </div>
                        <div className='w-full h-8 p-2 px-4 text-xs font-medium flex items-center justify-between border-b border-[#274552] hover:bg-white/5'>
                            <div className='flex items-center gap-2'>
                                <Folder size={15}/>
                                <Link href='gdfg' target='_blank' className='opacity-70 hover:text-blue-500 hover:underline'>actions</Link>
                            </div>
                            <p className='opacity-70'>folder</p>
                        </div>
                        <div className='w-full h-8 p-2 px-4 text-xs font-medium flex items-center justify-between border-b border-[#274552] hover:bg-white/5'>
                            <div className='flex items-center gap-2'>
                                <Folder size={15}/>
                                <Link href='gdfg' target='_blank' className='opacity-70 hover:text-blue-500 hover:underline'>actions</Link>
                            </div>
                            <p className='opacity-70'>folder</p>
                        </div>
                        <div className='w-full h-8 p-2 px-4 text-xs font-medium flex items-center justify-between border-b border-[#274552] hover:bg-white/5'>
                            <div className='flex items-center gap-2'>
                                <Folder size={15}/>
                                <Link href='gdfg' target='_blank' className='opacity-70 hover:text-blue-500 hover:underline'>actions</Link>
                            </div>
                            <p className='opacity-70'>folder</p>
                        </div>
                        <div className='w-full h-8 p-2 px-4 text-xs font-medium flex items-center justify-between border-b border-[#274552] hover:bg-white/5'>
                            <div className='flex items-center gap-2'>
                                <Folder size={15}/>
                                <Link href='gdfg' target='_blank' className='opacity-70 hover:text-blue-500 hover:underline'>actions</Link>
                            </div>
                            <p className='opacity-70'>folder</p>
                        </div>
                        <div className='w-full h-8 p-2 px-4 text-xs font-medium flex items-center justify-between border-b border-[#274552] hover:bg-white/5'>
                            <div className='flex items-center gap-2'>
                                <Folder size={15}/>
                                <Link href='gdfg' target='_blank' className='opacity-70 hover:text-blue-500 hover:underline'>actions</Link>
                            </div>
                            <p className='opacity-70'>folder</p>
                        </div>
                        <div className='w-full h-8 p-2 px-4 text-xs font-medium flex items-center justify-between border-b border-[#274552] hover:bg-white/5'>
                            <div className='flex items-center gap-2'>
                                <Folder size={15}/>
                                <Link href='gdfg' target='_blank' className='opacity-70 hover:text-blue-500 hover:underline'>actions</Link>
                            </div>
                            <p className='opacity-70'>folder</p>
                        </div>
                        <div className='w-full h-8 p-2 px-4 text-xs font-medium flex items-center justify-between border-b border-[#274552] hover:bg-white/5'>
                            <div className='flex items-center gap-2'>
                                <Folder size={15}/>
                                <Link href='gdfg' target='_blank' className='opacity-70 hover:text-blue-500 hover:underline'>actions</Link>
                            </div>
                            <p className='opacity-70'>folder</p>
                        </div>
                        <div className='w-full h-8 p-2 px-4 text-xs font-medium flex items-center justify-between border-b border-[#274552] hover:bg-white/5'>
                            <div className='flex items-center gap-2'>
                                <Folder size={15}/>
                                <Link href='gdfg' target='_blank' className='opacity-70 hover:text-blue-500 hover:underline'>actions</Link>
                            </div>
                            <p className='opacity-70'>folder</p>
                        </div>
                    </div>
                </div>
            )}
            {showcaseType === "Github" && (
                <div>
                    {currentProject.projectGithub}
                </div>
            )}
            {showcaseType === "Link" && (
                <div>
                    {currentProject.projectLink}
                </div>
            )}
        </div>
    </div>
  )
}

export default ProjectShowcase