import styles from './roadmapWidget.module.scss';

import { useEffect, useState } from 'react';
import { getRequests } from '../../ApiService';
import { Link } from 'react-router-dom';


function RoadmapWidget() {
  const [roadmapSuggestions, setRoadmapSuggestions] = useState([]);
  const [plannedCount, setPlannedCount] = useState(0);
  const [inProgressCount, setInProgressCount] = useState(0)
  const [liveCount, setLiveCount] = useState(0);


  useEffect(() => {
    const tempSuggestions = [];
    let planned = 0;
    let inProgress = 0;
    let live = 0;

    getRequests().then(data => {
      // Suggestion that are on the roadmap will be passed to the roadmap component
      data.forEach((el) => {
        const status = el.status;

        if (status !== 'suggestion') {
          tempSuggestions.push(el);

          if (status === 'planned') {
            planned += 1;
          } else  if (status === 'in-progress') {
            inProgress += 1;
          } else  if (status === 'live') {
            live += 1;
          }
        }
      });

      setRoadmapSuggestions(tempSuggestions);
      setPlannedCount(planned)
      setInProgressCount(inProgress)
      setLiveCount(live)

    });
  }, [])

  // console.log('roadmap suggestions ', roadmapSuggestions);


  return {
    roadmapSuggestions,
    renderRoadmapWidget: (
      <div className={styles.container}>
        <div className={styles.header}>
          <h3 className='dark-font'>Roadmap</h3>
          <Link
          to="/roadmap"
          state={{ suggestions: roadmapSuggestions }}
          >
            <span className='body-2'>View</span>
          </Link>
        </div>

        <div className={styles.statusContainer}>
          <div className={styles.statusRow}>
            <div className={styles.leftContent}>
              <div className={'circle-decorator planned'}></div>
              <p className="body-2 light-font">Planned</p>
            </div>
            <h3 className="light-font">{plannedCount}</h3>
          </div>
          <div className={styles.statusRow}>
            <div className={styles.leftContent}>
              <div className={'circle-decorator in-progress'}></div>
              <p className="body-2 light-font">In-Progress</p>
            </div>
            <h3 className="light-font">{inProgressCount}</h3>
          </div>
          <div className={styles.statusRow}>
            <div className={styles.leftContent}>
              <div className={'circle-decorator live'}></div>
              <p className="body-2 light-font">Live</p>
            </div>
            <h3 className="light-font">{liveCount}</h3>
          </div>
        </div>
      </div>
    )
  };
}

export default RoadmapWidget;
