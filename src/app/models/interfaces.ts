export interface Skill { name: string, level: number };

export interface Project {
    title: string,
    subtitle: string,
    description: string,
    tools: string[],
    image: { src: string, url: string },
    links: { github?: string, site?: string }
}

export interface Work {
    position: string,
    name: string,
    startDate: Date,
    endDate: Date,
    url: string,
    functions: string[]
}