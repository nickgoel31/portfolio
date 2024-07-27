"use client"

import React, { useEffect, useState } from 'react'

export type DBProjectType = {
  
  _id: string
  title: string
  index: number,
  top: string
  zIndex: string,
  projectLink:string,
  projectGithub:string,
  projectVideoPath:string,
  status: 'COMPLETED' | 'IN DEVELOPMENT' | 'ON HOLD' | 'PLANNED'

}

const useProjects = () => {
  const [projects, setProjects] = useState<DBProjectType[]>([])
  useEffect(() => {
    function getProjects(){
      fetch("http://localhost:4000/api/v1/projects", {
        method: 'GET'
      })
        .then(res => res.json())
        .then(data => setProjects(data["projects"]))
    }

    getProjects()
  }, [
    projects
  ])

  return { projects }
}

export default useProjects