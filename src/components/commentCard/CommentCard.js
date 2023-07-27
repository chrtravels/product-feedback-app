import { useEffect, useState } from 'react';
import styles from './commentCard.module.scss';
import CommentReply from '../commentReply/CommentReply';

function CommentCard({comments, comment}) {
  const [currentComments, setCurrentComments] = useState(comments);
  const [currentComment, setCurrentComment] = useState(comment);
  const [hasReplies, setHasReplies] = useState(false);
  const [showPostReply, setShowPostReply] = useState(false);
  // const [isReply, setIsReply] = useState(false);
  const {id, request_id, comment_id, content, image, name, username, replying_to} = currentComment;

  useEffect(() => {
    setCurrentComments(comments)
    setCurrentComment(comment)

    if (comments) {
      currentComments.forEach((comment) => {
        if (comment.comment_id === id) {
          setHasReplies(true);
        }
      })
    }
  }, [comments, comment]);


  let imageName = image.slice(image.lastIndexOf('/'));


  return (
    <div className={`${styles.commentContainer} ${currentComment.replying_to !== null ? styles.isReply : ''}`}>
      <div className={styles.commentHeader}>
        <div className={styles.profilePhoto}>
          <img src={require(`../../assets/user-images${imageName}`)} />
        </div>

        <div className={styles.content}>
          <div className={styles.commentNameHeader}>
            <div className={styles.commentName}>
              <h4 className='dark-font'>{name}</h4>
              <span className='body-2 light-font'>{`@${username}`}</span>
            </div>
            <button className={`${styles.reply} body-3`} onClick={(e) => setShowPostReply(showPostReply ? false : true)}>Reply</button>
          </div>

          <div className={`${styles.body} ${hasReplies ? styles.borderLeft : ''}`}>
            <div id={styles.borderLeft}></div>
            <p className='body-2 light-font'>{replying_to ? <span className={styles.replyingTo}>@{replying_to}  </span> : ''}{content}</p>

            {currentComments.map((comment, i) => {

              if (comment.comment_id === id) {
                return (
                  <CommentCard key={i} comment={comment} comments={comments}/>
                )
              }
            })}

            {showPostReply &&
              <CommentReply />
            }
          </div>

        </div>

      </div>


    </div>
  );
}

export default CommentCard;
