import styles from './newFeedback.module.scss';

import { Link } from 'react-router-dom';

import {ReactComponent as LeftArrow} from '../../assets/shared/icon-arrow-left.svg';
import {ReactComponent as plusIcon} from '../../assets/shared/icon-plus.svg';
import { useState } from 'react';



function NewFeedback() {
  const [state, setState] = useState({
    title: '',
    category: '',
    detail: ''
  })

  const onChange = e => {
    setState({...state, [e.target.title]: e.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
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
              <plusIcon className={styles.plusIcon}/>
              <svg overflow="visible" width="9" height="9" xmlns="http://www.w3.org/2000/svg"><text transform="translate(-24 -20)" fill="#F2F4FE" fill-rule="evenodd" font-family="Jost-Bold, Jost" font-size="32" font-weight="bold"><tspan x="24" y="27.5">+</tspan></text></svg>
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
                    value={state.title}
                    onChange={onChange}
                  />
                </div>

                <div className={styles.formRow}>
                  <h4 className='dark-font'>Category</h4>
                  <p className='light-font body-3'>
                    Choose a category for your feedback
                  </p>
                  <select name='category' value={state.category} onChange={onChange}>
                    <option value="feature">Feature</option>
                    <option value="ui">UI</option>
                    <option value="ux">UX</option>
                    <option value="enhancement">Enhancement</option>
                    <option value="bug">Bug</option>
                  </select>
                </div>

                <div className={styles.formRow}>
                  <h4 className='dark-font'>Feedback Detail</h4>
                  <p className='light-font body-3'>
                    Include any specific comments on what should be improved, added, etc.
                  </p>
                  <textarea
                    name='detail'
                    rows='4'
                    value={state.detail}
                    onChange={onChange}
                  />
                </div>

                <div className={styles.buttonContainer}>
                  <button className='button button-cancel'>Cancel</button>
                  <button className='button button-primary'>Add Feedback</button>
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
