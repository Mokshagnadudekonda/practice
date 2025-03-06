import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile/Profile.js'
import './components/Profile/Profile.css'
import BookMyShow from "./components/BookMyShow/BookMyShow.js"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Movies from './components/Movies/Movies.js';
import Events from './components/Events/Events.js';


function App() {


  return (

    <Router>
      <Profile />
      <Routes>
        <Route path="/" element={<BookMyShow />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/Events" element={<Events />}></Route>
      </Routes>
    </Router>



  );
}

export default App;
