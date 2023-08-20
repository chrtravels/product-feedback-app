import styles from './sortListDropdown.module.scss';

import { useState } from 'react';

import {ReactComponent as DownArrow} from '../../assets/shared/icon-arrow-down.svg';
import {ReactComponent as UpArrow} from '../../assets/shared/icon-arrow-up.svg';
import {ReactComponent as Checkmark} from '../../assets/shared/icon-check.svg';

function SortListDropdown({options, selectedOption, setSelectedOption}) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleCategoryDropdown = () => {
    // show or hide dropdown
    setShowDropdown(showDropdown ? false : true);
    // if setShowDropdown display up arrow
  }

  const handleSelect = (e) => {
    // handle selecting dropdown options
    const value = e.target.getAttribute('data-value')
    setSelectedOption(value);
  }


  return (
    <div className={`${styles.sortListDropdown} customSelect`} aria-hidden='true' onClick={handleCategoryDropdown}>
      <div className={`${styles.triggerContainer} customSelectTrigger`}>
        <span className={styles.triggerText}>{selectedOption.slice(0,1).toUpperCase()}{selectedOption.slice(1)}</span>
        {showDropdown ? <UpArrow stroke='#c3c7d9' /> : <DownArrow stroke='#c3c7d9' /> }
      </div>
      <div className={`${styles.optionsContainer} customSelectOptions ${showDropdown ? 'customSelectHidden' : ''}`}>
        {options.map((option, index) => {
          if (option.toLowerCase() === selectedOption.toLowerCase()) {
            return <div key={index} className={`${styles.option} customSelectOption`} data-value={option}> <span>{option}</span> <Checkmark /> </div>
          } else {
            return <div key={index} className='customSelectOption' data-value={option} onClick={handleSelect}>{option}</div>
          }
        })}
      </div>
    </div>
  );
}

export default SortListDropdown;
