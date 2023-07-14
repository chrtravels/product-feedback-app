import { useLocation } from 'react-router-dom';
import SuggestionCard from '../../components/suggestionCard/SuggestionCard';
import styles from './feedbackDetail.module.scss';

function FeedbackDetail() {
  const location = useLocation();
  const { feedback } = location.state;

  const {title, upvotes, status, description, comments, category} = feedback;
  console.log(comments)

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <SuggestionCard
        title={title}
        upvotes={upvotes}
        description={description}
        category={category}
        comments={comments}
        />
      </div>

    </div>
  );
}

export default FeedbackDetail;
