import styles from './root.module.scss';
import '../global.scss';
import Sidebar from '../layouts/sidebar/Sidebar';
import SuggestionsLayout from '../layouts/suggestions/SuggestionsLayout';
import { useEffect, useState } from 'react';

import { getRequests } from '../ApiService';


function Root() {
  // Lifting state to root & pass to suggestions
  const [requests, setRequests] = useState();
  // State for the Tag component to filter the requests by tag selection
  const [filteredByTag, setFilteredByTag] = useState([]);

  useEffect(() => {
    getRequests().then((data) => setRequests(data));
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.sidebar}>
          <Sidebar
          requests={requests}
          setRequests={setRequests}
          setFilteredByTag={setFilteredByTag}
          />
        </div>

        <div className={styles.content}>
          <SuggestionsLayout filteredByTag={filteredByTag} setFilteredByTag={setFilteredByTag} requests={requests} setRequests={setRequests} />
        </div>
      </div>
    </div>
  );
}

export default Root;
