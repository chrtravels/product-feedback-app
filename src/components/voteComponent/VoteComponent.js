import { useEffect, useRef, useState } from 'react';
import {ReactComponent as UpArrow} from '../../assets/shared/icon-arrow-up.svg';
import styles from './voteComponent.module.scss';
import { upVote } from '../../ApiService';


function VoteComponent({ request, requests, setRequests, cssState }) {
  const { upvotes, upvoted, id } = request;
  const [hasVoted, setHasVoted] = useState(upvoted)
  const [votes, setVotes] = useState(upvotes);
  const isMounted = useRef(false);

  const requestsCopy = [...requests];
  const requestCopy = request;

  const requestObject = {
    id: id,
    upvotes: votes,
    upvoted: hasVoted
  }

  useEffect(() => {
    // skip initial render and run when votes has updated
    if (isMounted.current) {
      requestCopy.upvotes = votes;
      requestCopy.upvoted = hasVoted;

      requestsCopy.forEach((item) => {
        if (item.id === id) {
        item = requestCopy;
      }
    });

    setRequests(requestsCopy);
    upVote(requestObject);
    } else {
      isMounted.current = true;
    }

  }, [votes, hasVoted]);

  function handleClick () {
    setVotes(hasVoted ? votes - 1 : votes + 1);
    setHasVoted(hasVoted ? false : true);
    // upVote({ id: id, upvotes: hasVoted ? votes - 1 : votes + 2, upvoted: hasVoted ? false : true});
  }


  return (
    <div className={cssState === 'suggestion' ? `${styles.suggestionVoteContainer} tag-vote` : `${styles.roadmapVoteContainer} tag-vote`} onClick={handleClick}>
    <UpArrow stroke='#4661E6' />
    <h4>{votes}</h4>
  </div>
  );
}

export default VoteComponent;
