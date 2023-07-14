import styles from  './roadmapCard.module.scss';

import {ReactComponent as CommentsIcon} from '../../assets/shared/icon-comments.svg';
import {ReactComponent as UpArrow} from '../../assets/shared/icon-arrow-up.svg';

function RoadmapCard({item}) {
  const {title, upvotes, status, description, category, comments} = item;
  const caseCorrectedStatus = status[0].toUpperCase() + status.slice(1);
  const caseCorrectedCategory = category[0].toUpperCase() + category.slice(1);

  // Come back and add comment count

  return (
    <div className={styles.container}>
      <div className={`${styles.colorBar} ${status}`}></div>
      <div className={styles.cardContainer}>
        <div className={styles.headerContainer}>
            <div className={`${styles.bullet} circle-decorator ${status}`}></div>
            <p className="body-2 light-font">{caseCorrectedStatus}</p>
        </div>
        <div className={styles.bodyContainer}>
          <h3 className='dark-font'>{title}</h3>
          <p className="body-2 light-font">{description}</p>
        </div>
        <div className={styles.metaDataContainer}>
          <div className={styles.leftMetaData}>
            <div className={`${styles.tagContainer} tag-vote`}>
              <span className='tag'>{caseCorrectedCategory}</span>
            </div>
            <div className={`${styles.voteCount} tag-vote`}>
              <UpArrow />
              <h4>{upvotes}</h4>
            </div>
          </div>
          <div className={styles.commentCount}>
            <CommentsIcon />
            <h4 id={styles.commentCount}>{comments.length}</h4>
          </div>
        </div>
      </div>
    </div>

  );
}

export default RoadmapCard;
