import styles from './suggestionCard.module.scss';

import {ReactComponent as CommentsIcon} from '../../assets/shared/icon-comments.svg';
import {ReactComponent as UpArrow} from '../../assets/shared/icon-arrow-up.svg';

function SuggestionCard(props) {
  const {title, upvotes, status, description, comments, category} = props;

  return (
    <div className={styles.container}>
      <div className={styles.leftContent}>
        <div className={`${styles.voteCount} tag-vote`}>
          <UpArrow />
          <h4>{upvotes}</h4>
        </div>

        <div className={styles.content}>
          <h3 className='dark-font'>{title}</h3>
          <p className="body-2 light-font">{description}</p>
          <div className={styles.tag}></div>
        </div>
      </div>

      <div className={styles.commentCount}>
        <CommentsIcon />
        <h4 id={styles.commentCount}>3</h4>
      </div>
    </div>
  );
}

export default SuggestionCard;
