import styles from './root.module.scss';
import '../global.scss';
import Sidebar from '../layouts/sidebar/Sidebar';
import SuggestionsLayout from '../layouts/suggestions/SuggestionsLayout';
import { useEffect, useState } from 'react';

import { getRequests } from '../ApiService';


function Root() {
  // Instead of Querying sidebar, lifting state to root
  const [requests, setRequests] = useState();
  // State for the Tag component to filter the requests by tag selection
  const [filteredByTag, setFilteredByTag] = useState([]);

  useEffect(() => {
    getRequests().then((data) => setRequests(data));
  }, [setRequests])


  return (
    <div className={styles.container}>
     <Sidebar
      className={styles.sidebar}
      requests={requests}
      setRequests={setRequests}
      setFilteredByTag={setFilteredByTag}
    />

     <div className={styles.content}>
      <SuggestionsLayout filteredByTag={filteredByTag} requests={requests} setRequests={setRequests} />
     </div>
    </div>
  );
}

export default Root;
