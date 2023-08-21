import styles from './tagsWidget.module.scss';

import { useEffect, useState } from 'react';


function TagsWidget({ requests, setFilteredByTag}) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [allIsActive, setAllIsActive] = useState(true);

  useEffect(() => {

    if (requests) {
      const tempSuggestions = [];
      const tempCategories = [];

      // Suggestion Requests will be passed to the main suggestion layout & shown based on category click
      requests.forEach((el) => {
        if (!tempCategories.includes(el.category)) {
          tempCategories.push(el.category);
        }

        if (el.status === 'suggestion') {

          if (selectedCategory === 'all') {
            tempSuggestions.push(el);
          } else if (el.category === selectedCategory.toLowerCase()) {
            tempSuggestions.push(el);
          }
        }
      });

      setFilteredByTag([...tempSuggestions.sort((votes1, votes2) => (votes1.upvotes < votes2.upvotes) ? 1 : (votes1.upvotes > votes2.upvotes) ? -1 : 0)]);
      setCategories(tempCategories);
    }

  }, [requests, selectedCategory, allIsActive])



  // Functions to handle toggling of tags
  function handleTagSelect(e) {
    setAllIsActive(false);
    setSelectedCategory(e.target.id)

  }

  function handleSelectAll() {
    setAllIsActive(true);
    setSelectedCategory('all');
  }
  // End of toggle tag functions

  return (
      <div className={styles.container}>
        <div className={`${styles.tagContainer} ${allIsActive ? styles.allActive : 'tag-vote'} tag-vote`}>
        <span className={allIsActive ? styles.tagActive : styles.tag} id={styles.all} onClick={handleSelectAll}>All</span>
        </div>
        {categories.map((el, index) => {
          let word = el;
          let category = word.charAt(0).toUpperCase() + word.slice(1);

          return (
            <div key={index} className={`${styles.tagContainer} ${selectedCategory === category ? 'allActive' : ''} tag-vote`}>
              <span className={selectedCategory === category ? 'tagActive' : 'tag'} id={category} onClick={handleTagSelect}>{category}</span>
            </div>
          )
        })}

      </div>
    )
}

export default TagsWidget;
