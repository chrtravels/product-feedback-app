import styles from './editFeedback.module.scss';

import { Link, useLocation, useNavigate } from 'react-router-dom';

import {ReactComponent as LeftArrow} from '../../assets/shared/icon-arrow-left.svg';
import {ReactComponent as EditIcon} from '../../assets/shared/icon-edit-feedback.svg';
import { useState } from 'react';
import { deleteFeedback, updateRequest } from '../../ApiService';



function EditFeedback() {
  const location = useLocation();
  const { feedback } = location.state;
  const navigate = useNavigate();
  const {id, title, category, status, description} = feedback;

  const [state, setState] = useState({
    id: id,
    title: title,
    category: category,
    status: status,
    description: description
  })


  const handleSubmit = () => {
    updateRequest(state);
    navigate('/');
  }

  const handleDelete = (event) => {
    event.preventDefault();
    deleteFeedback(feedback);
    navigate('/');
  }


  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.backContainer}>
          <LeftArrow className={styles.leftArrow} stroke='#4661E6'/>
          <Link
          to={'..'}
          onClick={(e) => {
          e.preventDefault();
          navigate(-1);
          }}
          >
            <p className={`${styles.goBack} light-font body-3`}>Go Back</p>
          </Link>
        </div>

        <div className={styles.cardBody}>
          <div className={styles.iconContainer}>
            <EditIcon className={styles.icon} />
          </div>

          <div className={styles.cardContentContainer}>
            <h1 className="dark-font">Editing '{title}'</h1>

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
                  <h4 className='dark-font'>Category</h4>
                  <p className='light-font body-3'>
                    Choose a category for your feedback
                  </p>
                  <select
                  id='category'
                  name='category'
                  value={state.category}
                  onChange={(e) => setState((state) => ({
                      ...state, [e.target.id]: e.target.value
                    }))}
                  >
                    <option value="feature">Feature</option>
                    <option value="ui">UI</option>
                    <option value="ux">UX</option>
                    <option value="enhancement">Enhancement</option>
                    <option value="bug">Bug</option>
                  </select>
                </div>

                <div className={styles.formRow}>
                  <h4 className='dark-font'>Update Status</h4>
                  <p className='light-font body-3'>
                    Change feedback state
                  </p>
                  <select
                  id='status'
                  name='status'
                  value={state.status}
                  onChange={(e) => setState((state) => ({
                      ...state, [e.target.id]: e.target.value
                    }))}
                  >
                    <option value="suggestion">Suggestion</option>
                    <option value="planned">Planned</option>
                    <option value="in-progress">In-Progress</option>
                    <option value="live">Live</option>
                  </select>
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
                  <div>
                    <button className='button button-warning' onClick={handleDelete}>Delete</button>
                  </div>

                  <div className={styles.leftButtons}>
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
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditFeedback;
