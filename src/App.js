import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatPage from './pages/ChatPage';
import './styles/commonStyles.css';
import './styles/ChatPage.css';
import './styles/NewMessageForm.css';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define a route for the ChatPage component */}
        <Route path="/" element={<ChatPage />} />
      </Routes>
    </Router>
  );
};

export default App;
