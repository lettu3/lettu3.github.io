import './ProjectsBlogPage.css';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { projectsBlogs } from '../../projects/projects-data';
import { useState, useEffect } from 'react';
import Markdown from 'react-markdown';

function ProjectsBlogPage() {
    const params = useParams();
    const {i18n} = useTranslation();
    const currentLang = i18n.language;

    const blog = projectsBlogs
                 .find(blog => (blog.title) === (params.title + "-title"));
    const [content, setContent] = useState<string>("");

    useEffect(() => {
        if (blog) {
            const langContent = blog.content[currentLang as keyof typeof blog.content]
                                || blog.content.en; //fallback to english
            const loadMarkdown = async () => {
                try{
                    const response = await fetch(langContent);
                    const text = await response.text();
                    setContent(text);
                }
                catch{
                    console.error("Error loading markdown");
                    setContent("Error loading markdown");
                }

            };
            loadMarkdown();
        }
    }, [blog]);

    return (
      <div className="projects-blog-page">
        <Markdown>{content}</Markdown>
      </div>  
    );

}

export default ProjectsBlogPage;