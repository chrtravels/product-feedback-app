import styles from './roadmap.module.scss';
import SuggestionsNavbar from '../../components/suggestionsNavbar/SuggestionsNavbar';
import RoadmapList from '../../components/roadmapList/RoadmapList';

// Get list directly from API service for top level Roadmap page
import { getRequests } from '../../ApiService';
import { useEffect, useState } from 'react';

function Roadmap() {
   const [requests, setRequests] = useState([]);
   const [tempRequests, setTempRequests] = useState([]);

  useEffect(() => {
    getRequests().then((data) => setTempRequests(data));

    setRequests(tempRequests)
  }, [tempRequests, setRequests])

  // console.log(requests)

  if (requests.length > 0) {
    return (
      <div className={styles.container}>
        <div className={styles.body}>
          <SuggestionsNavbar />

          <div className={styles.content}>
            <RoadmapList requests={requests} setRequests={setRequests} />
          </div>
        </div>

      </div>

    );
  }
}

export default Roadmap;
