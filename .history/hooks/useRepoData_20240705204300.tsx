"use client"

import { useEffect } from "react"


export const useRepoData = () => {
    useEffect(() => {
        const fetchRepoData = async () => {
            try {
              const response = await axios.get<GitHubRepo>(`/api/github?username=${username}&repo=${repo}`);
              setRepoData(response.data);
            } catch (error) {
              console.error(error);
            }
          };
        
    },[])
}