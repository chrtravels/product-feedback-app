import SuggestionsNavbar from '../../components/suggestionsNavbar/SuggestionsNavbar';
import styles from './suggestionsLayout.module.scss';

import Empty from '../../assets/suggestions/illustration-empty.svg';
import { useEffect, useState } from 'react';
import { getRequests } from '../../ApiService';

function SuggestionsLayout() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    getRequests().then(data => setRequests(data));
  }, [])

  console.log('requests: ', requests);

  return (
    <div className={styles.container}>
      <SuggestionsNavbar />


    </div>
  );
}

export default SuggestionsLayout;
