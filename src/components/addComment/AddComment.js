import { useState } from 'react';
import styles from './addComment.module.scss';

function AddComment() {
  const [characterCount, setCharacterCount] = useState(250);
  const [comment, setComment] = useState('');

  const onChange = e => {
    setComment(e.target.value)
    setCharacterCount(250 - comment.length)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
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
