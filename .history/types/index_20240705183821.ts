export type ProjectType = {
    id: number;
    title: string;
    top: string;
    zIndex: string;
    projectLink: string;
    projectGithub: string;
    projectVideoPath: string;
    status: "IN DEVELOPMENT" | "COMPLETED" 
}

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
  