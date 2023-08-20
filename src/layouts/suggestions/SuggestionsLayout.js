import styles from './suggestionsLayout.module.scss';

import SuggestionsNavbar from '../../components/suggestionsNavbar/SuggestionsNavbar';
import SuggestionsList from '../../components/suggestionsList/SuggestionsList';


function SuggestionsLayout({ filteredByTag, setFilteredByTag, requests, setRequests }) {

  return (
    <div className={styles.container}>
      <SuggestionsNavbar filteredByTag={filteredByTag} setFilteredByTag={setFilteredByTag} />

      <SuggestionsList filteredByTag={filteredByTag} setFilteredByTag={setFilteredByTag} requests={requests} setRequests={setRequests} />
    </div>
  );
}

export default SuggestionsLayout;
