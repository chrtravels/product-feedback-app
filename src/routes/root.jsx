import styles from './root.module.scss';
import '../global.scss';
import Sidebar from '../layouts/sidebar/Sidebar';
import SuggestionsLayout from '../layouts/suggestions/SuggestionsLayout';




function Root() {
  return (
    <div className={styles.container}>
     <Sidebar className={styles.sidebar}/>

     <div className={styles.content}>
      <SuggestionsLayout />
     </div>
    </div>
  );
}

export default Root;
