import { useLocation } from 'react-router-dom';
import styles from './roadmap.module.scss';
import SuggestionsNavbar from '../../components/suggestionsNavbar/SuggestionsNavbar';

function Roadmap() {
  const location = useLocation();
  const { suggestions } = location.state;



  return (
    <div className={styles.container}>
      <SuggestionsNavbar />

      <div className={styles.content}>

      </div>
    </div>

  );
}

export default Roadmap;
