
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/AboutUs';
import DoubtPage from './pages/Doubt';
import CoursePage from './pages/Course-page/Course-page';

function App() {
  return (
    <Router>
      <Switch>
        <Route  exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/Doubt" component={DoubtPage} />
        {/* <Route path="/Course" component={CoursePage} /> */}
        <Route path="/courses/class6" component={CoursePage} />
  <Route path="/courses/class7" component={CoursePage} />
  <Route path="/courses/class8" component={CoursePage} />
  <Route path="/courses/class9" component={CoursePage} />
      </Switch>
    </Router>
  );
}

export default App;