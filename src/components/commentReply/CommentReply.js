import { useState } from 'react';
import styles from './commentReply.module.scss';

function CommentReply() {
  const [reply, setReply] = useState('');

  const onChange = e => {
    setReply(e.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className={styles.container}>

      <div className={styles.formRow}>
          <textarea
            className='body-2'
            name='detail'
            rows='4'
            value={reply}
            placeholder='Type your comment here'
            onChange={onChange}
          />
      </div>

      <div className={styles.button}>
        <button className='button button-primary' onClick={handleSubmit}>Post Reply</button>
      </div>

    </div>
  );
}

export default CommentReply;
