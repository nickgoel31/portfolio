import axios from 'axios';

// types/github.d.ts
export interface GitHubRepo {
    id: number;
    name: string;
    full_name: string;
    owner: {
      login: string;
      id: number;
    };
    description: string | null;
    stargazers_count: number;
    forks_count: number;
    html_url: string;
  }
  

export default async function handler(req, res) {
  const { username, repo } = req.query;

  try {
    const response = await axios.get(`https://api.github.com/repos/${username}/${repo}`, {
      headers: {
        Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`
      }
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(error.response.status).json({ error: error.message });
  }
}
