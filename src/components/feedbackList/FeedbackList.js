import styles from './feedbackList.module.scss';
import CommentCard from '../commentCard/CommentCard';


function FeedbackList({comments}) {
  console.log(comments)

  return (
    <div className={styles.container}>

      <div className={styles.commentsHeader}>
        <h3 className='dark-font'>{comments.length} Comments</h3>
      </div>

      <div className={styles.commentsContainer}>
        {comments.map((comment, i) => {

          if (!comment.comment_id) {
            return (
              <CommentCard key={i} comments={comments} comment={comment} />
            )
          }
        })}
      </div>
    </div>
  );
}

export default FeedbackList;
