import styles from './suggestionCard.module.scss';

import {ReactComponent as CommentsIcon} from '../../assets/shared/icon-comments.svg';

function SuggestionCard() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContent}>
        <div className={styles.voteCounter}>

        </div>

        <div className={styles.content}>
          <h3>Card Name</h3>
          <p className="body1">Card body content</p>
          <div className={styles.tag}></div>
        </div>
      </div>

      <div className={styles.commentCount}>
        <CommentsIcon />
        <h4>3</h4>
      </div>
    </div>
  );
}

export default SuggestionCard;
