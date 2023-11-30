import React, {useEffect, useState} from 'react';
import './App.css';
import ReactPaginate from 'react-paginate';
import PaginatedItems from './components/posts'
import Comments from './components/comments'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';


function App() {
  const [posts, setPosts] = useState([]);
  const [comms, setComms] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then(data => setPosts(data));

  }, [])

  return (
    <>
    {}
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<PaginatedItems data={posts}/>}
        />

        <Route
          exact
          path="/comment/:id"
          element={<Comments data={comms}/>}
        />
      </Routes>
    </Router>
    </>
  )
}

export default App;
