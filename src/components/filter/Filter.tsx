import React, { useState } from 'react';
import styles from './Filter.module.css';
import { IoIosArrowDown } from 'react-icons/io';
// import ButtonFilter from './ButtonFilter';

interface FilterProps {
  title?: string;
  options: string[];
  selectedOption: string;
  onOptionChange: (option: string) => void;
}

const Filter = ({ title, options, selectedOption, onOptionChange }: FilterProps): JSX.Element => {
  const [openOptions, setOpenOptions] = useState(false);
  const [toggle, setToggle] = useState<boolean>(false);

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setOpenOptions(!openOptions);
    setToggle(true);
  };

  const handleOptionClick = (option: string) => {
    setOpenOptions(false);
    onOptionChange(option);
    setToggle(false);
  };

  return (
    <div className={styles.selectArea}>
      <button type="button" className={styles.btnSelect} onClick={handleButtonClick}>
        {selectedOption || title}
        <IoIosArrowDown className={styles.icon} />
      </button>
      {toggle && (
        <ul className={styles.selectOption}>
          {options.map((option, index) => (
            <li key={index} className={styles.selectBox} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Filter;
