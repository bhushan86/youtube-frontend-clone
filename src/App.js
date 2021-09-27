import React from 'react'
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import SearchPage from './SearchPage';



function App() {
  return (
    <div className="App">
      <Router>
       <Switch>
       <Route path="/search/:searchTerm">
       <Header/>
       <div className="app__page">
      <Sidebar/>
     <SearchPage/>
    </div>
         </Route>

         <Route path="/">
         <Header/>
     <div className="app__page">
      <Sidebar/>
     <RecommendedVideos/>
    </div>

         </Route>

       </Switch>
      </Router>
   
  
    </div>
  );
}

export default App;
