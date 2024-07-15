// pages/api/github.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { GitHubRepo } from '@/types/index';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username, repo } = req.query;

  if (typeof username !== 'string' || typeof repo !== 'string') {
    res.status(400).json({ error: 'Invalid query parameters' });
    return;
  }

  try {
    const response = await fetch(`https://api.github.com/repos/nickgoel31/productivee-app`, {
      method: 'GET',
      headers: {
        Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`
      }
    });

    if (!response.ok) {
      res.status(response.status).json({ error: response.statusText });
      return;
    }

    const data: GitHubRepo = await response
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Unexpected error' });
  }
}
