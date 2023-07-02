import { useLocation } from 'react-router-dom';
import styles from './roadmap.module.scss';
import SuggestionsNavbar from '../../components/suggestionsNavbar/SuggestionsNavbar';
import RoadmapList from '../../components/roadmapList/RoadmapList';


function Roadmap() {
  const location = useLocation();
  const { suggestions } = location.state;

  return (
    <div className={styles.container}>
      <SuggestionsNavbar />

      <div className={styles.content}>
        <RoadmapList suggestions={suggestions}/>
      </div>
    </div>

  );
}

export default Roadmap;
