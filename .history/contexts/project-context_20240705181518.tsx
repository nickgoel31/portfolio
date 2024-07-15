"use client"

import { ProjectType } from "@/types"
import { MouseEvent, MouseEventHandler, createContext, useContext, useEffect, useState } from "react"

type ProjectContextType = {
    currentProjectIndex: number,
    handleProjectChange: (index:number) => void
}



const ProjectContext = createContext<ProjectContextType>({currentProjectIndex: 0,
    handleProjectChange: (index:number) => {}
})

export const ProjectContextProvider = ({children}:{children:React.ReactNode}) => {

    const [currentProjectIndex,setProjectIndex] = useState<number>(0)

    const handleProjectChange = (projectIndex:number) => {
        setProjectIndex(projectIndex)
    }
    
    
    return (
        <ProjectContext.Provider value={{currentProjectIndex: currentProjectIndex, handleProjectChange}}>
            <div>{children}</div>
        </ProjectContext.Provider>
    )
    
}

export const useProjectIndex = () => {
    const [currentProject,setCurrentProject] = useState<ProjectType | null>()
    const { currentProjectIndex, handleProjectChange } = useContext(ProjectContext)

    return { currentProjectIndex, handleProjectChange, currentProject }
}