import { useLocation, Link, useNavigate } from 'react-router-dom';
import SuggestionCard from '../../components/suggestionCard/SuggestionCard';
import styles from './feedbackDetail.module.scss';
import FeedbackList from '../../components/feedbackList/FeedbackList';

import {ReactComponent as LeftArrow} from '../../assets/shared/icon-arrow-left.svg';
import AddComment from '../../components/addComment/AddComment';

function FeedbackDetail() {
  const location = useLocation();
  const { feedback } = location.state;
  const navigate = useNavigate();

  const {id, title, upvotes, status, description, comments, category} = feedback;
  // console.log(comments)
  console.log('feedback: ', feedback)

  return (
    <div className={styles.container}>
      <div className={styles.feedbackHeader}>
        <div className={styles.backNav}>
          <LeftArrow stroke='#3A4374'/>
          <Link
          to={'..'}
          style={{textDecoration: 'none'}}
          onClick={(e) => {
          e.preventDefault();
          navigate(-1);
          }}
          >
            <p className={`${styles.goBack} font-dark body-3`}>Go Back</p>
          </Link>

        </div>

        <Link to="/edit-feedback">
          <button className='button button-secondary'>Edit Feedback</button>
        </Link>
      </div>

      <div className={styles.body}>
        <SuggestionCard
        title={title}
        upvotes={upvotes}
        description={description}
        category={category}
        comments={comments}
        />

        <FeedbackList comments={comments}/>

        <AddComment feedbackId={id}/>
      </div>

    </div>
  );
}

export default FeedbackDetail;
