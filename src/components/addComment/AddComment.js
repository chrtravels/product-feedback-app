import { useState } from 'react';
import styles from './addComment.module.scss';
import { addComment } from '../../ApiService';

function AddComment({ feedbackId, commentId, replyingTo, requests, setRequests }) {
  const [characterCount, setCharacterCount] = useState(250);
  const [comment, setComment] = useState('');

  const [state, setState] = useState({
    request_id: feedbackId,
    comment_id: commentId || null,
    content: comment,
    username: 'velvetround',
    name: 'Zena Kelley',
    image: './assets/user-images/image-zena.jpg',
    replying_to: replyingTo || null
  })

  const onChange = e => {
    setState((state) => ({
      ...state, content: e.target.value
    }))
    setComment(e.target.value)
    setCharacterCount(250 - e.target.value.length)
  }

  const handleSubmit = () => {
    addComment(state);
    setComment('');
    setRequests([...requests, state]);
    window.location.reload();
  }


  return (
    <div className={styles.container}>
      <h3 className='dark-font'>Add Comment</h3>

      <div className={styles.formRow}>
          <textarea
            className='body-2'
            name='detail'
            rows='4'
            value={comment}
            placeholder='Type your comment here'
            onChange={onChange}
          />
      </div>

      <div className={styles.commentFooter}>
        <p className='body-2 light-font'>{characterCount} Characters Left</p>

        <div className={styles.button}>
          <button className='button button-primary' onClick={handleSubmit}>Post Comment</button>
        </div>
      </div>
    </div>
  );
}

export default AddComment;
