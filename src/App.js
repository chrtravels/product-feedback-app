import './App.css';
import './global.scss';
import Sidebar from './layouts/sidebar/Sidebar';
import SuggestionsLayout from './layouts/suggestions/SuggestionsLayout';


function App() {
  return (
    <div className="container">
     <Sidebar className="sidebar"/>

     <div className="content">
      <SuggestionsLayout />
     </div>
    </div>
  );
}

export default App;
