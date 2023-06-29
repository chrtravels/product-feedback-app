import styles from './tagsWidget.module.scss';

import { useEffect, useState } from 'react';
import { getRequests } from '../../ApiService';


function TagsWidget() {
  const [suggestions, setSuggestions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [allIsActive, setAllIsActive] = useState(true);
  const [categoryIsActive, setCategoryIsActive] = useState(false);
  const [selectedSuggestions, setSelectedSuggestions] = useState([]);

  useEffect(() => {
    const tempSuggestions = [];
    const tempCategories = [];

    getRequests().then(data => {
      // Suggestion Requests will be passed to the main suggestion layout & shown based on category click
      data.forEach((el) => {
        if (!tempCategories.includes(el.category)) {
          tempCategories.push(el.category);
        }

        if (el.status === 'suggestion') {

          if (selectedCategory === 'all') {
            tempSuggestions.push(el);
          } else if (el.category === selectedCategory) {
            tempSuggestions.push(el);
          }
        }
      });

      setSuggestions(tempSuggestions);
      setCategories(tempCategories);

    });
  }, [selectedCategory, allIsActive])

  console.log('suggestions ', suggestions);
  console.log('categories: ', categories)

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
      {categories.map((el) => {
        let word = el;
        let category = word.charAt(0).toUpperCase() + word.slice(1);

        return (
          <div className={`${styles.tagContainer} ${selectedCategory === category ? styles.allActive : ''} tag-vote`}>
            <span className={selectedCategory === category ? styles.tagActive : styles.tag} id={category} onClick={handleTagSelect}>{category}</span>
          </div>
        )
      })}



    </div>
  );
}

export default TagsWidget;
