// pages/index.tsx
import { useState } from 'react';
import axios from 'axios';
import { GitHubRepo } from '@/types/github';

const Home = () => {
  const [repoData, setRepoData] = useState<GitHubRepo | null>(null);
  const [username, setUsername] = useState<string>('');
  const [repo, setRepo] = useState<string>('');

  const fetchRepoData = async () => {
    try {
      const response = await axios.get<GitHubRepo>(`/api/github?username=${username}&repo=${repo}`);
      setRepoData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>GitHub Repository Info</h1>
      <input
        type="text"
        placeholder="GitHub Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Repository Name"
        value={repo}
        onChange={(e) => setRepo(e.target.value)}
      />
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
