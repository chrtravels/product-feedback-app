import styles from './roadmapList.module.scss';

function RoadmapList() {


  return (
    <div className={styles.container}>
      <div className={styles.columnHeaderContainer}>
        <div className={styles.columnHeader}>
          <h3 className='dark-font'>Planned (2)</h3>
          <p className='body-2 font-light'>Ideas prioritized for research</p>
        </div>
        <div className={styles.cards}>

        </div>
      </div>

      <div className={styles.columnHeaderContainer}>
        <div className={styles.columnHeader}>
          <h3 className='dark-font'>In-Progress (2)</h3>
          <p className='body-2 font-light'>Currently being developed</p>
        </div>
        <div className={styles.cards}>

        </div>
      </div>

      <div className={styles.columnHeaderContainer}>
        <div className={styles.columnHeader}>
          <h3 className='dark-font'>Live (2)</h3>
          <p className='body-2 font-light'>Released Features</p>
        </div>
        <div className={styles.cards}>

        </div>
      </div>
    </div>
  );
}

export default RoadmapList;
