import ElSwitcher from "./el switcher/elswitcher-preview.json"

export interface ProjectPreview {
    title: string;
    date: string;
    description: string;
    link: string;
    image?: string;
}


export const projectsPreviews: ProjectPreview[] = [
    ElSwitcher,

]