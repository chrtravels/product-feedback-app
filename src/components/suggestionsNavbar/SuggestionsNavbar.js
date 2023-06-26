import { Link } from 'react-router-dom';
import styles from './suggestionsNavbar.module.scss';

import {ReactComponent as SuggestionsIcon} from '../../assets/suggestions/icon-suggestions.svg';

function SuggestionsNavbar() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.icon}>

        </div>

        <div className={styles.content}>
          <SuggestionsIcon />
          <h3># Suggestions</h3>
          <span id={styles.sort}>Sort by :</span>
        </div>
      </div>

      <Link to="/new-feedback">
        <button className="button button-primary">+ Add Feedback</button>
      </Link>


    </div>
  );
}

export default SuggestionsNavbar;
