import styles from './suggestionsLayout.module.scss';

import SuggestionsNavbar from '../../components/suggestionsNavbar/SuggestionsNavbar';
import SuggestionsList from '../../components/suggestionsList/SuggestionsList';


function SuggestionsLayout({ filteredByTag, requests, setRequests }) {

  return (
    <div className={styles.container}>
      <SuggestionsNavbar />

      <SuggestionsList filteredByTag={filteredByTag} requests={requests} setRequests={setRequests} />
    </div>
  );
}

export default SuggestionsLayout;
