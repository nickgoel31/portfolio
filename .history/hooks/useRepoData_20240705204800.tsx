"use client"

import { GitHubRepo } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react"

interface GitHubResponse {
    data: GitHubRepo;
  }


export const useRepoData = () => {
    const [repoData, setRepoData] = useState<any>();
    const [repoCommits, setRepoCommits] = useState<number>();
    useEffect(() => {
        const fetchRepoData = async () => {
            try {
              const response: GitHubResponse = await axios.get(`https://api.github.com/repos/nickgoel31/productivee-app/commits`, {
                headers: {
                  Authorization: `token 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`
                }
              });
              const responseTwo: GitHubResponse = await axios.get(`https://api.github.com/repos/nickgoel31/productivee-app/contents`, {
                headers: {
                  Authorization: `token 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`
                }
              });
              if(!response || !responseTwo) return;
              setRepoData(responseTwo);
            setRepoCommits(response.);
            } catch (error) {
              console.error(error);
            }
          };

        fetchRepoData();
        
    },[])

    return {repoData, repoCommits}
}