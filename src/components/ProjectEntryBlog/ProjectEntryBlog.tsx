import { useTranslation } from 'react-i18next';
import './ProjectEntryBlog.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

type ProjectEntryBlogProps = {
    date: string;
    title: string;
    description: string;
    link: string;
    image?: string;
};

function ProjectEntryBlog({date, title, description, link, image}: ProjectEntryBlogProps ) {
  const {t} = useTranslation();

  return (
    <motion.div
        className="ProjectEntryBlog"
        key={date}
        initial={{opacity: 0, y: 24, scale: 0.9}}
        whileInView={{opacity: 1, y: 0, scale: 1, transition: {duration: 0.5, ease: 'easeOut'}}}
        >
      <div className='ProjectEntryBlog-date'>{t(date)}</div>
      <div className='ProjectEntryBlog-content'>
        <div className="ProjectEntryBlog-title">{t(title)}</div>
        {image && <div className='ProjectEntryBlog-image-wrapper'><img className='ProjectEntryBlog-image' src={image} alt={title} /></div>}
        <div className="ProjectEntryBlog-description">{t(description)}</div>
        <div className='ProjectEntryBlog-link'><Link to={link}>{t("Read more")}</Link></div>
      </div>
    </motion.div>
  );
}

export default ProjectEntryBlog;