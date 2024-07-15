// pages/api/github.ts
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { GitHubRepo } from '@/types/index';

interface GitHubResponse {
  data: GitHubRepo;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username, repo } = req.query;

  if (typeof username !== 'string' || typeof repo !== 'string') {
    res.status(400).json({ error: 'Invalid query parameters' });
    return;
  }

  try {
    const response: GitHubResponse = await axios.get(`https://api.github.com/repos/${username}/${repo}`, {
      headers: {
        Authorization: `token "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"`
      }
    });

    res.status(200).json(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      res.status(error.response?.status || 500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unexpected error' });
    }
  }
}
