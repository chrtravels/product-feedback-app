import styles from './suggestionsList.module.scss';

import {ReactComponent as Empty} from '../../assets/suggestions/illustration-empty.svg';
import SuggestionCard from '../suggestionCard/SuggestionCard';


function SuggestionsList({ filteredByTag, setFilteredByTag }) {

  return (
    <div className={styles.container}>
      {!filteredByTag
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
          {filteredByTag.map((request, index) => {
            return (
              <SuggestionCard
              key={index}
              request={request}
              requests={filteredByTag}
              setRequests={setFilteredByTag}
              />
            )
          })}
        </div>
      }

    </div>
  );
}

export default SuggestionsList;
