import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout'
import LandingPage from './components/pages/LandingPage';
import CoursesPage from './components/pages/CoursesPage';
import CourseDeetsPage from './components/pages/CourseDetailPage';
import StudentRegPage from './components/pages/StudentRegistrationPage';
import StudentDashPage from './components/pages/StudentDashboard';
import CertPage from './components/pages/CertificatePage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" component={LandingPage} />
          <Route path="/courses" component={CoursesPage} />
          <Route path="/course-detail" component={CourseDeetsPage} />
          <Route path="/student-registration" component={StudentRegPage} />
          <Route path="/student-dashboard" component={StudentDashPage} />
          <Route path="/certificate" component={CertPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
