import TagsWidget from '../../components/tagsWidget/TagsWidget';
import styles from './sidebar.module.scss';
import RoadMapWidget from '../../components/roadmapWidget/RoadmapWidget';
import { useEffect } from 'react';

function Sidebar({ onQuery }) {
  const { render, suggestions } = TagsWidget();

  // Pass suggestions to parent root.jsx
  useEffect(() => {
    onQuery(suggestions);
  });

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
    {render}

    <RoadMapWidget />

    </div>
  );
}

export default Sidebar;
