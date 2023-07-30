import { useEffect, useState } from 'react';
import {ReactComponent as UpArrow} from '../../assets/shared/icon-arrow-up.svg';
import styles from './voteComponent.module.scss';
import { upVote } from '../../ApiService';


function VoteComponent({ request }) {
  const { upvotes, upvoted, id } = request;
  const [hasVoted, setHasVoted] = useState(upvoted)
  const [votes, setVotes] = useState(upvotes);

  const requestObject = {
    id: id,
    upvotes: votes,
    upvoted: hasVoted
  }

  // remove use Effect and put upvote in another function, to be called when setVotes updates
  // Right now upvotes is being called when the component loads which is unnecessary.
  useEffect(() => {
    upVote(requestObject);
  }, [votes, hasVoted])

  function handleClick () {
    setVotes(hasVoted ? votes - 1 : votes + 1);
    setHasVoted(hasVoted ? false : true);
    // upVote({ id: id, upvotes: hasVoted ? votes - 1 : votes + 2, upvoted: hasVoted ? false : true});
  }


  return (
    <div className={`${styles.container} tag-vote`} onClick={handleClick}>
    <UpArrow />
    <h4>{votes}</h4>
  </div>
  );
}

export default VoteComponent;
