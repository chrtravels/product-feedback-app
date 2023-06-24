import styles from './suggestionsNavbar.module.scss';

function SuggestionsNavbar() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.icon}>

        </div>

        <div className={styles.content}>
          <h3># Suggestions</h3>
          <span>Sort by :</span>
        </div>
      </div>

      <button className="button button-primary">+ Add Feedback</button>

    </div>
  );
}

export default SuggestionsNavbar;
