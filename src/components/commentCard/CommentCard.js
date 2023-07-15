import { useEffect, useState } from 'react';
import styles from './commentCard.module.scss';

function CommentCard({comments, comment}) {
  const [currentComments, setCurrentComments] = useState(comments);
  const [currentComment, setCurrentComment] = useState(comment);
  const {id, request_id, comment_id, content, image, name, username, replying_to} = currentComment;

  useEffect(() => {
    setCurrentComments(comments)
    setCurrentComment(comment)
  }, [comments, comment]);


  let imageName = image.slice(image.lastIndexOf('/'));

  let hasReplies = 0;

  if (comments) {
    currentComments.forEach((comment) => {
      if (comment.comment_id === id) {
        hasReplies += 1;
      }
    })
  }
  console.log(hasReplies)

  return (
    <div className={styles.commentContainer}>
      <div className={styles.commentHeader}>
        <div className={styles.profilePhoto}>
          <img src={require(`../../assets/user-images${imageName}`)} />
        </div>

        <div className={`${styles.content} '${hasReplies > 0 ? 'hasReplies' : ''}'`}>
          <div className={styles.commentNameHeader}>
            <div className={styles.commentName}>
              <h4 className='dark-font'>{name}</h4>
              <span className='body-2 light-font'>{`@${username}`}</span>
            </div>
            <button className={`${styles.reply} body-3`}>Reply</button>
          </div>

          <div className={styles.body}>
            <p className='body-2 light-font'>{replying_to ? <span className={styles.replyingTo}>@{replying_to}  </span> : ''}{content}</p>

            {currentComments.map((comment, i) => {
              if (comment.comment_id === id) {
                return (
                  <CommentCard key={i} comment={comment} comments={comments}/>
                )
              }
            })}
          </div>

        </div>

      </div>


    </div>
  );
}

export default CommentCard;
