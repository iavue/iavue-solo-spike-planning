import React from 'react';
// import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import UploadForm from './components/UploadForm/UploadForm';
import UploadList from './components/UploadList/UploadList';


function App() {
  return (
    <Router>
      <div className="App">

        <header className="App-header">
          <h1>Solo Spike</h1>
          <h2>File Upload</h2>
        </header>

        <UploadForm />

        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/uploadForm">Upload a File</Link>
            </li>
            <li>
              <Link to="/uploadList">All Files</Link>
            </li>
          </ul>
        </nav> */}
        
        {/* Element specifies the component to render when the url path matches "path" */}
        <Route path="/" exact element={<UploadForm />} />

        <Route path="/uploadForm" element={<UploadForm />} />

        <Route path="/uploadList" element={<UploadList />} />

      </div>
    </Router>
  );
}

export default App;
