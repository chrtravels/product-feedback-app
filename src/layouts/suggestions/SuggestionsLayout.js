import SuggestionsNavbar from '../../components/suggestionsNavbar/SuggestionsNavbar';
import SuggestionsList from '../../components/suggestionsList/SuggestionsList';


function SuggestionsLayout({ filteredByTag, setFilteredByTag, requests, setRequests }) {

  return (
    <div>
      <SuggestionsNavbar filteredByTag={filteredByTag} setFilteredByTag={setFilteredByTag} />

      <SuggestionsList filteredByTag={filteredByTag} setFilteredByTag={setFilteredByTag} requests={requests} setRequests={setRequests} />
    </div>
  );
}

export default SuggestionsLayout;
