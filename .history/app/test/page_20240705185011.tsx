"use client"
import { useState } from 'react';
import axios from 'axios';
import { GitHubRepo } from '@/types/index';

const Home = () => {
  const [repoData, setRepoData] = useState<GitHubRepo>();
  const [username, setUsername] = useState<string>('');
  const [repo, setRepo] = useState<string>('');

  const fetchRepoData = async () => {
    try {
      const response:GitH = await fetch(`https://api.github.com/repos/nickgoel31/productivee-app`, {
        method: 'GET',
        headers: {
          Authorization: `token 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`
        }
      });
      if(!response) return;
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
          <h2>{repoData.name}</h2>
          <p>{repoData.description}</p>
          <p>Stars: {repoData.stargazers_count}</p>
          <p>Forks: {repoData.forks_count}</p>
          <a href={repoData.html_url} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
      )}
    </div>
  );
};

export default Home;
