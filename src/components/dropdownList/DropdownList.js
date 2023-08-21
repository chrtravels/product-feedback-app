import { useState } from 'react';

import {ReactComponent as DownArrow} from '../../assets/shared/icon-arrow-down.svg';
import {ReactComponent as UpArrow} from '../../assets/shared/icon-arrow-up.svg';
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
        <span>{selectedOption.slice(0,1).toUpperCase()}{selectedOption.slice(1)}</span>
        {showDropdown ? <UpArrow stroke='#4661E6' /> : <DownArrow stroke='#4661E6' /> }
      </div>
      <div className={`customSelectOptions ${showDropdown ? 'customSelectHidden' : ''}`}>
        {options.map((option, index) => {
          if (option.toLowerCase() === selectedOption.toLowerCase()) {
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
