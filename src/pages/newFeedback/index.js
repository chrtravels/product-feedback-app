import styles from './newFeedback.module.scss';

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import {ReactComponent as LeftArrow} from '../../assets/shared/icon-arrow-left.svg';

import { addRequest } from '../../ApiService';
import DropdownList from '../../components/dropdownList/DropdownList';


function NewFeedback() {
  const navigate = useNavigate();

  const categoryOptions = ['Feature','UI', 'UX', 'Enhancement', 'Bug'];
  const [selectedOption, setSelectedOption] = useState(categoryOptions[0]);

  const [state, setState] = useState({
    title: '',
    upvotes: 0,
    status: 'suggestion',
    description: '',
    category: 'feature',
    upvoted: false
  })


  const handleSubmit = (event) => {
    event.preventDefault();
    addRequest(state);
    navigate('/');
  }

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.backContainer}>
          <LeftArrow className={styles.leftArrow} stroke='#4661E6'/>
          <Link to="/">
            <p className={`${styles.goBack} light-font body-3`}>Go Back</p>
          </Link>
        </div>

        <div className={styles.cardBody}>
          <div className={styles.plusCircle}>
            <div className={styles.plusContainer}>
              <svg overflow="visible" width="9" height="9" xmlns="http://www.w3.org/2000/svg"><text transform="translate(-24 -20)" fill="#F2F4FE" fillRule="evenodd" fontFamily="Jost-Bold, Jost" fontSize="32" fontWeight="bold"><tspan x="24" y="27.5">+</tspan></text></svg>
            </div>
          </div>

          <div className={styles.cardContentContainer}>
            <h1 className="dark-font">Create New Feedback</h1>

            <div className={styles.formContainer}>
              <form onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <h4 className='dark-font'>Feedback Title</h4>
                  <p className='light-font body-3'>
                    Add a short, descriptive headline
                  </p>
                  <input
                    type='text'
                    id='title'
                    name='title'
                    value={state.title}
                    onChange={(e) => setState((state) => ({
                      ...state, [e.target.id]: e.target.value
                    }))}
                  />
                </div>

                <div className={styles.formRow}>
                  <h4 className='dark-font' id='categoryLabel'>Category</h4>
                  <p className='light-font body-3'>
                    Choose a category for your feedback
                  </p>
                  <select
                  id='category'
                  name='category'
                  className='nativeSelect'
                  aria-labelledby='categoryLabel'
                  value={state.category}
                  onChange={(e) => setState((state) => ({
                      ...state, [e.target.id]: e.target.value
                    }))}>
                    <option value="feature">Feature</option>
                    <option value="ui">UI</option>
                    <option value="ux">UX</option>
                    <option value="enhancement">Enhancement</option>
                    <option value="bug">Bug</option>
                  </select>

                  <DropdownList
                    options={categoryOptions}
                    selectedOption={selectedOption}
                    setSelectedOption={setSelectedOption}
                    currentFieldName={'Category'}
                    state={state}
                    setState={setState}
                  />

                </div>

                <div className={styles.formRow}>
                  <h4 className='dark-font'>Feedback Detail</h4>
                  <p className='light-font body-3'>
                    Include any specific comments on what should be improved, added, etc.
                  </p>
                  <textarea
                    id='description'
                    name='description'
                    rows='4'
                    value={state.description}
                    onChange={(e) => setState((state) => ({
                      ...state, [e.target.id]: e.target.value
                    }))}
                  />
                </div>

                <div className={styles.buttonContainer}>
                  <Link
                  to={'..'}
                  onClick={(e) => {
                  e.preventDefault();
                  navigate(-1);
                  }}
                  >
                    <button className='button button-cancel'>Cancel</button>
                  </Link>
                  <button className='button button-primary' onClick={handleSubmit}>Add Feedback</button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewFeedback;
