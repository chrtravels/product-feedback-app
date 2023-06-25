import SuggestionsNavbar from '../../components/suggestionsNavbar/SuggestionsNavbar';
import styles from './suggestionsLayout.module.scss';

import Empty from '../../assets/suggestions/illustration-empty.svg';
import { useEffect, useState } from 'react';

function SuggestionsLayout() {
  const [comments, setComments] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('./data.json')
      .then(res => res.json())
      .then((data) => {
        console.log(data)
        setComments(data)
      })

    }
    fetchData();
  }, [comments])

  console.log(comments);

  return (
    <div className={styles.container}>
      <SuggestionsNavbar />


    </div>
  );
}

export default SuggestionsLayout;
