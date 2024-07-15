"use client"

import axios from "axios";
import { useEffect, useState } from "react"

interface GitHubResponse {
    data: GitHubRepo;
  }


export const useRepoData = () => {
    const [repoData, setRepoData] = useState<any>();
    useEffect(() => {
        const fetchRepoData = async () => {
            try {
              const response: GitHubResponse = await axios.get(`https://api.github.com/repos/nickgoel31/productivee-app/commits`, {
                headers: {
                  Authorization: `token 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`
                }
              });
              if(!response) return;
              console.log(response)
              setRepoData(response);
            } catch (error) {
              console.error(error);
            }
          };
        
    },[])
}