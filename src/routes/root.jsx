import styles from './root.module.scss';
import '../global.scss';
import Sidebar from '../layouts/sidebar/Sidebar';
import SuggestionsLayout from '../layouts/suggestions/SuggestionsLayout';
import { useState } from 'react';




function Root() {
  // Query suggestions from the Sidebar and pass them to SuggestionsLayout
  const [query, setQuery] = useState([]);

  return (
    <div className={styles.container}>
     <Sidebar
      className={styles.sidebar}
      onQuery={setQuery}
    />

     <div className={styles.content}>
      <SuggestionsLayout suggestions={query}/>
     </div>
    </div>
  );
}

export default Root;
