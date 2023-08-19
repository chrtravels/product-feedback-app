import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './suggestionsNavbar.module.scss';

import {ReactComponent as SuggestionsIcon} from '../../assets/suggestions/icon-suggestions.svg';
import {ReactComponent as LeftArrow} from '../../assets/shared/icon-arrow-left.svg';
import SortListDropdown from '../sortListDropdown/SortListDropdown';

function SuggestionsNavbar({requests, setRequests}) {
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();

  const sortByOptions = ['Most Upvotes', 'Least Upvotes', 'Most Comments', 'Least Comments'];
  const [selectedOption, setSelectedOption] = useState(sortByOptions[0]);

  console.log(requests)

  useEffect(() => {

  })

  return (
    <div className={styles.container}>
      { path === '/'
          ? <div>
              <div className={styles.icon}></div>

              <div className={styles.content}>
                <SuggestionsIcon />
                <h3># Suggestions</h3>
                <span id={styles.sort}>Sort by :</span>
                <SortListDropdown
                  options={sortByOptions}
                  selectedOption={selectedOption}
                  setSelectedOption={setSelectedOption}
                />
              </div>
            </div>

          : <div>
              <div className={styles.roadmapContent}>
                <div className={styles.backNav}>
                  <LeftArrow stroke='white'/>
                  <Link
                  to={'..'}
                  onClick={(e) => {
                  e.preventDefault();
                  navigate(-1);
                  }}
                  >
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
