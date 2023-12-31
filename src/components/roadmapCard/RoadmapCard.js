import styles from  './roadmapCard.module.scss';

import {ReactComponent as CommentsIcon} from '../../assets/shared/icon-comments.svg';
import { Link } from 'react-router-dom';
import VoteComponent from '../voteComponent/VoteComponent';

function RoadmapCard({ item, requests, setRequests }) {
  const {title, status, description, category, comments} = item;
  const caseCorrectedStatus = status[0].toUpperCase() + status.slice(1);
  const caseCorrectedCategory = category[0].toUpperCase() + category.slice(1);
  // console.log(requests)
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
          <Link
          style={{textDecoration: 'none'}}
          to='/feedback-detail'
          state={{ feedback: item}}
          >
            <h3 className='dark-font'>{title}</h3>
          </Link>
          <p className="body-2 light-font">{description}</p>
        </div>
        <div className={styles.metaDataContainer}>
          <div className={styles.leftMetaData}>
            <div className={`${styles.tagContainer} tag-vote`}>
              <span className='tag'>{caseCorrectedCategory}</span>
            </div>
              <VoteComponent className={styles.voteCount} request={item} requests={requests} setRequests={setRequests} cssState='roadmap' />
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
