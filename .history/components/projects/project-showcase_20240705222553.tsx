"use client"

import { useProjectIndex } from '@/contexts/project-context'
import { GitHubRepo } from '@/types'
import axios from 'axios'
import { File, Folder, Link2Icon, LinkIcon, Video } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BsGithub } from 'react-icons/bs'
import { Oval, RotatingSquare } from 'react-loader-spinner'

interface GitHubResponse {
    data: GitHubRepo;
}

const ProjectShowcase = () => {
    const [showcaseType, setShowcaseType] = useState<"Video" | "Github" | "Link">("Github")
    const {currentProject, currentProjectIndex, handleProjectChange} = useProjectIndex()

    const [repoData, setRepoData] = useState<any>(null);
    const [repoCommits, setRepoCommits] = useState<any>(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchRepoNameFromLink = () => {
            if (currentProject.projectGithub) {
                const splitLink = currentProject.projectGithub.split('/');
                const repoName = splitLink[splitLink.length - 1];
                return repoName;
            }
        };
        
        const repo = fetchRepoNameFromLink();
        const fetchRepoData = async () => {
            
            try {
                const response: GitHubResponse = await axios.get(`https://api.github.com/repos/nickgoel31/${repo}/commits`, {
                    headers: {
                        Authorization: `token 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`
                    }
                });
                const responseTwo: GitHubResponse = await axios.get(`https://api.github.com/repos/nickgoel31/${repo}/contents`, {
                    headers: {
                        Authorization: `token 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`
                    }
                });
                if (!response || !responseTwo) return;
                console.log(response, responseTwo);
                setRepoData(responseTwo.data);
                setRepoCommits(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        if (repo) {
            fetchRepoData();
            setLoading(false)
        }
    },[currentProject])
  return (
    <div className='w-full h-full  absolute left-0 top-0 flex flex-col gap-6 items-center justify-center py-12 px-6'>
        <div className={`absolute flex items-center justify-center top-4 left-1/2 -translate-x-1/2 text-xs font-medium p-1 px-2 rounded-full border ${currentProject.status === "COMPLETED" ? 'border-green-400 text-green-300': 'border-yellow-500 text-yellow-300'}`}>
            {currentProject.status === "COMPLETED" ? "Ready" : "In Progress"}
        </div>
        <div className='flex gap-3 items-center '>
            <button onClick={() => setShowcaseType("Github")} className={`rounded-full p-3 px-6 border border-[#274552] bg-[#0e171b] flex items-center justify-center gap-2 transition-custom hover:border-[#89bcd2] hover:bg-[#89bcd2] hover:shadow-contactLinks hover:text-[#0e171b] font-semibold text-[#a4c4d1] ${showcaseType === "Github" && 'border-[#89bcd2] bg-[#89bcd2] shadow-contactLinks !text-[#0e171b] '}`}>
                <BsGithub />
                Github
            </button>
            <button onClick={() => setShowcaseType("Video")} className={`rounded-full p-3 px-6 border border-[#274552] bg-[#0e171b] flex items-center justify-center gap-2 transition-custom hover:border-[#89bcd2] hover:bg-[#89bcd2] hover:shadow-contactLinks hover:text-[#0e171b] font-semibold text-[#a4c4d1] ${showcaseType === "Video" && 'border-[#89bcd2] bg-[#89bcd2] shadow-contactLinks !text-[#0e171b]'}`}>
                <Video />
                Showcase
            </button>
            <button onClick={() => setShowcaseType("Link")} className={`rounded-full p-3 px-6 border border-[#274552] bg-[#0e171b] flex items-center justify-center gap-2 transition-custom hover:border-[#89bcd2] hover:bg-[#89bcd2] hover:shadow-contactLinks hover:text-[#0e171b] font-semibold text-[#a4c4d1] ${showcaseType === "Link" && 'border-[#89bcd2] bg-[#89bcd2] shadow-contactLinks !text-[#0e171b]'}`}>
                <LinkIcon />
                Link
            </button>
        </div>

        <div className='w-[90%] aspect-video overflow-hidden z-[10] rounded-md relative  border border-[#274552] bg-[#0b1114]'>
            {showcaseType === "Github" && (
                <>
                {currentProject.projectGithub ? (
                    <div className='w-full h-full flex flex-col relative '>
                    <div className='border-b border-[#274552] p-3 bg-[#10171a]  flex items-center gap-4 justify-between px-6 text-sm font-medium'>
                        <div className='flex items-center gap-2'>
                            <h1 className='lowercase'>
                                {currentProject.title}
                            </h1>
                            <p className='opacity-70 text-xs font-normal'>
                                latest commit
                            </p>
                        </div>

                        <div className='flex items-center gap-2'>
                            <p className='opacity-70 text-xs font-normal'>
                                {!repoCommits?.length || repoCommits?.length ===  0 ? "No commits" : `${repoCommits?.length} commits`}
                            </p>
                        </div>
                    </div>

                    <div className='absolute bottom-6 left-0 w-full flex items-center justify-center z-[100]'>
                        <Link href={currentProject.projectGithub} target='_blank' className='rounded-full p-3 px-6 border border-[#274552] bg-[#0e171b] text-xs font-medium flex items-center gap-2'>
                            <BsGithub size={15}/>
                            View on github
                        </Link>
                    </div>

                   

                    <div className='flex flex-col w-full github-repo h-full relative'>
                        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <>
                                {loading && (
                                    <div className='flex items-center justify-center w-full h-full'>
                                        <div role="status">
                                            <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                            </svg>
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                )}
                                </>
                        </div>
                        {!repoData ? (
                            <></>
                        ):(
                            <>
                                { repoData?.length === 0 ? "No Files": (
                                    <>
                                        {repoData.slice(0,10).map((cont,index) => (
                                            <div key={index} className='w-full h-8 p-2 px-4 text-xs font-medium flex items-center justify-between border-b border-[#274552] hover:bg-white/5'>
                                                <div className='flex items-center gap-2'>
                                                    {cont.type === "file" ? <File size={15}/> : <Folder size={15}/> }
                                                    <Link href={cont._links.html} target='_blank' className='opacity-70 hover:text-blue-500 hover:underline'>{cont.name}</Link>
                                                </div>
                                                <p className='opacity-70'>
                                                    {cont.type}
                                                </p>
                                            </div>
                                        ))}
                                    </>
                                )}
                            </>
                        )}
                        
                    </div>
                </div>
                ):(
                    <div className='w-full h-full flex items-center justify-center'>
                        <p className='text-xs font-medium opacity-70'>
                            No Github Repository
                        </p>
                    </div>
                
                )}
                
                </>
            )}
            {showcaseType === "Video" && (
                <div className='w-full h-full'>
                    {currentProject.projectVideoPath ? (
                        <iframe src="https://www.youtube.com/embed/N1Sgukwilh0?si=ydR3T7B8AZ9IIBxO" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className='w-full h-full'></iframe>
                    ):(
                        <div className='w-full h-full flex items-center justify-center'>
                            <p className='text-xs font-medium opacity-70'>
                                No Video Showcase
                            </p>
                        </div>
                    )}
                </div>
            )}
            {showcaseType === "Link" && (
                <div className='w-full h-full relative'>
                    {currentProject.projectLink ? (
                        <>
                         <div className='absolute bottom-6 left-0 w-full flex items-center justify-center z-[100]'>
                            <Link href={currentProject.projectLink} target='_blank' className='rounded-full p-3 px-6 border border-[#274552] bg-[#0e171b] text-xs font-medium flex items-center gap-2'>
                                <Link2Icon size={15}/>
                                Visit
                            </Link>
                        </div>
                        <div className='w-full h-full flex items-center justify-center absolute left-0 top-0 z-[10]'></div>
                        <iframe src={currentProject.projectLink} name="myiFrame" scrolling="no" className='w-full h-full github-repo' ></iframe>
                        </>
                    ):(
                        <div className='w-full h-full flex items-center justify-center'>
                            <p className='text-xs font-medium opacity-70'>
                                No Link Available
                            </p>
                        </div>
                    )}
                   
                </div>
            )}
        </div>
    </div>
  )
}

export default ProjectShowcase