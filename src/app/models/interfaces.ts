export interface Skill { name: string, level: number };

export interface Project {
    title: string,
    subtitle: string,
    description: string,
    tools: string[],
    image: { src: string, url: string },
    links: { github?: string, web?: string }
}