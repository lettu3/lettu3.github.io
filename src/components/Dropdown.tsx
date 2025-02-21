/* Dropdown.tsx */
import './Dropdown.css';
import { useEffect, useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { toggleDropdown, selectItem } from "../state/dropdown/dropdownSlice";
import { RootState } from "../state/store";
import { useLocation } from 'react-router-dom';

type Item = {id: number, title: string};

type DropdownMenuProps = {
  buttonClassName: string;
  imgTitle: string;
  imgClassName: string;
  items: Item[];
  textButton? : string;
  onItemSelect? : (item: Item) => void; // optional function to handle item selection
}

export default function DropdownMenu({ items, buttonClassName, imgTitle, imgClassName, textButton, onItemSelect}: DropdownMenuProps) {
  const isOpen = useSelector((state : RootState) => state.dropdown.isOpen);
  const selectedItem = useSelector((state : RootState) => state.dropdown.selectedItem);
  const theme = useSelector((state: RootState) => state.theme.value);
  const dispatch = useDispatch();
  const location = useLocation();

  const current_icon = theme === 'light' ? `./${imgTitle}Light.svg` : `./${imgTitle}Dark.svg`;


  const handleToggle = () => {
    dispatch(toggleDropdown(!isOpen));
  };

  const handleSelect = (item : Item) => {
    console.log('selected item:', item);
    dispatch(selectItem(item.id));
    if (onItemSelect) {
      onItemSelect(item);
    }
  };

  useEffect(() => {
    if (isOpen) {
      dispatch(toggleDropdown(false));
    }
  }, [location.pathname]);

  return (
    <div className='dropdown-container'>
      <button onClick={handleToggle} className={buttonClassName}>
        {textButton? (<span>{textButton}</span>) : null}
        <img src={current_icon} className={imgClassName}/>
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