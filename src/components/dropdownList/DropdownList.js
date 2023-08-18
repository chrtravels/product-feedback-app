import styles from './dropdownList.module.scss';

import { useState } from 'react';

import {ReactComponent as DownArrow} from '../../assets/shared/icon-arrow-down.svg';
import {ReactComponent as Checkmark} from '../../assets/shared/icon-check.svg';

function DropdownList({options, selectedOption, setSelectedOption, currentFieldName, state, setState}) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleCategoryDropdown = () => {
    // show or hide dropdown
    setShowDropdown(showDropdown ? false : true);
  }

  const handleSelect = (e) => {
    // handle selecting dropdown options
    const value = e.target.getAttribute('data-value')
    setSelectedOption(value);
    setState((state) => ({
      ...state, [currentFieldName.toLowerCase()]: value.toLowerCase()
    }))
  }


  return (
    <div className='customSelect drop-down' aria-hidden='true' onClick={handleCategoryDropdown}>
      <div className='customSelectTrigger'>
        <span>{selectedOption}</span>
        <DownArrow />
      </div>
      <div className={`customSelectOptions ${showDropdown ? 'customSelectHidden' : ''}`}>
        {options.map((option, index) => {
          if (option === selectedOption) {
            return <div key={index} className='customSelectOption'> <span>{option}</span> <Checkmark /> </div>
          } else {
            return <div key={index} className='customSelectOption' data-value={option} onClick={handleSelect}>{option}</div>
          }
        })}
      </div>
    </div>
  );
}

export default DropdownList;
