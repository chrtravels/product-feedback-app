import { Link, useLocation } from 'react-router-dom';
import styles from './suggestionsNavbar.module.scss';

import {ReactComponent as SuggestionsIcon} from '../../assets/suggestions/icon-suggestions.svg';
import {ReactComponent as LeftArrow} from '../../assets/shared/icon-arrow-left.svg';

function SuggestionsNavbar() {
  const location = useLocation();
  const path = location.pathname;


  return (
    <div className={styles.container}>
      { path === '/'
          ? <div>
              <div className={styles.icon}></div>

              <div className={styles.content}>
                <SuggestionsIcon />
                <h3># Suggestions</h3>
                <span id={styles.sort}>Sort by :</span>
              </div>
            </div>

          : <div>
              <div className={styles.roadmapContent}>
                <div className={styles.backNav}>
                  <LeftArrow stroke='white'/>
                  <Link to="/">
                    <p className={`${styles.goBack} white-font body-3`}>Go Back</p>
                  </Link>
                </div>
                <h3 className='white-font'>Roadmap</h3>
              </div>
            </div>
        }


      <Link to="/new-feedback">
        <button className="button button-primary">+ Add Feedback</button>
      </Link>


    </div>
  );
}

export default SuggestionsNavbar;
