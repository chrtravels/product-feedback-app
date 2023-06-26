import styles from './suggestionsList.module.scss';

import { useEffect, useState } from 'react';
import { getRequests } from '../../ApiService';

import {ReactComponent as Empty} from '../../assets/suggestions/illustration-empty.svg';
import SuggestionCard from '../suggestionCard/SuggestionCard';


function SuggestionsList() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    getRequests().then(data => setRequests(data));
  }, [])

  console.log('requests: ', requests);

  return (
    <div className={styles.container}>
      {!requests
        // If no suggestions, display no feedback page
      ? <div className={styles.noFeedbackContainer}>
          <div className={styles.content}>
            <Empty />
            <h2 className='dark-font'>There is no feedback yet</h2>
            <p className='body-1 light-font'>Got a suggestion? Found a bug that needs to be squashed? <br></br>
            We love hearing about new ideas to improve our app.</p>
            <button className='button button-primary'>+ Add Feedback</button>
          </div>
        </div>
        // Else display suggestions
      : <div>
          {requests.map((request) => {
            const {title, upvotes, status, description, comments, category} = request;

            return (
              <SuggestionCard
              title={title}
              upvotes={upvotes}
              description={description}

              />
            )
          })}
        </div>
      }

    </div>
  );
}

export default SuggestionsList;
