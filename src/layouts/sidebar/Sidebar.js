import TagsWidget from '../../components/tagsWidget/TagsWidget';
import styles from './sidebar.module.scss';
import { useEffect } from 'react';
import RoadmapWidget from '../../components/roadmapWidget/RoadmapWidget';

function Sidebar({ onQuery }) {
  const { render, suggestions } = TagsWidget();
  const { renderRoadmapWidget, roadmapSuggestions} = RoadmapWidget();

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

    {renderRoadmapWidget}

    </div>
  );
}

export default Sidebar;
