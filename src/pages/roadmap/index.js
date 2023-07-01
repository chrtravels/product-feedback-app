import { useLocation } from 'react-router-dom';
import styles from './roadmap.module.scss';

function Roadmap() {
  const location = useLocation();
  const { suggestions } = location.state;

  console.log(suggestions)

  return (
    <div className={styles.container}>
      <h1>Roadmap</h1>
    </div>
  );
}

export default Roadmap;
