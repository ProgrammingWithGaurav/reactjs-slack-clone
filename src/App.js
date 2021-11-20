import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <h1>ReactJs Slack Clone</h1>
      <Header />
      <div className="app-body">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
