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
      <div className='ProjectEntryBlog-date'>{t(date)}</div>
      <div className='ProjectEntryBlog-content'>
        <div className="ProjectEntryBlog-title">{t(title)}</div>
        {image && <div className='ProjectEntryBlog-image-wrapper'><img className='ProjectEntryBlog-image' src={image} alt={title} /></div>}
        <div className="ProjectEntryBlog-description">{t(description)}</div>
        <div className='ProjectEntryBlog-link'><Link to={link}>{t("Read more")}</Link></div>
      </div>
    </div>
  );
}

export default ProjectEntryBlog;