import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BoardList from './components/BoardList';
import { Routes, Route } from 'react-router';
import Write from './components/Write';

function App() {
  return (
    <div className="container">
      <h1>React BBS</h1>
      <Routes>
        <Route path="/" element={<BoardList />} />
        <Route path="/write" element={<Write />} />
        {/* <Route path="/write" element={<View />} /> */}
      </Routes>
    </div>
  );
}

export default App;
