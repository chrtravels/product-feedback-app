import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { RequestContext } from '../../context/requestsContext';
import SuggestionCard from '../../components/suggestionCard/SuggestionCard';
import styles from './feedbackDetail.module.scss';
import FeedbackList from '../../components/feedbackList/FeedbackList';

import {ReactComponent as LeftArrow} from '../../assets/shared/icon-arrow-left.svg';
import AddComment from '../../components/addComment/AddComment';


function FeedbackDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const { feedback } = location.state;
  const {id, comments } = feedback;
  const { requests, setRequests } = useContext(RequestContext)

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

        <Link to="/edit-feedback" state={{ feedback: feedback }}>
          <button className='button button-secondary'>Edit Feedback</button>
        </Link>
      </div>

      <div className={styles.body}>
        <SuggestionCard
        id={id}
        request={feedback}
        requests={requests}
        setRequests={setRequests}
        cssState='suggestion'
        />

        <FeedbackList comments={comments}/>

        <AddComment feedbackId={id}/>
      </div>

    </div>
  );
}

export default FeedbackDetail;
