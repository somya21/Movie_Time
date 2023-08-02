 import React from "react";
 import { BrowserRouter as Router, Route, Routes, Switch} from "react-router-dom";  
 import Home from "./components/Home/home";
 import MovieDetail from "./components/MovieDetail/moviedetail";
 import PageNotFound from "./components/PageNotFound/pagenotfound";
 import Header from "./components/Header/header";
 import Footer from "./components/Footer/footer";
 import './App.scss';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Router>
        <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/movie/:imdbID" element={<MovieDetail />} />
        <Route element={<PageNotFound />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
