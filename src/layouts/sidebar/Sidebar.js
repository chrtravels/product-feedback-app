import TagsWidget from '../../components/tagsWidget/TagsWidget';
import styles from './sidebar.module.scss';
import RoadmapWidget from '../../components/roadmapWidget/RoadmapWidget';

function Sidebar({ requests, setRequests, setFilteredByTag }) {

  return (
    <div className={styles.container}>
      <div className={styles.header}>
      <div className={styles.content}>
        <h1 className='white-font'>Frontend Mentor</h1>
        <p className='body-1 white-font'>Feedback Board</p>
      </div>
      <img src={require("../../assets/suggestions/desktop/background-header.png")} alt="header background" />
      </div>

    {/* Displaying the TagsWidget Component */}
    <TagsWidget requests={requests} setFilteredByTag={setFilteredByTag} />
    {/* Displaying the RoadmapWidget Component */}
    <RoadmapWidget requests={requests} setRequests={setRequests} />

    </div>
  );
}

export default Sidebar;
