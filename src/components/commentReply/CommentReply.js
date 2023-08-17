import { useEffect, useState } from 'react';
import styles from './commentReply.module.scss';
import { addComment } from '../../ApiService';

function CommentReply({ currentComment }) {
  const [reply, setReply] = useState('');

  const { id, request_id, username } = currentComment;

  const [state, setState] = useState({
    request_id: request_id,
    comment_id: id,
    content: reply,
    username: 'velvetround',
    name: 'Zena Kelley',
    image: './assets/user-images/image-zena.jpg',
    replying_to: username
  })

  const onChange = e => {
    setState((state) => ({
      ...state, content: e.target.value
    }))
    setReply(e.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addComment(state);
    window.location.reload();
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
