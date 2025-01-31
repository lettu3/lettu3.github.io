/* Dropdown.tsx */
import { useSelector, useDispatch } from "react-redux";
import { toggleDropdown, selectItem } from "../state/dropdown/dropdownSlice";
import { RootState } from "../state/store";

type Item = {id: number, title: string};

type DropdownMenuProps = {
  items: Item[];
  onItemSelect? : (item: Item) => void; // optional function to handle item selection
}

export default function DropdownMenu({ items, onItemSelect }: DropdownMenuProps) {
  const isOpen = useSelector((state : RootState) => state.dropdown.isOpen);
  const selectedItem = useSelector((state : RootState) => state.dropdown.selectedItem);
  const theme = useSelector((state: RootState) => state.theme.value);
  const dispatch = useDispatch();

  const current_icon = theme === 'light' ? '/langLight.svg' : '/langDark.svg';


  const handleToggle = () => {
    dispatch(toggleDropdown(!isOpen));
  };

  const handleSelect = (item : Item) => {
    dispatch(selectItem(item));
    dispatch(toggleDropdown(false)); // not sure, maybe let the user close the dropdown manually
    if (onItemSelect) {
      onItemSelect(item);
    }
  };

  return (
    <div>
      <button onClick={handleToggle} className="lang"><img src={current_icon} className="lang-icon" /></button>
      {isOpen && (
        <ul>
          {items.length > 0 ? (
            items.map((item, index) => (
              <li key={index} onClick={() => handleSelect(item)} style={{border : "1px solid green"}}>
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