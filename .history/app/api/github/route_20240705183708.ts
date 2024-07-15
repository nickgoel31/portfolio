// pages/api/github.js
import axios from 'axios';

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