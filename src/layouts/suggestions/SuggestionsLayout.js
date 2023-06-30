import styles from './suggestionsLayout.module.scss';

import SuggestionsNavbar from '../../components/suggestionsNavbar/SuggestionsNavbar';
import SuggestionsList from '../../components/suggestionsList/SuggestionsList';


function SuggestionsLayout({suggestions}) {

  return (
    <div className={styles.container}>
      <SuggestionsNavbar />

      <SuggestionsList suggestions={suggestions}/>
    </div>
  );
}

export default SuggestionsLayout;
