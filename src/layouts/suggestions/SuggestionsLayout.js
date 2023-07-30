import styles from './suggestionsLayout.module.scss';

import SuggestionsNavbar from '../../components/suggestionsNavbar/SuggestionsNavbar';
import SuggestionsList from '../../components/suggestionsList/SuggestionsList';


function SuggestionsLayout({ filteredByTag }) {

  return (
    <div className={styles.container}>
      <SuggestionsNavbar />

      <SuggestionsList filteredByTag={filteredByTag} />
    </div>
  );
}

export default SuggestionsLayout;
