import styles from './suggestionCard.module.scss';

import {ReactComponent as CommentsIcon} from '../../assets/shared/icon-comments.svg';
import { Link } from 'react-router-dom';
import VoteComponent from '../voteComponent/VoteComponent';

function SuggestionCard(props) {
  const {id, title, upvotes, description, comments, category} = props;

  return (

      <div className={styles.container}>
        <VoteComponent request={props} />

        <Link
        className={styles.link}
        style={{textDecoration: 'none'}}
        to='/feedback-detail'
        state={{ feedback: props}}
        >
          <div className={styles.cardBody}>
            <div className={styles.content}>
              <h3 className='dark-font'>{title}</h3>
              <p className="body-2 light-font">{description}</p>
              <div className={`${styles.tagContainer} tag-vote`}>
                <span className='tag'>{category}</span>
              </div>
            </div>


            <div className={styles.commentCount}>
              <CommentsIcon />
              <h4 id={styles.commentCount}>{comments.length}</h4>
            </div>
          </div>
        </Link>
      </div>
  );
}

export default SuggestionCard;
