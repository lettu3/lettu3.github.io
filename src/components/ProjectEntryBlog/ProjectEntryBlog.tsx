import { useTranslation } from 'react-i18next';
import './ProjectEntryBlog.css';
import { Link } from 'react-router-dom';


type ProjectEntryBlogProps = {
    date: string;
    title: string;
    description: string;
    link: string;
    image?: string;
};

function ProjectEntryBlog({date, title, description, link, image}: ProjectEntryBlogProps ) {
  const {t} = useTranslation();
  console.log(image);

  return (
    <div className="ProjectEntryBlog">
      <div className='ProjectEntryBlog-date'>{date}</div>
      <div className='ProjectEntryBlog-content'>
        <div className="ProjectEntryBlog-title">{title}</div>
        {image && <img className='ProjectEntryBlog-image' src={image} alt={title} />}
        <div className="ProjectEntryBlog-description">{description}</div>
        <div className='ProjectEntryBlog-link'><Link to={link}>{t("Read more")}</Link></div>
      </div>
    </div>
  );
}

export default ProjectEntryBlog;