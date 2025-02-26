/* Dropdown.tsx */
import './Dropdown.css';
import { useEffect, useState} from 'react';
import { useSelector} from "react-redux";
import { RootState } from "../state/store";
import { useLocation } from 'react-router-dom';

type Item = {id: number, title: string};

type DropdownMenuProps = {
  buttonClassName: string;
  imgTitle?: string;
  imgClassName?: string;
  items: Item[];
  textButton? : string;
  onItemSelect? : (item: Item) => void; // optional function to handle item selection
}

export default function DropdownMenu({ items, buttonClassName, imgTitle, imgClassName, textButton, onItemSelect}: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(1);
  const theme = useSelector((state: RootState) => state.theme.value);
  const location = useLocation();
  
  const current_icon = imgTitle ? `./${imgTitle}${theme === 'light' ? 'Light' : 'Dark'}.svg` : undefined;

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (item : Item) => {
    console.log('selected item:', item);
    setSelectedItem(item.id);
    if (onItemSelect) {
      onItemSelect(item);
    }
  };

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [location.pathname]);

  return (
    <div className='dropdown-container'>
      <button onClick={handleToggle} className={buttonClassName}>
        {textButton? (<span>{textButton}</span>) : null}
        {imgTitle? (<img src={current_icon} className={imgClassName}/>) : null}
      </button>
      {isOpen && (
        <ul className='dropdown-menu'>
          {items.length > 0 ? (
            items.map((item, index) => (
              <li key={index}
                  onClick={() => handleSelect(item)} 
                  className={`dropdown-item ${selectedItem === item.id ? 'selected' : ''}`}>
                {item.title}
              </li>
            ))
          ) : (
            <li>No items available</li>
          )}
        </ul>
      )}
    </div>
  );
}

export type {Item, DropdownMenuProps};