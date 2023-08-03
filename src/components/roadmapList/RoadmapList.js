import { useEffect, useState } from 'react';
import styles from './roadmapList.module.scss';
import RoadmapCard from '../roadmapCard/RoadmapCard';

function RoadmapList({ requests, setRequests}) {
  const [planned, setPlanned] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [live, setLive] = useState([]);

  useEffect(() => {
    const tempPlanned = [];
    const tempInProgress = [];
    const tempLive = [];

    requests.forEach((request) => {
      const status = request.status;

      if (status === 'planned') {
        tempPlanned.push(request);
      } else if (status === 'in-progress') {
        tempInProgress.push(request);
      } else if (status === 'live') {
        tempLive.push(request);
      }
    })

    setPlanned(tempPlanned);
    setInProgress(tempInProgress);
    setLive(tempLive);


  }, [setRequests])

  return (
    <div className={styles.container}>
      <div className={styles.columnContainer}>
        <div className={styles.columnHeader}>
          <h3 className='dark-font'>Planned ({planned.length})</h3>
          <p className='body-2 light-font'>Ideas prioritized for research</p>
        </div>
        <div className={styles.cards}>
          {planned.map((item) => {
           return <RoadmapCard key={item.id} item={item} requests={requests} setRequests={setRequests} />
          })}
        </div>
      </div>

      <div className={styles.columnContainer}>
        <div className={styles.columnHeader}>
          <h3 className='dark-font'>In-Progress ({inProgress.length})</h3>
          <p className='body-2 light-font'>Currently being developed</p>
        </div>
        <div className={styles.cards}>
          {inProgress.map((item) => {
           return <RoadmapCard key={item.id} item={item} requests={requests} setRequests={setRequests} />
          })}
        </div>
      </div>

      <div className={styles.columnContainer}>
        <div className={styles.columnHeader}>
          <h3 className='dark-font'>Live ({live.length})</h3>
          <p className='body-2 light-font'>Released Features</p>
        </div>
        <div className={styles.cards}>
          {live.map((item) => {
           return <RoadmapCard key={item.id} item={item} requests={requests} setRequests={setRequests} />
          })}
        </div>
      </div>
    </div>
  );
}

export default RoadmapList;
