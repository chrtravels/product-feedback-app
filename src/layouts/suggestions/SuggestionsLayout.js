import styles from './suggestionsLayout.module.scss';

import SuggestionsNavbar from '../../components/suggestionsNavbar/SuggestionsNavbar';
import SuggestionsList from '../../components/suggestionsList/SugguestionsList';


function SuggestionsLayout() {

  return (
    <div className={styles.container}>
      <SuggestionsNavbar />

      <SuggestionsList />
    </div>
  );
}

export default SuggestionsLayout;
