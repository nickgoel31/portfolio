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

export const cards:ProjectType[] = [


    { id: 0, title: 'Ezfolio', top: '0', zIndex: '10', projectLink: 'https://www.ezfolio.social/s', projectGithub:'', projectVideoPath:'/gr-1.mp4', status: "COMPLETED" },
    { id: 1, title: 'Productive App', top: '10', zIndex: '11', projectLink: '', projectGithub:'', projectVideoPath:'/Home1.mp4',status: "COMPLETED" },
    { id: 2, title: 'AI Website Builder', top: '20', zIndex: '12', projectLink: '', projectGithub:'', projectVideoPath:'',status: "IN DEVELOPMENT" },
    { id: 3, title: 'Custom Bots', top: '30', zIndex: '13', projectLink: '', projectGithub:'', projectVideoPath:'',status: "COMPLETED" },
  ];