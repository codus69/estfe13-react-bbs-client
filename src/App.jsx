import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BoardList from './components/BoardList';
import Write from './components/Write';

function App() {
  return (
    <div className="container">
      <h1>React BBS</h1>
      <BoardList />
      <Write />
    </div>
  );
}

export default App;
