import { useEffect, useState } from 'react';
import {ReactComponent as UpArrow} from '../../assets/shared/icon-arrow-up.svg';
import styles from './voteComponent.module.scss';
import { upVote } from '../../ApiService';


function VoteComponent({ request, requests, setRequests, cssState }) {
  const { upvotes, upvoted, id } = request;
  const [hasVoted, setHasVoted] = useState(upvoted)
  const [votes, setVotes] = useState(upvotes);

  const requestsCopy = [...requests];
  const requestCopy = request;

  const requestObject = {
    id: id,
    upvotes: votes,
    upvoted: hasVoted
  }

  useEffect(() => {
      requestCopy.upvotes = votes;
      requestCopy.upvoted = hasVoted;

      requestsCopy.forEach((item) => {
        if (item.id === id) {
        item = requestCopy;
      }
    });

    setRequests(requestsCopy);
    upVote(requestObject);

  }, [votes, hasVoted]);

  function handleClick () {
    setVotes(hasVoted ? votes - 1 : votes + 1);
    setHasVoted(hasVoted ? false : true);
  }


  return (
    <div className={cssState === 'suggestion' ? `${styles.suggestionVoteContainer} tag-vote` : `${styles.roadmapVoteContainer} tag-vote`} onClick={handleClick}>
    <UpArrow stroke='#4661E6' />
    <h4>{upvotes}</h4>
  </div>
  );
}

export default VoteComponent;
