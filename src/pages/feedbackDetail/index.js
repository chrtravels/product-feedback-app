import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useRef, useState } from 'react';
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
  const [comments, setComments] = useState(feedback.comments);
  const id = feedback.id;
  const isMounted = useRef(false);
  const { requests, setRequests } = useContext(RequestContext)


  useEffect(() => {
    if (isMounted.current) {
      requests.forEach((el) => {
        if (id === el.id) setComments([...el.comments])
      })
    } else {
      isMounted.current = true;
    }
  }, [requests, setRequests, setComments ])


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

        <AddComment feedbackId={id} requests={requests} setRequests={setRequests} />
      </div>

    </div>
  );
}

export default FeedbackDetail;
