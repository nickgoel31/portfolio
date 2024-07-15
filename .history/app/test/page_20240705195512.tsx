"use client"
import { useState } from 'react';
import axios from 'axios';
import { GitHubRepo } from '@/types/index';


interface GitHubResponse {
  data: GitHubRepo;
}

const Home = () => {
  const [repoData, setRepoData] = useState<any>();
  const [username, setUsername] = useState<string>('');
  const [repo, setRepo] = useState<string>('');

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

  return (
    <div>
      <h1>GitHub Repository Info</h1>
      <button onClick={fetchRepoData}>Fetch Repo Data</button>

      {repoData && (
        <div>
          
        </div>
      )}
    </div>
  );
};

export default Home;
