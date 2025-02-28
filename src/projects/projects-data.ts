import elSwitcherPreview from "./el switcher/elswitcher-preview.json";
import elSwitcherBlog from "./el switcher/elswitcher-blog.json";

export interface ProjectPreview{
    title: string;
    date: string;
    description: string;
    link: string;
    image?: string;
}

export interface ProjectBlog{
    title: string;
    date: string;
    content: {
        es: string;
        en: string;
        jp?: string;
    };
}

export const projectsPreviews: ProjectPreview[] = [
    elSwitcherPreview,
]

export const projectsBlogs: ProjectBlog[] = [
    elSwitcherBlog,
];