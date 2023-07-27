import styles from './suggestionsList.module.scss';

import { useEffect, useState } from 'react';
import { getRequests } from '../../ApiService';

import {ReactComponent as Empty} from '../../assets/suggestions/illustration-empty.svg';
import SuggestionCard from '../suggestionCard/SuggestionCard';


function SuggestionsList({suggestions}) {
  // const [suggestions, setSuggestions] = useState([]);
  // const [temp, setTemp] = useState(suggestions);

  // useEffect(() => {
  //   // getRequests().then(data => setSuggestions(data));
  //   setTemp(suggestions);

  // }, [suggestions])

  // console.log('requests: ', suggestions);

  return (
    <div className={styles.container}>
      {!suggestions
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
          {suggestions.map((suggestion, index) => {
            const {id, title, upvotes, status, description, comments, category} = suggestion;

            return (
              <SuggestionCard
              key={index}
              id={id}
              title={title}
              upvotes={upvotes}
              description={description}
              category={category}
              comments={comments}
              />
            )
          })}
        </div>
      }

    </div>
  );
}

export default SuggestionsList;
